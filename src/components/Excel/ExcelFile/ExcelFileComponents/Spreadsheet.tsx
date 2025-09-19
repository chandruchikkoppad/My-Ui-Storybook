import * as React from 'react';
import classNames from 'classnames';
import * as Types from './types';
import * as Actions from './actions';
import * as Matrix from './matrix';
import * as Point from './point';
import { Selection } from './selection';
import reducer, { INITIAL_STATE } from './reducer';
import context from './context';
import { Model, createFormulaParser } from './engine';
import {
  range,
  readTextFromClipboard,
  writeTextToClipboard,
  calculateSpreadsheetSize,
  getCSV,
  shouldHandleClipboardEvent,
  isFocusedWithin,
} from './util';

import DefaultTable from './Table';
import DefaultRow from './Row';
import DefaultHeaderRow from './HeaderRow';
import DefaultCornerIndicator, {
  enhance as enhanceCornerIndicator,
} from './CornerIndicator';
import DefaultColumnIndicator, {
  enhance as enhanceColumnIndicator,
} from './ColumnIndicator';
import DefaultRowIndicator, {
  enhance as enhanceRowIndicator,
} from './RowIndicator';
import { Cell as DefaultCell, enhance as enhanceCell } from './Cell';
import DefaultDataViewer from './DataViewer';
import DefaultDataEditor from './DataEditor';
import ActiveCell from './ActiveCell';
import Selected from './Selected';
import Copied from './Copied';
import './Spreadsheet.scss';
import ExcelToolBar from '../../ExcelToolBar/ExcelToolBar';
import { hasKeyDownHandler } from './reducerFunctions';
import { throttle } from '../../../../utils/throttle/throttle';

/** The Spreadsheet component props */
export type Props<CellType extends Types.CellBase> = {
  /** The spreadsheet's data */
  data: Matrix.Matrix<CellType>;
  /** Class name to be added to the spreadsheet's root element */
  className?: string;

  editable: boolean;

  createFormulaParser?: Types.CreateFormulaParser;
  /**
   * Labels to use in column indicators.
   * @defaultValue alphabetical labels.
   */
  columnLabels?: string[];
  /**
   * Labels to use in row indicators.
   * @defaultValue row index labels.
   */
  rowLabels?: string[];
  /**
   * If set to true, hides the row indicators of the spreadsheet.
   * @defaultValue `false`.
   */
  hideRowIndicators?: boolean;
  /**
   * If set to true, hides the column indicators of the spreadsheet.
   * @defaultValue `false`.
   */
  hideColumnIndicators?: boolean;
  /** The selected cells in the worksheet. */
  selected?: Selection;
  // Custom Components
  /** Component rendered above each column. */
  ColumnIndicator?: Types.ColumnIndicatorComponent;
  /** Component rendered in the corner of row and column indicators. */
  CornerIndicator?: Types.CornerIndicatorComponent;
  /** Component rendered next to each row. */
  RowIndicator?: Types.RowIndicatorComponent;
  /** The Spreadsheet's table component. */
  Table?: Types.TableComponent;
  /** The Spreadsheet's row component. */
  Row?: Types.RowComponent;
  /** The spreadsheet's header row component */
  HeaderRow?: Types.HeaderRowComponent;
  /** The Spreadsheet's cell component. */
  Cell?: Types.CellComponent<CellType>;
  /** Component rendered for cells in view mode. */
  DataViewer?: Types.DataViewerComponent<CellType>;
  /** Component rendered for cells in edit mode. */
  DataEditor?: Types.DataEditorComponent<CellType>;
  // Handlers
  /** Callback called on key down inside the spreadsheet. */
  onKeyDown?: (event: React.KeyboardEvent) => void;
  /** Callback called when the Spreadsheet's selection changes. */
  onSelect?: (selected: Selection) => void;
  /** Callback called when Spreadsheet's active cell changes. */
  onActivate?: (active: Point.Point) => void;
  /** Callback called when the Spreadsheet's evaluated data changes. */
  onEvaluatedDataChange?: (data: Matrix.Matrix<CellType>) => void;
  setContextMenu: React.Dispatch<React.SetStateAction<Types.ContextMenuState>>;
  /** Set your dynamic sheet Height*/
  sheetHeight: string;
  toolbar?: 'show' | 'disable' | 'hide';
  contextOption?: ContextMenuState;
  columnContextEnable: boolean;
  rowContextEnable: boolean;
  attachmentAction?: {
    addAttachment: (file: File) => Promise<string>;
    deleteAttachment: (fileId: string) => Promise<string>;
    viewAttachment: (fileId: string, fileName: string) => Promise<void>;
  };
  workRef: React.MutableRefObject<HTMLDivElement | null>;
  minimumColumnWidth: number;
  scroller: boolean;
  showHider: boolean;
  maxRowLimit: number;
  maxColLimit: number;
  disableDeleteOption: boolean;
  contextMenu: ContextMenuState;
  getActiveCell: (cell: { value: string; active: Point.Point }) => void;
  onAddColumn?: (column: number, isLeft: boolean) => void;
  onDeleteColumn?: (column: number) => void;
};

/**
 * The Spreadsheet component
 */
const Spreadsheet = React.forwardRef(function Spreadsheet<
  CellType extends Types.CellBase
>(
  props: Props<CellType>,
  ref: React.ForwardedRef<{ removeSelect: () => void }>
) {
  const {
    className,
    columnLabels,
    rowLabels,
    toolbar,
    editable,
    onKeyDown,
    Table = DefaultTable,
    Row = DefaultRow,
    sheetHeight,
    HeaderRow = DefaultHeaderRow,
    DataEditor = DefaultDataEditor,
    DataViewer = DefaultDataViewer,
    onSelect = () => {},
    onActivate = () => {},
    onEvaluatedDataChange = () => {},
    contextOption,
    attachmentAction,
    workRef,
    minimumColumnWidth,
    setContextMenu,
    showHider,
    maxRowLimit,
    maxColLimit,
    disableDeleteOption,
    contextMenu,
    getActiveCell,
    onAddColumn,
    onDeleteColumn,
  } = props;
  type State = Types.StoreState<CellType>;

  const [sheetChange, setSheetChange] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState(0);
  const [maxHeight, setMaxHeight] = React.useState(0);
  const [scrollPos, setScrollPos] = React.useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const scrollOption = props.scroller;
  const initialState = React.useMemo(() => {
    const createParser = (props.createFormulaParser ||
      createFormulaParser) as Types.CreateFormulaParser;
    const model = new Model(createParser, props.data);
    setSheetChange((prev) => !prev);
    return {
      ...INITIAL_STATE,
      model,
      selected: props.selected || INITIAL_STATE.selected,
    } as State;
  }, [props.createFormulaParser, props.data, props.selected]);

  const reducerElements = React.useReducer(
    reducer as unknown as React.Reducer<State, Actions.Action>,
    initialState
  );
  const [state, dispatch] = reducerElements;
  const [visibleRange, setVisibleRange] = React.useState({
    start: 0,
    end: 100,
  });
  const [scrollCount, setScrollCount] = React.useState(0);

  const size = React.useMemo(() => {
    return calculateSpreadsheetSize(state.model.data, rowLabels, columnLabels);
  }, [state.model.data, rowLabels, columnLabels]);

  const mode = state.mode;

  const rootRef = React.useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useAction = <T extends (...args: any[]) => Actions.Action>(
    action: T
  ) => {
    return React.useCallback(
      (...args: Parameters<T>) => dispatch(action(...args)),
      [action]
    );
  };

  const setEditable = useAction(Actions.editable);
  const cut = useAction(Actions.cut);
  const copy = useAction(Actions.copy);
  const removeSelect = useAction(Actions.blur);
  const paste = useAction(Actions.paste);
  const onKeyDownAction = useAction(Actions.keyDown);
  const onKeyPress = useAction(Actions.keyPress);
  const onDragStart = useAction(Actions.dragStart);
  const onDragEnd = useAction(Actions.dragEnd);
  const setData = useAction(Actions.setData);
  const setCreateFormulaParser = useAction(Actions.setCreateFormulaParser);
  const setSelection = useAction(Actions.setSelection);
  const onBold = useAction(Actions.bold);
  const onItalic = useAction(Actions.italic);
  const setUnderlineType = useAction(Actions.underlineType);
  const setTextAlign = useAction(Actions.textAlign);
  const setFontSize = useAction(Actions.fontSize);
  const setFontFamily = useAction(Actions.fontFamily);
  const setBorderType = useAction(Actions.borderType);
  const setColor = useAction(Actions.color);
  const setBackgroundColor = useAction(Actions.backgroundStyle);
  const setFormatePainter = useAction(Actions.formatePainter);
  const formateClick = useAction(Actions.onMouseUp);

  const addRowTop = useAction(Actions.addRowTop);
  const addRowBottom = useAction(Actions.addRowBottom);
  const addColumnLeft = useAction(Actions.addColumnLeft);
  const addColumnRight = useAction(Actions.addColumnRight);
  const deleteRow = useAction(Actions.deleteRow);
  const deleteColumn = useAction(Actions.deleteColumn);

  // Expose removeSelect
  React.useImperativeHandle(ref, () => ({
    removeSelect,
  }));

  // Track active
  const prevActiveRef = React.useRef<Point.Point | null>(state.active);
  React.useEffect(() => {
    if (state.active !== prevActiveRef.current) {
      if (state.active) {
        onActivate(state.active);
      } else {
        const root = workRef.current;
        if (root && isFocusedWithin(root) && document.activeElement) {
          (document.activeElement as HTMLElement).blur();
        }
      }
    }
    prevActiveRef.current = state.active;
  }, [onActivate, state.active]);

  const prevEvaluatedDataRef = React.useRef<Matrix.Matrix<CellType>>(
    state.model.evaluatedData
  );
  React.useEffect(() => {
    if (state?.model?.evaluatedData !== prevEvaluatedDataRef?.current) {
      onEvaluatedDataChange(state?.model?.evaluatedData);
    }

    prevEvaluatedDataRef.current = state.model.evaluatedData;
  }, [state?.model?.evaluatedData, onEvaluatedDataChange]);

  const prevSelectedRef = React.useRef<Selection>(state.selected);
  React.useEffect(() => {
    if (!state.selected.equals(prevSelectedRef.current)) {
      if (!props.selected || !state.selected.equals(props.selected)) {
        onSelect(state.selected);
      }
    }

    prevSelectedRef.current = state.selected;
  }, [state.selected, onSelect, props.selected]);

  // Update selection when props.selected changes
  const prevSelectedPropRef = React.useRef<Selection | undefined>(
    props.selected
  );
  React.useEffect(() => {
    if (
      props.selected &&
      prevSelectedPropRef.current &&
      !props.selected.equals(prevSelectedPropRef.current)
    ) {
      setSelection(props.selected);
    }
    prevSelectedPropRef.current = props.selected;
  }, [props.selected, setSelection]);

  // Update data when props.data changes
  let prevDataPropRef = React.useRef<Matrix.Matrix<CellType> | undefined>(
    props.data
  );
  React.useEffect(() => {
    setEditable(editable);
    if (props.data !== prevDataPropRef.current) {
      setData(props.data);
    }
    prevDataPropRef.current = props.data;
  }, [props.data, setData, editable]);

  const prevCreateFormulaParserPropRef = React.useRef<
    Types.CreateFormulaParser | undefined
  >(props.createFormulaParser);
  React.useEffect(() => {
    if (
      props.createFormulaParser !== prevCreateFormulaParserPropRef.current &&
      props.createFormulaParser
    )
      setCreateFormulaParser(props.createFormulaParser);
    prevCreateFormulaParserPropRef.current = props.createFormulaParser;
  }, [props.createFormulaParser, setCreateFormulaParser]);

  const writeDataToClipboard = React.useCallback(
    (event: ClipboardEvent): void => {
      const { model, selected } = state;
      const { data } = model;
      const range = selected.toRange(data);
      if (range) {
        const selectedData = Matrix.slice(range.start, range.end, data);
        const csv = getCSV(selectedData);
        writeTextToClipboard(event, csv);
      }
    },
    [state]
  );

  const handleCut = React.useCallback(
    (event: ClipboardEvent) => {
      if (shouldHandleClipboardEvent(rootRef.current, mode)) {
        event.preventDefault();
        event.stopPropagation();
        writeDataToClipboard(event);
        cut();
      }
    },
    [mode, writeDataToClipboard, cut]
  );

  const handleCopy = React.useCallback(
    (event: ClipboardEvent) => {
      if (shouldHandleClipboardEvent(rootRef.current, mode)) {
        event.preventDefault();
        event.stopPropagation();
        writeDataToClipboard(event);
        copy();
      }
    },
    [mode, writeDataToClipboard, copy]
  );

  const handlePaste = React.useCallback(
    (event: ClipboardEvent) => {
      if (shouldHandleClipboardEvent(rootRef.current, mode)) {
        event.preventDefault();
        event.stopPropagation();
        if (event.clipboardData) {
          const text = readTextFromClipboard(event);
          paste(text);
        }
      }
    },
    [mode, paste]
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      event.persist();
      if (onKeyDown) {
        onKeyDown(event);
      }
      if (!event.defaultPrevented) {
        if (hasKeyDownHandler(state, event)) {
          event.nativeEvent.preventDefault();
        }
        onKeyDownAction(event);
      }
    },
    [state, onKeyDown, onKeyDownAction]
  );

  const handleClick = React.useCallback(() => {
    if (state.formattedStyle.open && state.active) {
      formateClick(state.active);
    }
  }, [state]);

  const handleMouseUp = React.useCallback(() => {
    onDragEnd();
    document.removeEventListener('mouseup', handleMouseUp);
  }, [onDragEnd]);

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent) => {
      if (!state.dragging && event.buttons === 1) {
        onDragStart();
        document.addEventListener('mouseup', handleMouseUp);
      }
    },
    [state, onDragStart, handleMouseUp]
  );

  const Cell = React.useMemo(() => {
    // @ts-ignore
    return enhanceCell(props.Cell || DefaultCell);
  }, [props.Cell, sheetChange, editable]);

  const CornerIndicator = React.useMemo(
    () =>
      enhanceCornerIndicator(props.CornerIndicator || DefaultCornerIndicator),
    [props.CornerIndicator, sheetChange]
  );

  const RowIndicator = React.useMemo(
    () => enhanceRowIndicator(props.RowIndicator || DefaultRowIndicator),
    [props.RowIndicator, sheetChange]
  );

  const ColumnIndicator = React.useMemo(
    () =>
      enhanceColumnIndicator(props.ColumnIndicator || DefaultColumnIndicator),
    [props.ColumnIndicator, sheetChange]
  );

  React.useEffect(() => {
    document.addEventListener('cut', handleCut);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);

    return () => {
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
    };
  }, [handleCut, handleCopy, handlePaste]);

  const useTableRef = (ref: React.RefObject<HTMLTableElement>): void => {
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry && rootRef.current) {
        const target = entry.target as HTMLElement | null;
        if (target) {
          const { clientWidth, clientHeight } = target;
          setMaxHeight(Math.min(rootRef.current.clientHeight, clientHeight));
          if (showHider) {
            setMaxWidth(Math.min(rootRef.current.clientWidth, clientWidth));
          }
        }
      }
    });
    const table = ref.current;
    if (!table) return;
    resizeObserver.observe(table);
  };

  const updateVisibleRange = (
    newStart: number,
    newEnd: number,
    newScrollCount: number
  ) => {
    setScrollCount(newScrollCount);
    setVisibleRange({ start: newStart, end: newEnd });

    // Wait until next frame to scroll
    if (size.rows > 100) {
      requestAnimationFrame(() => {
        rootRef.current?.scrollTo({
          top: 1300,
          behavior: 'instant',
        });
      });
    }
  };

  const throttledHandleScroll = React.useMemo(
    () =>
      throttle((e: React.UIEvent<HTMLElement>) => {
        requestAnimationFrame(() => {
          const { scrollTop, scrollHeight, offsetHeight } =
            e.target as HTMLElement;
          const visibleRows = 100;
          const rowHeight = 50;
          const totalScroll = Math.ceil((size.rows - visibleRows) / rowHeight);
          const dynamicScroll = scrollHeight - offsetHeight;

          if (size.rows < visibleRows) {
            updateVisibleRange(0, size.rows, 0);
            setScrollCount(0);
          } else if (scrollTop === 0 && scrollCount !== 0) {
            const newScroll = scrollCount - 1;
            updateVisibleRange(
              newScroll * rowHeight,
              newScroll * rowHeight + visibleRows,
              newScroll
            );
            setScrollCount(newScroll);
          } else if (
            scrollTop > dynamicScroll - 30 &&
            scrollCount < totalScroll - 1
          ) {
            const newScroll = scrollCount + 1;
            updateVisibleRange(
              newScroll * rowHeight,
              newScroll * rowHeight + visibleRows,
              newScroll
            );
            setScrollCount(newScroll);
          } else if (
            scrollTop > dynamicScroll - 30 &&
            scrollCount < totalScroll
          ) {
            updateVisibleRange(
              (scrollCount + 1) * rowHeight,
              size.rows,
              scrollCount + 1
            );
            setScrollCount(scrollCount + 1);
          }
        });

        setContextMenu({
          open: false,
          contextType: null,
          options: [
            {
              label: '',
              value: '',
              iconName: '',
              action: () => {},
              disableTooltip: '',
              visible: false,
              disable: false,
            },
          ],
        });
      }, 100),
    [size.rows, scrollCount]
  );

  const scrollerFunction = () => {
    if (scrollOption) {
      return range(visibleRange.end, visibleRange.start);
    } else {
      return range(size.rows);
    }
  };

  const scrollToRow = (row: number, visibleRangeValue: Types.VisibleRange) => {
    const DEFAULT_ROW_HEIGHT = 32;
    if (scrollOption) {
      if (!rootRef?.current) return;
      requestAnimationFrame(() => {
        let scrollTop = 0;
        for (let r = 0; r <= row; r++) {
          scrollTop += state.rowDimensions?.[r]?.height || DEFAULT_ROW_HEIGHT;
        }

        if (row >= visibleRange.end - 1) {
          setVisibleRange((prev) => ({
            ...prev,
            start: visibleRangeValue?.start,
            end: visibleRangeValue?.end,
          }));
          rootRef?.current?.scrollTo({
            top: scrollTop + DEFAULT_ROW_HEIGHT,
            behavior: 'smooth',
          });
        }
      });
    } else {
      requestAnimationFrame(() => {
        let scrollTop = 0;
        for (let r = 0; r <= row; r++) {
          scrollTop += state.rowDimensions?.[r]?.height || DEFAULT_ROW_HEIGHT;
        }

        requestAnimationFrame(() => {
          if (!rootRef.current) return;
          if (row >= size.rows - 1) {
            rootRef?.current?.scrollTo({
              top: scrollTop + DEFAULT_ROW_HEIGHT,
              behavior: 'smooth',
            });
          }
        });
      });
    }
  };

  const scrollToColumn = (column: number) => {
    requestAnimationFrame(() => {
      let scrollLeft = 0;
      for (let c = 0; c <= column; c++) {
        scrollLeft += state.columnDimensions?.[c]?.left || minimumColumnWidth;
      }

      requestAnimationFrame(() => {
        if (!rootRef.current) return;
        if (column >= size.columns - 1) {
          rootRef.current.scrollTo({
            left: scrollLeft + 60,
            behavior: 'smooth',
          });
        }
      });
    });
  };

  const tableNode = React.useMemo(
    () => (
      <Table
        columns={size.columns}
        hideColumnIndicators={false}
        useTableRef={useTableRef}
      >
        <HeaderRow>
          {<CornerIndicator />}
          {range(size.columns).map((columnNumber) =>
            columnLabels ? (
              <ColumnIndicator
                key={columnNumber}
                column={columnNumber}
                minimumColumnWidth={minimumColumnWidth}
                setContextMenu={props.setContextMenu}
                label={
                  columnNumber in columnLabels
                    ? columnLabels[columnNumber]
                    : null
                }
                deleteColumn={deleteColumn}
                addColumnLeft={addColumnLeft}
                addColumnRight={addColumnRight}
                columnContextEnable={props.columnContextEnable}
                maxColLimit={maxColLimit}
                disableDeleteOption={disableDeleteOption}
                contextMenu={contextMenu}
                onAddColumn={onAddColumn}
                onDeleteColumn={onDeleteColumn}
                scrollToColumn={scrollToColumn}
              />
            ) : (
              <ColumnIndicator
                key={columnNumber}
                column={columnNumber}
                minimumColumnWidth={minimumColumnWidth}
                setContextMenu={props.setContextMenu}
                deleteColumn={deleteColumn}
                addColumnLeft={addColumnLeft}
                addColumnRight={addColumnRight}
                columnContextEnable={props.columnContextEnable}
                maxColLimit={maxColLimit}
                disableDeleteOption={disableDeleteOption}
                contextMenu={contextMenu}
                onAddColumn={onAddColumn}
                onDeleteColumn={onDeleteColumn}
                scrollToColumn={scrollToColumn}
              />
            )
          )}
        </HeaderRow>
        {scrollerFunction().map((rowNumber) => (
          <Row key={rowNumber} row={rowNumber}>
            {rowLabels ? (
              <RowIndicator
                key={rowNumber}
                label={rowNumber in rowLabels ? rowLabels[rowNumber] : null}
                row={rowNumber}
                addRowTop={addRowTop}
                addRowBottom={addRowBottom}
                deleteRow={deleteRow}
                setContextMenu={props.setContextMenu}
                rowContextEnable={props.rowContextEnable}
                maxRowLimit={maxRowLimit}
                disableDeleteOption={disableDeleteOption}
                contextMenu={contextMenu}
                setVisibleRange={setVisibleRange}
                scrollToRow={scrollToRow}
              />
            ) : (
              <RowIndicator
                key={rowNumber}
                row={rowNumber}
                addRowTop={addRowTop}
                addRowBottom={addRowBottom}
                deleteRow={deleteRow}
                setContextMenu={props.setContextMenu}
                rowContextEnable={props.rowContextEnable}
                maxRowLimit={maxRowLimit}
                disableDeleteOption={disableDeleteOption}
                contextMenu={contextMenu}
                setVisibleRange={setVisibleRange}
                scrollToRow={scrollToRow}
              />
            )}
            {range(size.columns).map((columnNumber) => (
              <Cell
                key={columnNumber}
                row={rowNumber}
                column={columnNumber}
                // @ts-ignore
                DataViewer={DataViewer}
                editable={editable}
              />
            ))}
          </Row>
        ))}
      </Table>
    ),
    [
      Table,
      size.rows,
      size.columns,
      Row,
      HeaderRow,
      CornerIndicator,
      columnLabels,
      ColumnIndicator,
      rowLabels,
      RowIndicator,
      Cell,
      DataViewer,
      visibleRange.end,
      visibleRange.start,
    ]
  );

  const activeCellNode = React.useMemo(
    () => (
      <ActiveCell
        attachmentAction={attachmentAction}
        contextOption={contextOption}
        getActiveCell={getActiveCell}
        setContextMenu={props.setContextMenu}
        // @ts-ignore
        DataEditor={DataEditor}
        visibleRange={visibleRange}
      />
    ),
    [DataEditor, visibleRange]
  );

  const rootNode = React.useMemo(
    () => (
      <div className="ff-excel-spreadsheet-container">
        <div
          style={{ width: `${maxWidth}px` }}
          className={classNames('ff-excel-header-column-hider', {
            'ff-excel-header-extend': ['show', 'disable'].includes(
              toolbar || ''
            ),
            'ff-excel-header-hider': toolbar === 'hide',
          })}
        />
        <div
          style={{ height: `${maxHeight}px` }}
          className={classNames('ff-excel-header-column-hider', {
            'ff-excel-header-extend': ['show', 'disable'].includes(
              toolbar || ''
            ),
            'ff-excel-header-hider': toolbar === 'hide',
          })}
        />
        {toolbar !== 'hide' && (
          <div className="ff-excel-toolbar-container">
            <ExcelToolBar
              editable={editable}
              toolbar={toolbar}
              onBold={onBold}
              onItalic={onItalic}
              setUnderlineType={setUnderlineType}
              setColor={setColor}
              setBorderType={setBorderType}
              setFontSize={setFontSize}
              setFontFamily={setFontFamily}
              setTextAlign={setTextAlign}
              setBackgroundColor={setBackgroundColor}
              setFormatePainter={setFormatePainter}
            />
          </div>
        )}

        <div
          ref={rootRef}
          style={{ height: sheetHeight }}
          className={classNames('ff-excel-spreadsheet', className)}
          onKeyPress={onKeyPress}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onScroll={(e) => {
            const target = e.target as HTMLElement;
            setScrollPos({ top: target.scrollTop, left: target.scrollLeft });
            scrollOption && throttledHandleScroll(e);
            setContextMenu({
              open: false,
              contextType: null,
              options: [
                {
                  label: '',
                  value: '',
                  iconName: '',
                  action: () => {},
                  disableTooltip: '',
                  visible: false,
                  disable: false,
                },
              ],
            });
          }}
        >
          {tableNode}
          {activeCellNode}
          <Selected visibleRange={visibleRange} scrollPos={scrollPos} />
          <Copied visibleRange={visibleRange} scrollPos={scrollPos} />
        </div>
      </div>
    ),
    [
      className,
      onKeyPress,
      handleKeyDown,
      handleMouseMove,
      tableNode,
      activeCellNode,
      maxWidth,
    ]
  );

  return (
    <context.Provider value={reducerElements}>{rootNode}</context.Provider>
  );
});

export default Spreadsheet;

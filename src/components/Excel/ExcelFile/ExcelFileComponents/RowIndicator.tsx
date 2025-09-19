import * as React from 'react';
import classNames from 'classnames';
import * as Actions from './actions';
import * as Point from './point';
import * as Types from './types';
import * as Matrix from './matrix';
import useDispatch from './use-dispatch';
import useSelector from './use-selector';
import Typography from '../../../Typography';
import { getMatrixDimensions } from './util';

const RowIndicator: Types.RowIndicatorComponent = ({
  row,
  label,
  selected,
  onSelect,
  setContextMenu,
  addRowTop,
  addRowBottom,
  deleteRow,
  rowContextEnable,
  selectedRow,
  cell,
  maxRowLimit,
  disableDeleteOption,
  contextMenu,
  setVisibleRange,
  scrollToRow,
}) => {
  const dispatch = useDispatch();
  const rowHeight = useSelector(
    (state) => state.rowDimensions[row]?.height || 32
  );

  const matrixData = useSelector((state) => state.model.data);

  const { rowCount } = getMatrixDimensions(matrixData as [[]]);

  const updateVisibleRangeEnd = (action: 'increment' | 'decrement') => {
    setVisibleRange((prev) => {
      const value = {
        ...prev,
        end: action === 'increment' ? prev.end + 1 : prev.end - 1,
      };
      if (selectedRow === rowCount - 1) {
        scrollToRow(selectedRow, value);
      }
      return value;
    });
  };

  const options = React.useMemo(() => {
    return [
      {
        label: 'Add Row Top',
        value: 'Add Row Top',
        iconName: 'plus_icon',
        action: () => {
          updateVisibleRangeEnd('increment');
          addRowTop();
        },
        disableTooltip: 'Row limit reached',
        visible: cell?.contextDisable?.['Add Row Top'] ?? false,
        disable: rowCount >= maxRowLimit,
      },
      {
        label: 'Add Row Bottom',
        value: 'Add Row Bottom',
        iconName: 'plus_icon',
        action: () => {
          updateVisibleRangeEnd('increment');
          addRowBottom();
        },
        disableTooltip: 'Row limit reached',
        visible: cell?.contextDisable?.['Add Row Bottom'] ?? false,
        disable: rowCount >= maxRowLimit,
      },
      ...(!disableDeleteOption
        ? [
            {
              label: 'Delete Row',
              value: 'Delete Row',
              iconName: 'delete',
              action: () => {
                updateVisibleRangeEnd('decrement');
                deleteRow();
              },
              disableTooltip: '',
              visible: cell?.contextDisable?.['Delete Row'] ?? false,
              disable: false,
            },
          ]
        : []),
    ];
  }, [selectedRow, row]);

  const handleMouseDrag = React.useCallback(
    (event: React.MouseEvent, isUp: boolean) => {
      const getTargetRow = isUp ? row : row - 1;
      const targetRow = Math.max(getTargetRow, 0);
      onSelect(targetRow, event.shiftKey);
      const startY = event.clientY;
      const initialHeight = rowHeight;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const newHeight = Math.max(
          32,
          initialHeight + (moveEvent.clientY - startY)
        );
        dispatch(Actions.setRowHeight(targetRow, newHeight));
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        dispatch(Actions.dragEnd());
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      dispatch(Actions.dragEnd());
    },
    [rowHeight, row]
  );

  const activate = React.useCallback(
    (point: Point.Point) => dispatch(Actions.activate(point)),
    [dispatch]
  );

  const handleClick = React.useCallback(
    (event: React.MouseEvent) => {
      onSelect(row, event.shiftKey);
    },
    [row]
  );

  const contextClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      onSelect(row, event.shiftKey);
      setContextMenu({
        open: rowContextEnable,
        contextType: 'row',
        options,
      });
    },
    [row, rowContextEnable, options, selectedRow]
  );

  React.useEffect(() => {
    if (selectedRow !== undefined) {
      setContextMenu((prev) => ({
        open: prev.open,
        contextType: 'row',
        options,
      }));
    }
  }, [
    row,
    rowContextEnable,
    options,
    selectedRow,
    contextMenu?.contextType === 'row',
  ]);

  return (
    <th
      className={classNames('ff-spreadsheet-header', {
        'ff-spreadsheet-header--selected': selected,
      })}
      style={{ height: `${rowHeight}px`, minWidth: '60px' }}
      onClick={handleClick}
      onContextMenu={contextClick}
      tabIndex={0}
    >
      <Typography fontWeight="medium">
        {label !== undefined ? label : row + 1}
      </Typography>
      <div
        className="drag-row-selector drag-row-down"
        onMouseDown={(e) => handleMouseDrag(e, true)}
        onDoubleClick={() => dispatch(Actions.setRowHeight(row, 32))}
        onClick={() => activate({ row, column: -1 })}
      />
      <div
        className="drag-row-selector drag-row-up"
        onMouseDown={(e) => handleMouseDrag(e, false)}
        onDoubleClick={() => dispatch(Actions.setRowHeight(row, 32))}
        onClick={() => activate({ row, column: -1 })}
      />
    </th>
  );
};

export default RowIndicator;

export const enhance = (
  RowIndicatorComponent: Types.RowIndicatorComponent
): React.FC<Omit<Types.RowIndicatorProps, 'selected' | 'onSelect'>> => {
  return function RowIndicatorWrapper(props) {
    const dispatch = useDispatch();
    const selected = useSelector((state) =>
      state.selected.hasEntireRow(props.row)
    );
    const cell = useSelector((state) =>
      state.active ? Matrix.get(state.active, state.model.data) : undefined
    );
    const selectedRow = useSelector((state) => state.selectedRow ?? undefined);

    const selectEntireRow = React.useCallback(
      (row: number, extend: boolean) =>
        dispatch(Actions.selectEntireRow(row, extend)),
      [dispatch]
    );

    return (
      <RowIndicatorComponent
        {...props}
        selected={selected}
        cell={cell}
        selectedRow={selectedRow}
        onSelect={selectEntireRow}
        scrollToRow={props.scrollToRow}
      />
    );
  };
};

import { PointRange } from './point-range';
import * as Matrix from './matrix';
import * as Types from './types';
import * as Point from './point';
import {
  EmptySelection,
  RangeSelection,
  EntireColumnsSelection,
  EntireRowsSelection,
  EntireWorksheetSelection,
} from './selection';
import { EmptyCell, isActive } from './util';
import * as Actions from './actions';
import { Model, updateCellValue, createFormulaParser } from './engine';
import {
  applyBackgroundColorToCells,
  applyBoldToCells,
  applyBorderToCells,
  applyColorToCells,
  applyFontFamily,
  applyFontSize,
  applyFormatePainter,
  applyItalicToCells,
  applyTextAlign,
  applyUnderlineToCells,
  blur,
  cellFormatePainter,
  clear,
  commit,
  dragEndAutoFill,
  dragEndFormatePainter,
  edit,
  getKeyDownHandler,
  isActiveReadOnly,
  view,
} from './reducerFunctions';
import { checkEmpty } from '../../../../utils/checkEmpty/checkEmpty';

export const INITIAL_STATE: Types.StoreState = {
  active: null,
  mode: 'view',
  rowDimensions: {},
  columnDimensions: {},
  lastChanged: null,
  hasPasted: false,
  cut: false,
  autoFill: { open: false, cellValue: { value: '', style: {} } },
  dragging: false,
  model: new Model(createFormulaParser, []),
  selected: new EmptySelection(),
  copied: null,
  lastCommit: null,
  selectedColumn: null,
  selectedRow: null,
  formattedStyle: { open: false, style: undefined },
  editable: false,
};

export default function reducer(
  state: Types.StoreState,
  action: Actions.Action
): Types.StoreState {
  switch (action.type) {
    case Actions.SET_EDITABLE: {
      const { editable } = action.payload as { editable: boolean };
      return {
        ...state,
        editable: editable,
      };
    }

    case Actions.SET_AUTO_FILL: {
      const { autofill } = action.payload;
      const activeCell = state.active;
      let currentCell: Types.CellBase<any> = EmptyCell;
      if (activeCell) {
        currentCell =
          Matrix.get(
            { row: activeCell.row, column: activeCell.column },
            state.model.data
          ) || currentCell;
      }
      return {
        ...state,
        autoFill: { open: autofill, cellValue: currentCell },
      };
    }

    case Actions.ADD_ROW_TOP: {
      let { selectedRow, selectedColumn, model } = state;
      if (checkEmpty(selectedRow)) {
        return state;
      }
      selectedRow = selectedRow as number;
      let updatedData = [...model.data];
      const newRow = Array(updatedData[0]?.length || 0).fill(EmptyCell);
      updatedData.splice(selectedRow, 0, newRow);
      const updatedModel = new Model(model.createFormulaParser, updatedData);

      return {
        ...state,
        model: updatedModel,
        selectedRow: selectedRow,
        selectedColumn: selectedColumn,
      };
    }

    case Actions.ADD_ROW_BOTTOM: {
      let { selectedRow, selectedColumn, model } = state;
      if (checkEmpty(selectedRow)) {
        return state;
      }
      selectedRow = selectedRow as number;
      let updatedData = [...model.data];
      const newRow = Array(updatedData[0]?.length || 0).fill(EmptyCell);
      updatedData.splice(selectedRow + 1, 0, newRow);
      const updatedModel = new Model(model.createFormulaParser, updatedData);

      return {
        ...state,
        model: updatedModel,
        selectedRow: selectedRow + 1,
        selectedColumn: selectedColumn,
      };
    }

    case Actions.ADD_COLUMN_LEFT: {
      let { selectedRow, selectedColumn, model } = state;
      if (checkEmpty(selectedColumn)) {
        return state;
      }
      selectedColumn = selectedColumn as number;
      let updatedData = [...model.data];
      updatedData = updatedData.map((row) => {
        return [
          ...row.slice(0, selectedColumn),
          EmptyCell,
          ...row.slice(selectedColumn),
        ];
      });

      const updatedModel = new Model(model.createFormulaParser, updatedData);

      return {
        ...state,
        model: updatedModel,
        selectedRow: selectedRow,
        selectedColumn: selectedColumn - 1,
      };
    }

    case Actions.ADD_COLUMN_RIGHT: {
      let { selectedRow, selectedColumn, model } = state;
      if (checkEmpty(selectedColumn)) {
        return state;
      }
      selectedColumn = selectedColumn as number;
      let updatedData = [...model.data];
      updatedData = updatedData.map((row) => {
        return [
          ...row.slice(0, selectedColumn + 1),
          EmptyCell,
          ...row.slice(selectedColumn + 1),
        ];
      });

      const updatedModel = new Model(model.createFormulaParser, updatedData);

      return {
        ...state,
        model: updatedModel,
        selectedRow: selectedRow,
        selectedColumn: selectedColumn + 1,
      };
    }

    case Actions.DELETE_ROW: {
      let { selectedRow, selectedColumn, model } = state;
      if (checkEmpty(selectedRow)) {
        return state;
      }
      selectedRow = selectedRow as number;
      let updatedData = [...model.data];

      updatedData.splice(selectedRow, 1);

      const updatedModel = new Model(model.createFormulaParser, updatedData);

      let newSelectedRow = selectedRow > 0 ? selectedRow - 1 : 0;
      let newSelectedColumn = !checkEmpty(selectedColumn) ? selectedColumn : 0;

      return {
        ...state,
        model: updatedModel,
        selectedRow: newSelectedRow,
        selectedColumn: newSelectedColumn,
      };
    }

    case Actions.DELETE_COLUMN: {
      const { selectedRow, selectedColumn, model } = state;
      if (checkEmpty(selectedColumn)) return state;
      const colIndex = selectedColumn as number;
      const updatedData = model.data.map((row) =>
        row.filter((_, cellIndex) => cellIndex !== colIndex)
      );
      const updatedModel = new Model(model.createFormulaParser, updatedData);
      const newSelectedRow = selectedRow || 0;
      const newSelectedColumn = colIndex > 0 ? colIndex - 1 : 0;

      return {
        ...state,
        model: updatedModel,
        selectedRow: newSelectedRow,
        selectedColumn: newSelectedColumn,
      };
    }

    case Actions.BOLD: {
      const selectedRange = state.selected.toRange(state.model.data);
      const updatedData = applyBoldToCells(
        state.model.data,
        selectedRange as PointRange,
        state.editable
      );
      return {
        ...state,
        model: new Model(state.model.createFormulaParser, updatedData),
      };
    }

    case Actions.ITALIC: {
      const selectedRange = state.selected.toRange(state.model.data);
      const updatedData = applyItalicToCells(
        state.model.data,
        selectedRange as PointRange,
        state.editable
      );
      return {
        ...state,
        model: new Model(state.model.createFormulaParser, updatedData),
      };
    }

    case Actions.BORDER_TYPE: {
      const { value, color } = action.payload;
      const selectedRange = state.selected.toRange(state.model.data);
      const updatedData = applyBorderToCells(
        state.model.data,
        selectedRange as PointRange,
        value,
        color,
        state.editable
      );
      return {
        ...state,
        model: new Model(state.model.createFormulaParser, updatedData),
      };
    }

    case Actions.UNDERLINE_TYPE: {
      const selectedRange = state.selected.toRange(state.model.data);
      const updatedData = applyUnderlineToCells(
        state.model.data,
        selectedRange as PointRange,
        state.editable
      );
      return {
        ...state,
        model: new Model(state.model.createFormulaParser, updatedData),
      };
    }

    case Actions.FONT_SIZE: {
      const { value } = action.payload;
      const selectedRange = state.selected.toRange(state.model.data);
      const updatedData = applyFontSize(
        state.model.data,
        selectedRange as PointRange,
        value,
        state.editable
      );
      return {
        ...state,
        model: new Model(state.model.createFormulaParser, updatedData),
      };
    }

    case Actions.FONT_FAMILY: {
      const { value } = action.payload;
      const selectedRange = state.selected.toRange(state.model.data);
      const updatedData = applyFontFamily(
        state.model.data,
        selectedRange as PointRange,
        value,
        state.editable
      );
      return {
        ...state,
        model: new Model(state.model.createFormulaParser, updatedData),
      };
    }

    case Actions.TEXT_ALIGN: {
      const { value } = action.payload;
      const selectedRange = state.selected.toRange(state.model.data);
      const updatedData = applyTextAlign(
        state.model.data,
        selectedRange as PointRange,
        value,
        state.editable
      );
      return {
        ...state,
        model: new Model(state.model.createFormulaParser, updatedData),
      };
    }

    case Actions.COLOR: {
      const { value } = action.payload;
      const selectedRange = state.selected.toRange(state.model.data);
      const updatedData = applyColorToCells(
        state.model.data,
        selectedRange as PointRange,
        value,
        state.editable
      );
      return {
        ...state,
        model: new Model(state.model.createFormulaParser, updatedData),
      };
    }

    case Actions.BACKGROUND_COLOR: {
      const { value } = action.payload;
      const selectedRange = state.selected.toRange(state.model.data);
      const updatedData = applyBackgroundColorToCells(
        state.model.data,
        selectedRange as PointRange,
        value,
        state.editable
      );

      return {
        ...state,
        model: new Model(state.model.createFormulaParser, updatedData),
      };
    }

    case Actions.FORMATE_PAINTER: {
      if (!state.editable) {
        return state;
      }
      const copiedStyle = applyFormatePainter(state.model.data, state.active);
      const selectedRange = state.selected.toRange(state.model.data);

      if (state.formattedStyle.open) {
        return {
          ...state,
          selected: new EmptySelection(),
          active: state.copied?.start || null,
          copied: null,
          formattedStyle: { open: false, style: undefined },
        };
      } else {
        return {
          ...state,
          selected: new EmptySelection(),
          active: null,
          copied: selectedRange,
          formattedStyle: { open: true, style: copiedStyle },
        };
      }
    }

    case Actions.SET_DATA: {
      const { data } = action.payload;
      const nextActive =
        state.active && Matrix.has(state.active, data) ? state.active : null;
      const nextSelected = state.selected.normalizeTo(data);
      return {
        ...state,
        model: new Model(state.model.createFormulaParser, data),
        active: nextActive,
        selected: nextSelected,
      };
    }

    case Actions.SET_CREATE_FORMULA_PARSER: {
      const { createFormulaParser } = action.payload;
      return {
        ...state,
        model: new Model(createFormulaParser, state.model.data),
      };
    }

    case Actions.SELECT_ENTIRE_ROW: {
      const { row, extend } = action.payload;
      const { active } = state;

      return {
        ...state,
        selected:
          extend && active
            ? new EntireRowsSelection(active.row, row)
            : new EntireRowsSelection(row, row),
        active: extend && active ? active : { ...Point.ORIGIN, row },
        mode: 'view',
        selectedColumn: null,
        selectedRow: row,
      };
    }

    case Actions.SELECT_ENTIRE_COLUMN: {
      const { column, extend } = action.payload;
      const { active } = state;
      return {
        ...state,
        selected:
          extend && active
            ? new EntireColumnsSelection(active.column, column)
            : new EntireColumnsSelection(column, column),
        active: extend && active ? active : { ...Point.ORIGIN, column },
        mode: 'view',
        selectedColumn: column,
        selectedRow: null,
      };
    }

    case Actions.SELECT_ENTIRE_WORKSHEET: {
      return {
        ...state,
        selected: new EntireWorksheetSelection(),
        active: Point.ORIGIN,
        mode: 'view',
      };
    }

    case Actions.SET_SELECTION: {
      const { selection } = action.payload;
      const range = selection.toRange(state.model.data);
      const active =
        state.active && selection.has(state.model.data, state.active)
          ? state.active
          : range?.start;
      return {
        ...state,
        selected: selection,
        active: active || null,
        mode: 'view',
      };
    }

    case Actions.SELECT: {
      const { point } = action.payload;
      if (state.active && !isActive(state.active, point)) {
        return {
          ...state,
          selected: new RangeSelection(new PointRange(point, state.active)),
          mode: 'view',
        };
      }
      return state;
    }

    case Actions.ACTIVATE: {
      const { point } = action.payload;
      return {
        ...state,
        selected: new RangeSelection(new PointRange(point, point)),
        active: point,
        mode: isActive(state.active, point) ? 'edit' : 'view',
      };
    }

    case Actions.SET_CELL_DATA: {
      const { active, data: cellData } = action.payload;
      if (isActiveReadOnly(state) || !state.editable) {
        return state;
      }
      return {
        ...state,
        model: updateCellValue(state.model, active, cellData),
        lastChanged: active,
      };
    }

    case Actions.SET_CELL_DIMENSIONS: {
      const { point, dimensions } = action.payload;
      const prevRowDimensions = state.rowDimensions[point.row];
      const prevColumnDimensions = state.columnDimensions[point.column];
      if (
        prevRowDimensions &&
        prevColumnDimensions &&
        prevRowDimensions.top === dimensions.top &&
        prevRowDimensions.height === dimensions.height &&
        prevColumnDimensions.left === dimensions.left &&
        prevColumnDimensions.width === dimensions.width
      ) {
        return state;
      }
      return {
        ...state,
        rowDimensions: {
          ...state.rowDimensions,
          [point.row]: { top: dimensions.top, height: dimensions.height },
        },
        columnDimensions: {
          ...state.columnDimensions,
          [point.column]: { left: dimensions.left, width: dimensions.width },
        },
      };
    }

    case Actions.COPY:

    case Actions.CUT: {
      const selectedRange = state.selected.toRange(state.model.data);
      return {
        ...state,
        copied: selectedRange,
        cut: action.type === Actions.CUT,
        hasPasted: false,
      };
    }

    case Actions.PASTE: {
      const { data: text } = action.payload;
      const { active } = state;

      if (!active || !state.editable) {
        return state;
      }

      const copied = Matrix.split(text, (value) => ({ value }));
      const copiedSize = Matrix.getSize(copied);

      const selectedRange = state.selected.toRange(state.model.data);
      if (selectedRange && copiedSize.rows === 1 && copiedSize.columns === 1) {
        const cell = Matrix.get({ row: 0, column: 0 }, copied);
        let newData =
          state.cut && state.copied
            ? Matrix.unset(state.copied.start, state.model.data)
            : state.model.data;
        const commit: Types.StoreState['lastCommit'] = [];
        for (const point of selectedRange || []) {
          const currentCell = Matrix.get(point, state.model.data);
          const updateWithStyle = { ...currentCell, value: cell?.value };
          commit.push({
            prevCell: currentCell || EmptyCell,
            nextCell: EmptyCell,
          });
          newData = Matrix.set(point, updateWithStyle, newData);
        }

        return {
          ...state,
          model: new Model(createFormulaParser, newData),
          copied: null,
          cut: false,
          hasPasted: true,
          mode: 'view',
          lastCommit: commit,
        };
      }

      const requiredSize: Matrix.Size = {
        rows: active.row + copiedSize.rows,
        columns: active.column + copiedSize.columns,
      };
      const paddedData = Matrix.pad(state.model.data, requiredSize);

      let acc: {
        data: Types.StoreState['model']['data'];
        commit: Types.StoreState['lastCommit'];
      } = { data: paddedData, commit: [] };
      for (const [point, cell] of Matrix.entries(copied)) {
        let commit = acc.commit || [];
        const nextPoint: Point.Point = {
          row: point.row + active.row,
          column: point.column + active.column,
        };

        let nextData = acc.data;

        if (state.cut) {
          if (state.copied) {
            const prevPoint: Point.Point = {
              row: point.row + state.copied.start.row,
              column: point.column + state.copied.start.column,
            };
            nextData = Matrix.unset(prevPoint, acc.data);
          }

          commit = [...commit, { prevCell: cell || null, nextCell: null }];
        }

        if (!Matrix.has(nextPoint, paddedData)) {
          acc = { data: nextData, commit };
        }

        const currentCell = Matrix.get(nextPoint, nextData) || null;

        commit = [
          ...commit,
          {
            prevCell: currentCell,
            nextCell: cell || null,
          },
        ];

        acc.data = Matrix.set(
          nextPoint,
          { value: '', ...currentCell, ...cell },
          nextData
        );
        acc.commit = commit;
      }

      return {
        ...state,
        model: new Model(createFormulaParser, acc.data),
        selected: new RangeSelection(
          new PointRange(active, {
            row: active.row + copiedSize.rows - 1,
            column: active.column + copiedSize.columns - 1,
          })
        ),
        copied: null,
        cut: false,
        hasPasted: true,
        mode: 'view',
        lastCommit: acc.commit,
      };
    }

    case Actions.EDIT: {
      return edit(state);
    }

    case Actions.VIEW: {
      return view(state);
    }

    case Actions.CLEAR: {
      return clear(state);
    }

    case Actions.BLUR: {
      return blur(state);
    }

    case Actions.KEY_PRESS: {
      const { event } = action.payload;

      if (isActiveReadOnly(state) || event.metaKey || !state.editable) {
        return state;
      }
      if (state.mode === 'view' && state.active) {
        const selectedRange = state.selected.toRange(state.model.data);
        if (selectedRange?.size() === 1) {
          return edit(clear(state));
        }
        return edit(state);
      }
      return state;
    }

    case Actions.KEY_DOWN: {
      const { event } = action.payload;
      if (isActiveReadOnly(state) || event.metaKey || !state.editable) {
        return state;
      }
      const handler = getKeyDownHandler(state, event);
      if (handler) {
        return { ...state, ...handler(state, event) };
      }
      return state;
    }

    case Actions.SET_ROW_HEIGHT: {
      const { row, height } = action.payload;
      const prevDimensions = state.rowDimensions[row] || { top: 0, height: 0 };
      return {
        ...state,
        rowDimensions: {
          ...state.rowDimensions,
          [row]: {
            top: prevDimensions.top,
            height,
          },
        },
      };
    }

    case Actions.SET_COLUMN_POSITION: {
      const { column, width } = action.payload;
      const prevDimensions = state.columnDimensions[column] || {
        left: 0,
        width: 0,
      };
      return {
        ...state,
        columnDimensions: {
          ...state.columnDimensions,
          [column]: {
            left: prevDimensions.left,
            width,
          },
        },
      };
    }

    case Actions.DRAG_START: {
      return { ...state, dragging: true };
    }

    case Actions.ON_MOUSE_UP: {
      const { point } = action.payload;
      let updatedData = state.model.data;

      if (!state.dragging && state.formattedStyle.open) {
        updatedData = cellFormatePainter(
          state.model.data,
          state.formattedStyle,
          state.active
        );
      }

      return {
        ...state,
        copied: null,
        model: new Model(state.model.createFormulaParser, updatedData),
        formattedStyle: { open: false, style: undefined },
        active: point,
      };
    }

    case Actions.DRAG_END: {
      const selectedRange = state.selected.toRange(state.model.data);
      const activeCell = state.active;
      let updatedData = state.model.data;
      if (state.formattedStyle.open) {
        updatedData = dragEndFormatePainter(
          state.model.data,
          selectedRange as PointRange,
          state.formattedStyle
        );
      }
      if (state.autoFill.open && state.editable) {
        updatedData = dragEndAutoFill(
          state.model.data,
          selectedRange as PointRange,
          state.autoFill.cellValue,
          activeCell
        );
        let { start, end } = selectedRange as PointRange;
        const rowCount = start.row - end.row;
        const columnCount = start.column - end.column;
        let startPoint = { row: 0, column: 0 };
        let endPoint = { row: 0, column: 0 };

        if (rowCount > columnCount) {
          startPoint = { row: activeCell?.row ?? 0, column: start.column };
          endPoint = { row: activeCell?.row ?? 0, column: end.column };
        } else {
          startPoint = { row: start.row, column: activeCell?.column ?? 0 };
          endPoint = { row: end.row, column: activeCell?.column ?? 0 };
        }
        return {
          ...state,
          dragging: false,
          autoFill: { open: false, cellValue: { value: '', style: {} } },
          formattedStyle: { open: false, style: undefined },
          model: new Model(state.model.createFormulaParser, updatedData),
          selected: new RangeSelection(new PointRange(startPoint, endPoint)),
        };
      }
      return {
        ...state,
        dragging: false,
        copied: null,
        autoFill: { open: false, cellValue: { value: '', style: {} } },
        formattedStyle: { open: false, style: undefined },
        model: new Model(state.model.createFormulaParser, updatedData),
      };
    }

    case Actions.COMMIT: {
      const { changes } = action.payload;
      return { ...state, ...commit(changes) };
    }

    default:
      throw new Error('Unknown action');
  }
}

// const reducer = createReducer(INITIAL_STATE, (builder) => {
//   builder.addMatcher(
//     (action) =>
//       action.type === Actions.copy.type || action.type === Actions.cut.type,
//     (state, action) => {

//     }
//   );
// });

// // Shared reducers

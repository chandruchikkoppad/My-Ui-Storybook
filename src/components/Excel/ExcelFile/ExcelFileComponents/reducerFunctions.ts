import { PointRange } from './point-range';
import * as Matrix from './matrix';
import * as Types from './types';
import * as Point from './point';
import {
  Selection,
  RangeSelection,
  EntireColumnsSelection,
  EntireRowsSelection,
  EmptySelection,
} from './selection';
import { createFormulaParser, Model } from './engine';
import { convertPtToPx } from './util';

export function applyBoldToCells(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  selectedRange: PointRange,
  editable: boolean
): Matrix.Matrix<Types.CellBase<any>> {
  if (!selectedRange) {
    return currentData;
  }

  const { start, end } = selectedRange;

  let updatedData = currentData;
  let anyBold = false;

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);
      if (!currentCell || !editable) continue;
      if (currentCell.readOnly) continue;
      if (currentCell.style?.fontWeight === 'bold') {
        anyBold = true;
        break;
      }
    }
    if (anyBold) break;
  }

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);
      if (!currentCell || !editable) continue;
      if (currentCell.readOnly) continue;
      const updatedCell = {
        ...currentCell,
        style: {
          ...currentCell.style,
          fontWeight: anyBold ? 'normal' : 'bold',
        },
      };
      updatedData = Matrix.set({ row, column: col }, updatedCell, updatedData);
    }
  }

  return updatedData;
}

export function applyItalicToCells(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  selectedRange: PointRange,
  editable: boolean
): Matrix.Matrix<Types.CellBase<any>> {
  if (!selectedRange) {
    return currentData;
  }

  const { start, end } = selectedRange;

  let updatedData = currentData;
  let anyItalic = false;

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);
      if (!currentCell || !editable) continue;
      if (currentCell.readOnly) continue;
      if (currentCell.style?.fontStyle === 'italic') {
        anyItalic = true;
        break;
      }
    }
    if (anyItalic) break;
  }

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);
      if (!currentCell || !editable) continue;
      if (currentCell.readOnly) continue;
      const updatedCell = {
        ...currentCell,
        style: {
          ...currentCell.style,
          fontStyle: anyItalic ? 'normal' : 'italic',
        },
      };
      updatedData = Matrix.set({ row, column: col }, updatedCell, updatedData);
    }
  }

  return updatedData;
}

export function applyFontFamily(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  selectedRange: PointRange,
  value: string,
  editable: boolean
): Matrix.Matrix<Types.CellBase<any>> {
  if (!selectedRange) {
    return currentData;
  }

  const { start, end } = selectedRange;

  let updatedData = currentData;

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);
      if (!currentCell || !editable) continue;
      if (currentCell.readOnly) continue;
      let updatedCell = {
        ...currentCell,
        style: {
          ...currentCell.style,
          fontFamily: value,
        },
      };

      updatedData = Matrix.set({ row, column: col }, updatedCell, updatedData);
    }
  }

  return updatedData;
}

export function applyFontSize(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  selectedRange: PointRange,
  value: string,
  editable: boolean
): Matrix.Matrix<Types.CellBase<any>> {
  if (!selectedRange) {
    return currentData;
  }

  const conversion = Number(value);

  if (isNaN(conversion)) {
    return currentData;
  }

  const fontSizeInPx = convertPtToPx(conversion);

  const { start, end } = selectedRange;

  let updatedData = currentData;

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);

      if (!currentCell || !editable) continue;
      if (currentCell.readOnly) continue;

      let updatedCell = {
        ...currentCell,
        style: {
          ...currentCell.style,
          fontSize: fontSizeInPx,
        },
      };

      updatedData = Matrix.set({ row, column: col }, updatedCell, updatedData);
    }
  }

  return updatedData;
}

export function applyBorderToCells(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  selectedRange: PointRange,
  value: string,
  color: string,
  editable: boolean
): Matrix.Matrix<Types.CellBase<any>> {
  if (!selectedRange) {
    return currentData;
  }

  let updatedData = currentData;

  const { start, end } = selectedRange;

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);

      if (!currentCell || !editable) continue;
      if (currentCell.readOnly) continue;
      let updatedCell = { ...currentCell };

      switch (value) {
        case 'border-all-sides':
          updatedCell.style = {
            ...currentCell.style,
            borderRight: `2px solid ${color}`,
            borderLeft: `2px solid ${color}`,
            borderTop: `2px solid ${color}`,
            borderBottom: `2px solid ${color}`,
          };
          break;
        case 'border-none':
          updatedCell.style = {
            ...currentCell.style,
            borderRight: `1px solid var(--excel-header-border)`,
            borderLeft: `1px solid var(--excel-header-border)`,
            borderTop: `1px solid var(--excel-header-border)`,
            borderBottom: `1px solid var(--excel-header-border)`,
          };
          break;
        case 'border-right':
          updatedCell.style = {
            ...currentCell.style,
            borderRight: `2px solid ${color}`,
          };
          break;

        case 'border-left':
          updatedCell.style = {
            ...currentCell.style,
            borderLeft: `2px solid ${color}`,
          };
          break;
        case 'border-top':
          updatedCell.style = {
            ...currentCell.style,
            borderTop: `2px solid ${color}`,
          };
          break;
        case 'border-bottom':
          updatedCell.style = {
            ...currentCell.style,
            borderBottom: `2px solid ${color}`,
          };
          break;
        default:
          break;
      }

      updatedData = Matrix.set({ row, column: col }, updatedCell, updatedData);
    }
  }

  return updatedData;
}

export function applyTextAlign(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  selectedRange: PointRange,
  value: string,
  editable: boolean
): Matrix.Matrix<Types.CellBase<any>> {
  if (!selectedRange) {
    return currentData;
  }

  const { start, end } = selectedRange;

  let updatedData = currentData;

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);

      if (!currentCell || !editable) continue;
      if (currentCell.readOnly) continue;
      let updatedCell = {
        ...currentCell,
        style: {
          ...currentCell.style,
          textAlign: value as TextAlign,
        },
      };

      updatedData = Matrix.set({ row, column: col }, updatedCell, updatedData);
    }
  }

  return updatedData;
}

export function applyUnderlineToCells(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  selectedRange: PointRange,
  editable: boolean
): Matrix.Matrix<Types.CellBase<any>> {
  if (!selectedRange) {
    return currentData;
  }

  const { start, end } = selectedRange;

  let updatedData = currentData;
  let anyUnderlined = false;

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);
      if (!currentCell || !editable) continue;
      if (currentCell.readOnly) continue;
      if (currentCell.style?.textDecoration === 'underline') {
        anyUnderlined = true;
        break;
      }
    }
    if (anyUnderlined) break;
  }

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);
      if (!currentCell || !editable) continue;
      if (currentCell.readOnly) continue;
      const updatedCell = {
        ...currentCell,
        style: {
          ...currentCell.style,
          textDecoration: anyUnderlined ? 'none' : 'underline',
        },
      };
      updatedData = Matrix.set({ row, column: col }, updatedCell, updatedData);
    }
  }

  return updatedData;
}

export function isValidHexColor(color: string): boolean {
  if (color.length !== 6) {
    return false;
  }

  const hexChars = '0123456789ABCDEFabcdef';
  for (let i = 1; i < color.length; i++) {
    if (!hexChars.includes(color[i] as string)) {
      return false;
    }
  }

  return true;
}

export function applyColorToCells(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  selectedRange: PointRange | null,
  color: string,
  editable: boolean
): Matrix.Matrix<Types.CellBase<any>> {
  if (!selectedRange) {
    return currentData;
  }

  const { start, end } = selectedRange;

  let updatedData = currentData;

  const isHex = isValidHexColor(color);

  const applyColor = isHex ? `#${color}` : color;

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);

      if (!currentCell || !editable) continue;
      if (currentCell.readOnly) continue;
      const updatedCell = {
        ...currentCell,
        style: {
          ...currentCell.style,
          color: applyColor,
        },
      };

      updatedData = Matrix.set({ row, column: col }, updatedCell, updatedData);
    }
  }

  return updatedData;
}

export function applyBackgroundColorToCells(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  selectedRange: PointRange | null,
  backgroundColor: string,
  editable: boolean
): Matrix.Matrix<Types.CellBase<any>> {
  if (!selectedRange) {
    return currentData;
  }

  if (selectedRange) {
    const { start, end } = selectedRange;

    let updatedData = currentData;

    const isHex = isValidHexColor(backgroundColor);

    const applyColor = isHex ? `#${backgroundColor}` : backgroundColor;

    for (let row = start.row; row <= end.row; row++) {
      for (let col = start.column; col <= end.column; col++) {
        const currentCell = Matrix.get({ row, column: col }, updatedData);

        if (!currentCell || !editable) continue;
        if (currentCell.readOnly) continue;

        const updatedCell = {
          ...currentCell,
          style: {
            ...currentCell.style,
            backgroundColor: applyColor,
          },
        };

        updatedData = Matrix.set(
          { row, column: col },
          updatedCell,
          updatedData
        );
      }
    }

    return updatedData;
  }
  return currentData;
}

export function applyFormatePainter(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  activePoint: Point.Point | null
): React.CSSProperties | undefined {
  if (!activePoint) {
    return undefined;
  }

  const { row, column } = activePoint;
  let updatedData = { ...currentData };

  const currentCell = Matrix.get({ row, column }, updatedData);

  if (currentCell && currentCell.style) {
    return currentCell.style;
  }

  return undefined;
}

export function cellFormatePainter(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  formattedStyle: Types.formattedStyle,
  activePoint: Point.Point | null
): Matrix.Matrix<Types.CellBase<any>> {
  if (!activePoint || !formattedStyle.open) {
    return currentData;
  }
  let updatedData = currentData;
  const currentCell = Matrix.get(activePoint, updatedData);
  if (currentCell && !currentCell.readOnly) {
    const updatedCell = {
      ...currentCell,
      style: formattedStyle.style,
    };
    updatedData = Matrix.set(activePoint, updatedCell, updatedData);
  }
  return updatedData;
}

export function dragEndFormatePainter(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  selectedRange: PointRange | null,
  formattedStyle: Types.formattedStyle
): Matrix.Matrix<Types.CellBase<any>> {
  if (!selectedRange || !formattedStyle.open) {
    return currentData;
  }

  const { start, end } = selectedRange;
  let updatedData = currentData;

  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.column; col <= end.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);
      if (!currentCell) continue;
      if (currentCell.readOnly) continue;
      const updatedCell = {
        ...currentCell,
        style: formattedStyle.style,
      };
      updatedData = Matrix.set({ row, column: col }, updatedCell, updatedData);
    }
  }
  return updatedData;
}

export function dragEndAutoFill(
  currentData: Matrix.Matrix<Types.CellBase<any>>,
  selectedRange: PointRange | null,
  cellValue: Types.CellBase,
  activeCell: Point.Point | null
): Matrix.Matrix<Types.CellBase<any>> {
  if (!selectedRange) {
    return currentData;
  }
  const { start, end } = selectedRange;
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

  let updatedData = currentData;

  for (let row = startPoint.row; row <= endPoint.row; row++) {
    for (let col = startPoint.column; col <= endPoint.column; col++) {
      const currentCell = Matrix.get({ row, column: col }, updatedData);

      if (
        !currentCell ||
        currentCell.readOnly ||
        ['file', 'dropDown'].includes(currentCell?.inputType?.type || '')
      ) {
        continue;
      }

      const updatedCell = {
        ...currentCell,
        style: cellValue.style,
        value: cellValue.value,
        inputType: cellValue.inputType,
      };

      updatedData = Matrix.set({ row, column: col }, updatedCell, updatedData);
    }
  }
  return updatedData;
}

export function edit(state: Types.StoreState): Types.StoreState {
  if (isActiveReadOnly(state) || !state.editable) {
    return state;
  }
  return { ...state, mode: 'edit' };
}

const canClearCell = (cell: Types.CellBase | undefined) =>
  cell && !cell.readOnly;

const clearCell = (cell: Types.CellBase | undefined) => {
  if (!canClearCell(cell) || cell?.inputType?.type === 'file') {
    return cell;
  }
  return {
    ...cell,
    value: '',
    style: cell?.style,
  };
};

const nextLine = (cell: Types.CellBase | undefined) => {
  if (!cell) return undefined;
  return {
    ...cell,
    value: (cell.value || '') + '\n',
    style: cell.style,
  };
};

export function clear(state: Types.StoreState): Types.StoreState {
  if (!state.active) {
    return state;
  }

  const selectedRange = state.selected.toRange(state.model.data);

  const changes: Types.CommitChanges = [];
  let newData = state.model.data;

  for (const point of selectedRange || []) {
    const cell = Matrix.get(point, state.model.data);
    const clearedCell = clearCell(cell);
    changes.push({
      prevCell: cell || null,
      nextCell: clearedCell || null,
    });
    newData = Matrix.set(point, clearedCell, newData);
  }

  return {
    ...state,
    model: new Model(createFormulaParser, newData),
    ...commit(changes),
  };
}

export function clearEditMode(state: Types.StoreState): Types.StoreState {
  if (!state.active) {
    return state;
  }

  if (state.mode === 'view') {
    const resultState = clear(state);
    return resultState;
  } else {
    const changes: Types.CommitChanges = [];
    let newData = state.model.data;
    const cell = Matrix.get(state.active, state.model.data);
    const clearedCell = clearCell(cell);
    changes.push({
      prevCell: cell || null,
      nextCell: clearedCell || null,
    });
    newData = Matrix.set(state.active, clearedCell, newData);
    return {
      ...state,
      mode: 'edit',
      model: new Model(createFormulaParser, newData),
      ...commit(changes),
    };
  }
}
export function enterFunctionality(state: Types.StoreState): Types.StoreState {
  if (!state.active) {
    return state;
  }
  const selectedRange = state.selected.toRange(state.model.data);

  const changes: Types.CommitChanges = [];
  let newData = state.model.data;

  for (const point of selectedRange || []) {
    const cell = Matrix.get(point, state.model.data);

    const nextLineCell = nextLine(cell);

    changes.push({
      prevCell: cell || null,
      nextCell: nextLineCell || null,
    });
    newData = Matrix.set(point, nextLineCell, newData);
  }

  return {
    ...state,
    mode: 'edit',
    model: new Model(createFormulaParser, newData),
    ...commit(changes),
  };
}

export function blur(state: Types.StoreState): Types.StoreState {
  return {
    ...state,
    active: null,
    copied: null,
    formattedStyle: { open: false, style: undefined },
    selected: new EmptySelection(),
  };
}

export function view(state: Types.StoreState): Types.StoreState {
  return { ...state, mode: 'view' };
}

export function commit(
  changes: Types.CommitChanges
): Partial<Types.StoreState> {
  return { lastCommit: changes };
}

export const go =
  (rowDelta: number, columnDelta: number): KeyDownHandler =>
  (state) => {
    if (!state.active) {
      return;
    }
    const size = Matrix.getSize(state.model.data);
    const newColumn = state.active.column + columnDelta;
    const shouldWrap = newColumn >= size.columns;
    const nextActive = {
      row: state.active.row + rowDelta + (shouldWrap ? 1 : 0),
      column: (state.active.column + columnDelta) % size.columns,
    };
    if (!Matrix.has(nextActive, state.model.data)) {
      return { ...state, mode: 'view' };
    }
    return {
      ...state,
      active: nextActive,
      selected: new RangeSelection(new PointRange(nextActive, nextActive)),
      mode: 'view',
    };
  };

// Key Bindings

type TextAlign = 'left' | 'center' | 'right';

export type KeyDownHandler = (
  state: Types.StoreState,
  event: React.KeyboardEvent
) => Types.StoreState | void;

type KeyDownHandlers = Record<string, KeyDownHandler | undefined>;

const keyDownHandlers: KeyDownHandlers = {
  ArrowUp: go(-1, 0),
  ArrowDown: go(+1, 0),
  ArrowLeft: go(0, -1),
  ArrowRight: go(0, +1),
  Tab: go(0, +1),
  Enter: edit,
  Backspace: clearEditMode,
  Delete: clear,
  Escape: blur,
};

const editKeyDownHandlers: KeyDownHandlers = {
  Escape: view,
  Tab: keyDownHandlers.Tab,
  Enter: keyDownHandlers.ArrowDown,
  Delete: clear,
};

const editShiftKeyDownHandlers: KeyDownHandlers = {
  Tab: go(0, -1),
};

export enum Direction {
  Left = 'Left',
  Right = 'Right',
  Top = 'Top',
  Bottom = 'Bottom',
}

const shiftKeyDownHandlers: KeyDownHandlers = {
  ArrowUp: (state) => ({
    ...state,
    selected: modifyEdge(
      state.selected,
      state.active,
      state.model.data,
      Direction.Top
    ),
  }),
  ArrowDown: (state) => ({
    ...state,
    selected: modifyEdge(
      state.selected,
      state.active,
      state.model.data,
      Direction.Bottom
    ),
  }),
  ArrowLeft: (state) => ({
    ...state,
    selected: modifyEdge(
      state.selected,
      state.active,
      state.model.data,
      Direction.Left
    ),
  }),
  ArrowRight: (state) => ({
    ...state,
    selected: modifyEdge(
      state.selected,
      state.active,
      state.model.data,
      Direction.Right
    ),
  }),
  Tab: go(0, -1),
};

const shiftMetaKeyDownHandlers: KeyDownHandlers = {};
const metaKeyDownHandlers: KeyDownHandlers = {};

export function getKeyDownHandler(
  state: Types.StoreState,
  event: React.KeyboardEvent
): KeyDownHandler | undefined {
  const { key } = event;
  let handlers;
  if (state.mode === 'edit') {
    if (event.shiftKey && key === 'Enter') {
      handlers = keyDownHandlers;
    } else if (event.altKey && key === 'Enter') {
      return enterFunctionality;
    } else if (event.shiftKey) {
      handlers = editShiftKeyDownHandlers;
    } else {
      handlers = editKeyDownHandlers;
    }
  } else if (event.shiftKey && event.metaKey) {
    handlers = shiftMetaKeyDownHandlers;
  } else if (event.shiftKey) {
    handlers = shiftKeyDownHandlers;
  } else if (event.metaKey) {
    handlers = metaKeyDownHandlers;
  } else {
    handlers = keyDownHandlers;
  }

  return handlers[key];
}

/** Returns whether the reducer has a handler for the given keydown event */
export function hasKeyDownHandler(
  state: Types.StoreState,
  event: React.KeyboardEvent
): boolean {
  return getKeyDownHandler(state, event) !== undefined;
}

/** Returns whether the active cell is read only */
export function isActiveReadOnly(state: Types.StoreState): boolean {
  const activeCell = getActive(state);
  return Boolean(activeCell?.readOnly);
}

/** Gets active cell from given state */
export function getActive(state: Types.StoreState): Types.CellBase | null {
  const activeCell = state.active && Matrix.get(state.active, state.model.data);
  return activeCell || null;
}

/** Modify given edge according to given active point and data */
export function modifyEdge<T extends Selection>(
  selection: T,
  active: Point.Point | null,
  data: Matrix.Matrix<unknown>,
  direction: Direction
): T {
  if (!active) {
    return selection;
  }
  if (selection instanceof RangeSelection) {
    const nextSelection = modifyRangeSelectionEdge(
      selection,
      active,
      data,
      direction
    );
    // @ts-expect-error
    return nextSelection;
  }
  if (selection instanceof EntireColumnsSelection) {
    // @ts-expect-error
    return modifyEntireColumnsSelection(selection, active, data, direction);
  }
  if (selection instanceof EntireRowsSelection) {
    // @ts-expect-error
    return modifyEntireRowsSelection(selection, active, data, direction);
  }
  return selection;
}

export function modifyRangeSelectionEdge(
  rangeSelection: RangeSelection,
  active: Point.Point,
  data: Matrix.Matrix<unknown>,
  edge: Direction
): RangeSelection {
  const field =
    edge === Direction.Left || edge === Direction.Right ? 'column' : 'row';

  const key =
    edge === Direction.Left || edge === Direction.Top ? 'start' : 'end';
  const delta = key === 'start' ? -1 : 1;

  const edgeOffsets = rangeSelection.range.has({
    ...active,
    [field]: active[field] + delta * -1,
  });

  const keyToModify = edgeOffsets ? (key === 'start' ? 'end' : 'start') : key;

  const nextRange = new PointRange(
    rangeSelection.range.start,
    rangeSelection.range.end
  );

  nextRange[keyToModify][field] += delta;

  const nextSelection = new RangeSelection(nextRange).normalizeTo(data);

  return nextSelection;
}

export function modifyEntireRowsSelection(
  selection: EntireRowsSelection,
  active: Point.Point,
  data: Matrix.Matrix<unknown>,
  edge: Direction
): EntireRowsSelection {
  if (edge === Direction.Left || edge === Direction.Right) {
    return selection;
  }
  const delta = edge === Direction.Top ? -1 : 1;
  const property = edge === Direction.Top ? 'start' : 'end';
  const oppositeProperty = property === 'start' ? 'end' : 'start';
  const newSelectionData = { ...selection };
  if (
    edge === Direction.Top
      ? selection.end > active.row
      : selection.start < active.row
  ) {
    newSelectionData[oppositeProperty] = selection[oppositeProperty] + delta;
  } else {
    newSelectionData[property] = selection[property] + delta;
  }
  const nextSelection = new EntireRowsSelection(
    Math.max(newSelectionData.start, 0),
    Math.max(newSelectionData.end, 0)
  );
  return nextSelection.normalizeTo(data);
}

export function modifyEntireColumnsSelection(
  selection: EntireColumnsSelection,
  active: Point.Point,
  data: Matrix.Matrix<unknown>,
  edge: Direction
): EntireColumnsSelection {
  if (edge === Direction.Top || edge === Direction.Bottom) {
    return selection;
  }
  const delta = edge === Direction.Left ? -1 : 1;
  const property = edge === Direction.Left ? 'start' : 'end';
  const oppositeProperty = property === 'start' ? 'end' : 'start';
  const newSelectionData = { ...selection };
  if (
    edge === Direction.Left
      ? selection.end > active.row
      : selection.start < active.row
  ) {
    newSelectionData[oppositeProperty] = selection[oppositeProperty] + delta;
  } else {
    newSelectionData[property] = selection[property] + delta;
  }
  const nextSelection = new EntireColumnsSelection(
    Math.max(newSelectionData.start, 0),
    Math.max(newSelectionData.end, 0)
  );
  return nextSelection.normalizeTo(data);
}

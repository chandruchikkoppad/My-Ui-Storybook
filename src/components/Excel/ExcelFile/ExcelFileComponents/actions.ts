import { Matrix } from './matrix';
import { Point } from './point';
import {
  CellBase,
  Dimensions,
  CommitChanges,
  CreateFormulaParser,
} from './types';
import { Selection } from './selection';

export const SET_DATA = 'SET_DATA';
export const SET_CREATE_FORMULA_PARSER = 'SET_CREATE_FORMULA_PARSER';
export const SELECT_ENTIRE_ROW = 'SELECT_ENTIRE_ROW';
export const SELECT_ENTIRE_COLUMN = 'SELECT_ENTIRE_COLUMN';
export const SELECT_ENTIRE_WORKSHEET = 'SELECT_ENTIRE_WORKSHEET';
export const SET_SELECTION = 'SET_SELECTION';
export const SELECT = 'SELECT';
export const ACTIVATE = 'ACTIVATE';
export const SET_CELL_DATA = 'SET_CELL_DATA';
export const SET_CELL_DIMENSIONS = 'SET_CELL_DIMENSIONS';
export const COPY = 'COPY';
export const CUT = 'CUT';
export const PASTE = 'PASTE';
export const EDIT = 'EDIT';
export const VIEW = 'VIEW';
export const CLEAR = 'CLEAR';
export const BLUR = 'BLUR';
export const KEY_PRESS = 'KEY_PRESS';
export const KEY_DOWN = 'KEY_DOWN';
export const DRAG_START = 'DRAG_START';
export const DRAG_END = 'DRAG_END';
export const COMMIT = 'COMMIT';
export const BOLD = 'BOLD';
export const ITALIC = 'ITALIC';
export const UNDERLINE_TYPE = 'UNDERLINE_TYPE';
export const FONT_FAMILY = 'FONT_FAMILY';
export const FONT_SIZE = 'FONT_SIZE';
export const TEXT_ALIGN = 'TEXT_ALIGN';
export const BORDER_TYPE = 'BORDER_TYPE';
export const COLOR = 'COLOR';
export const BACKGROUND_COLOR = 'BACKGROUND_COLOR';
export const FORMATE_PAINTER = 'FORMATE_PAINTER';
export const ADD_ROW_TOP = 'ADD_ROW_TOP';
export const ADD_ROW_BOTTOM = 'ADD_ROW_BOTTOM';
export const ADD_COLUMN_LEFT = 'ADD_COLUMN_LEFT';
export const ADD_COLUMN_RIGHT = 'ADD_COLUMN_RIGHT';
export const DELETE_ROW = 'DELETE_ROW';
export const DELETE_COLUMN = 'DELETE_COLUMN';
export const SET_ROW_HEIGHT = 'SET_ROW_HEIGHT';
export const SET_COLUMN_POSITION = 'SET_COLUMN_POSITION';
export const SET_AUTO_FILL = 'SET_AUTO_FILL';
export const SET_EDITABLE = 'SET_EDITABLE';
export const ON_MOUSE_UP = 'ON_MOUSE_UP';

export type BaseAction<T extends string> = {
  type: T;
};

export type OnMouseUp = BaseAction<typeof ON_MOUSE_UP> & {
  payload: {
    point: Point;
  };
};

export function onMouseUp(point: Point): OnMouseUp {
  return {
    type: ON_MOUSE_UP,
    payload: { point },
  };
}

export type SetEditable = BaseAction<typeof SET_EDITABLE> & {
  payload: { editable: boolean };
};

export function editable(editable: boolean): SetEditable {
  return {
    type: SET_EDITABLE,
    payload: { editable },
  };
}

export type SetAutoFill = BaseAction<typeof SET_AUTO_FILL> & {
  payload: { autofill: boolean };
};

export function autoFill(autofill: boolean): SetAutoFill {
  return {
    type: SET_AUTO_FILL,
    payload: { autofill },
  };
}

export type SetRowHeight = BaseAction<typeof SET_ROW_HEIGHT> & {
  payload: { row: number; height: number };
};

export function setRowHeight(row: number, height: number): SetRowHeight {
  return {
    type: SET_ROW_HEIGHT,
    payload: { row, height },
  };
}

export type SetColumnPosition = BaseAction<typeof SET_COLUMN_POSITION> & {
  payload: { column: number; width: number };
};

export function setColumnPosition(
  column: number,
  width: number
): SetColumnPosition {
  return {
    type: SET_COLUMN_POSITION,
    payload: { column, width },
  };
}

export type BoldStyle = BaseAction<typeof BOLD> & {
  payload: {
    data: Matrix<CellBase>;
  };
};

export function bold(data: Matrix<CellBase>): BoldStyle {
  return {
    type: BOLD,
    payload: { data },
  };
}

export type ItalicStyle = BaseAction<typeof ITALIC> & {
  payload: {
    data: Matrix<CellBase>;
  };
};

export function italic(data: Matrix<CellBase>): ItalicStyle {
  return {
    type: ITALIC,
    payload: { data },
  };
}

export type BorderType = BaseAction<typeof BORDER_TYPE> & {
  payload: {
    data: Matrix<CellBase>;
    value: string;
    color: string;
  };
};

export function borderType(
  data: Matrix<CellBase>,
  value: string,
  color: string
): BorderType {
  return {
    type: BORDER_TYPE,
    payload: { data, value, color },
  };
}

export type UnderlineTypeStyle = BaseAction<typeof UNDERLINE_TYPE> & {
  payload: {
    data: Matrix<CellBase>;
  };
};

export function underlineType(data: Matrix<CellBase>): UnderlineTypeStyle {
  return {
    type: UNDERLINE_TYPE,
    payload: { data },
  };
}

export type FontSize = BaseAction<typeof FONT_SIZE> & {
  payload: {
    data: Matrix<CellBase>;
    value: string;
  };
};

export function fontSize(data: Matrix<CellBase>, value: string): FontSize {
  return {
    type: FONT_SIZE,
    payload: { data, value },
  };
}

export type FontFamily = BaseAction<typeof FONT_FAMILY> & {
  payload: {
    data: Matrix<CellBase>;
    value: string;
  };
};

export function fontFamily(data: Matrix<CellBase>, value: string): FontFamily {
  return {
    type: FONT_FAMILY,
    payload: { data, value },
  };
}

export type TextAlignType = BaseAction<typeof TEXT_ALIGN> & {
  payload: {
    data: Matrix<CellBase>;
    value: string;
  };
};

export function textAlign(
  data: Matrix<CellBase>,
  value: string
): TextAlignType {
  return {
    type: TEXT_ALIGN,
    payload: { data, value },
  };
}

export type ColorStyle = BaseAction<typeof COLOR> & {
  payload: {
    data: Matrix<CellBase>;
    value: string;
  };
};

export function color(data: Matrix<CellBase>, value: string): ColorStyle {
  return {
    type: COLOR,
    payload: { data, value },
  };
}

export type BackgroundStyle = BaseAction<typeof BACKGROUND_COLOR> & {
  payload: {
    data: Matrix<CellBase>;
    value: string;
  };
};

export function backgroundStyle(
  data: Matrix<CellBase>,
  value: string
): BackgroundStyle {
  return {
    type: BACKGROUND_COLOR,
    payload: { data, value },
  };
}

export type FormatePainterStyle = BaseAction<typeof FORMATE_PAINTER> & {
  payload: {
    data: Matrix<CellBase>;
  };
};

export function formatePainter(data: Matrix<CellBase>): FormatePainterStyle {
  return {
    type: FORMATE_PAINTER,
    payload: { data },
  };
}

type RowNum = {
  row: number | undefined
}

type ColNum = {
  columnWidth?: number | undefined
  column: number | undefined
}

export type AddRowTop = BaseAction<typeof ADD_ROW_TOP> & RowNum;

export function addRowTop(row?: number): AddRowTop {
  return {
    type: ADD_ROW_TOP,
    row,
  };
}
export type AddRowBottom = BaseAction<typeof ADD_ROW_BOTTOM> & RowNum;

export function addRowBottom(row?: number): AddRowBottom {
  return {
    type: ADD_ROW_BOTTOM,
    row,
  };
}

export type AddColumnLeft = BaseAction<typeof ADD_COLUMN_LEFT> & ColNum;

export function addColumnLeft(columnWidth?: number, column?: number): AddColumnLeft {
  return {
    type: ADD_COLUMN_LEFT,
    columnWidth,
    column,
  };
}

export type AddColumnRight = BaseAction<typeof ADD_COLUMN_RIGHT> & ColNum;

export function addColumnRight(columnWidth?: number, column?: number): AddColumnRight {
  return {
    type: ADD_COLUMN_RIGHT,
    columnWidth,
    column,
  };
}

export type DeleteRow = BaseAction<typeof DELETE_ROW> & RowNum;

export function deleteRow(row?: number): DeleteRow {
  return {
    type: DELETE_ROW,
    row,
  };
}

export type DeleteColumn = BaseAction<typeof DELETE_COLUMN> & ColNum;

export function deleteColumn(column?: number): DeleteColumn {
  return {
    type: DELETE_COLUMN,
    column
  };
}

export type SetDataAction = BaseAction<typeof SET_DATA> & {
  payload: {
    data: Matrix<CellBase>;
  };
};

export type KeyPressAction = BaseAction<typeof KEY_PRESS> & {
  payload: {
    event: React.KeyboardEvent;
  };
};

export function keyPress(event: React.KeyboardEvent): KeyPressAction {
  return {
    type: KEY_PRESS,
    payload: { event },
  };
}

export function setData(data: Matrix<CellBase>): SetDataAction {
  return {
    type: SET_DATA,
    payload: { data },
  };
}

export type SetCreateFormulaParserAction = BaseAction<
  typeof SET_CREATE_FORMULA_PARSER
> & {
  payload: {
    createFormulaParser: CreateFormulaParser;
  };
};

export function setCreateFormulaParser(
  createFormulaParser: CreateFormulaParser
): SetCreateFormulaParserAction {
  return {
    type: SET_CREATE_FORMULA_PARSER,
    payload: { createFormulaParser },
  };
}

export type SelectEntireRowAction = BaseAction<typeof SELECT_ENTIRE_ROW> & {
  payload: {
    row: number;
    extend: boolean;
  };
};

export function selectEntireRow(
  row: number,
  extend: boolean
): SelectEntireRowAction {
  return {
    type: SELECT_ENTIRE_ROW,
    payload: { row, extend },
  };
}

export type SelectEntireColumnAction = BaseAction<
  typeof SELECT_ENTIRE_COLUMN
> & {
  payload: {
    column: number;
    extend: boolean;
  };
};

export function selectEntireColumn(
  column: number,
  extend: boolean
): SelectEntireColumnAction {
  return {
    type: SELECT_ENTIRE_COLUMN,
    payload: { column, extend },
  };
}

export type SelectEntireWorksheetAction = BaseAction<
  typeof SELECT_ENTIRE_WORKSHEET
>;

export function selectEntireWorksheet(): SelectEntireWorksheetAction {
  return { type: SELECT_ENTIRE_WORKSHEET };
}

export type SetSelectionAction = BaseAction<typeof SET_SELECTION> & {
  payload: {
    selection: Selection;
  };
};

export function setSelection(selection: Selection): SetSelectionAction {
  return { type: SET_SELECTION, payload: { selection } };
}

export type SelectAction = BaseAction<typeof SELECT> & {
  payload: {
    point: Point;
  };
};

export function select(point: Point): SelectAction {
  return {
    type: SELECT,
    payload: { point },
  };
}

export type ActivateAction = BaseAction<typeof ACTIVATE> & {
  payload: {
    point: Point;
  };
};

export function activate(point: Point): ActivateAction {
  return {
    type: ACTIVATE,
    payload: { point },
  };
}

export type SetCellDataAction = BaseAction<typeof SET_CELL_DATA> & {
  payload: {
    active: Point;
    data: CellBase;
  };
};

export function setCellData(active: Point, data: CellBase): SetCellDataAction {
  return {
    type: SET_CELL_DATA,
    payload: { active, data },
  };
}

export type SetCellDimensionsAction = BaseAction<typeof SET_CELL_DIMENSIONS> & {
  payload: {
    point: Point;
    dimensions: Dimensions;
  };
};

export function setCellDimensions(
  point: Point,
  dimensions: Dimensions
): SetCellDimensionsAction {
  return {
    type: SET_CELL_DIMENSIONS,
    payload: { point, dimensions },
  };
}

export type PasteAction = BaseAction<typeof PASTE> & {
  payload: {
    data: string;
  };
};

export function paste(data: string): PasteAction {
  return {
    type: PASTE,
    payload: { data },
  };
}

export type KeyDownAction = BaseAction<typeof KEY_DOWN> & {
  payload: {
    event: React.KeyboardEvent;
  };
};

export function keyDown(event: React.KeyboardEvent): KeyDownAction {
  return {
    type: KEY_DOWN,
    payload: { event },
  };
}

export type DragStartAction = BaseAction<typeof DRAG_START>;

export function dragStart(): DragStartAction {
  return { type: DRAG_START };
}

export type DragEndAction = BaseAction<typeof DRAG_END>;

export function dragEnd(): DragEndAction {
  return { type: DRAG_END };
}

export type CommitAction = BaseAction<typeof COMMIT> & {
  payload: {
    changes: CommitChanges;
  };
};

export function commit(changes: CommitChanges): CommitAction {
  return {
    type: COMMIT,
    payload: { changes },
  };
}

export type CopyAction = BaseAction<typeof COPY>;

export function copy(): CopyAction {
  return { type: COPY };
}

export type CutAction = BaseAction<typeof CUT>;

export function cut(): CutAction {
  return { type: CUT };
}

export type EditAction = BaseAction<typeof EDIT>;

export function edit(): EditAction {
  return { type: EDIT };
}

export type ViewAction = BaseAction<typeof VIEW>;

export function view(): ViewAction {
  return { type: VIEW };
}

export type ClearAction = BaseAction<typeof CLEAR>;

export function clear(): ClearAction {
  return { type: CLEAR };
}

export type BlurAction = BaseAction<typeof BLUR>;

export function blur(): BlurAction {
  return { type: BLUR };
}

export type Action =
  | SetDataAction
  | SetCreateFormulaParserAction
  | SelectEntireRowAction
  | SelectEntireColumnAction
  | SelectEntireWorksheetAction
  | SetSelectionAction
  | SelectAction
  | ActivateAction
  | SetCellDataAction
  | SetCellDimensionsAction
  | PasteAction
  | KeyDownAction
  | DragStartAction
  | DragEndAction
  | CommitAction
  | CopyAction
  | CutAction
  | EditAction
  | ViewAction
  | ClearAction
  | UnderlineTypeStyle
  | FontSize
  | FontFamily
  | KeyPressAction
  | TextAlignType
  | BorderType
  | ItalicStyle
  | BoldStyle
  | ColorStyle
  | BackgroundStyle
  | FormatePainterStyle
  | AddRowTop
  | AddRowBottom
  | AddColumnLeft
  | AddColumnRight
  | DeleteRow
  | DeleteColumn
  | SetRowHeight
  | SetColumnPosition
  | SetAutoFill
  | SetEditable
  | OnMouseUp
  | BlurAction;

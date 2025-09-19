import * as Types from './types';
import * as Matrix from './matrix';
import * as Point from './point';
import { PointRange } from './point-range';
import { Selection } from './selection';
import { EXCEL_SPACING_REGEX } from '../../../../validations/regex';

export { createEmpty as createEmptyMatrix } from './matrix';

export const PLAIN_TEXT_MIME = 'text/plain';
export const FOCUS_WITHIN_SELECTOR = ':focus-within';

/** Move the cursor of given input element to the input's end */
export function moveCursorToEnd(
  el: HTMLInputElement | HTMLTextAreaElement
): void {
  el.selectionStart = el.selectionEnd = el.value.length;
}

/**
 * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.
 * @param end - an integer number specifying at which position to stop (not included).
 * @param start - An integer number specifying at which position to start.
 * @param step - An integer number specifying the Increment */
export function range(end: number, start = 0, step = 1): number[] {
  const array = [];
  if (Math.sign(end - start) === -1) {
    for (let element = start; element > end; element -= step) {
      array.push(element);
    }
    return array;
  }
  for (let element = start; element < end; element += step) {
    array.push(element);
  }
  return array;
}

/** Return whether given point is active */
export function isActive(
  active: Types.StoreState['active'],
  point: Point.Point
): boolean {
  return Boolean(active && Point.isEqual(point, active));
}

/** Get the offset values of given element */
export function getOffsetRect(element: HTMLElement): Types.Dimensions {
  return {
    width: element.offsetWidth,
    height: element.offsetHeight,
    left: element.offsetLeft,
    top: element.offsetTop,
  };
}

/** Write given data to clipboard with given event */
export function writeTextToClipboard(
  event: ClipboardEvent,
  data: string
): void {
  event.clipboardData?.setData(PLAIN_TEXT_MIME, data);
}

/** Read text from given clipboard event */
export function readTextFromClipboard(event: ClipboardEvent): string {
  // @ts-ignore
  if (window.clipboardData && window.clipboardData.getData) {
    // @ts-ignore
    return window.clipboardData.getData('Text');
  }
  if (event.clipboardData && event.clipboardData.getData) {
    return event.clipboardData.getData(PLAIN_TEXT_MIME);
  }
  return '';
}

function getSortedNumericKeys(dataObject: object) {
  return Object.keys(dataObject)
    .map((keyString) => Number(keyString))
    .sort((firstKey, secondKey) => firstKey - secondKey);
}

export function insertColumnDimension(
  columns: Types.columnDimensions,
  insertIndex: number,
  newWidth: number
): Types.columnDimensions {
  const updated: Types.columnDimensions = {};
  const keys = getSortedNumericKeys(columns);

  let shiftWidth = 0;
  let inserted = false;

  for (let i = 0; i < keys.length; i++) {
    // Insert before current index
    if (i === insertIndex) {
      const prev = updated[i - 1];
      const newLeft = prev ? prev.left + prev.width : 0;
      updated[i] = { left: newLeft, width: newWidth };
      shiftWidth = newWidth;
      inserted = true;
    }

    const oldKey = keys[i];
    if (oldKey === undefined) continue;
    const col = columns[oldKey];
    if (!col) continue;

    const newKey = inserted ? i + 1 : i;
    const newLeft = inserted ? col.left + shiftWidth : col.left;

    updated[newKey] = { ...col, left: newLeft };
  }

  // If inserting at the end
  if (!inserted) {
    const lastKey = keys.length > 0 ? keys[keys.length - 1] : undefined;
    const last = lastKey !== undefined ? updated[lastKey] : undefined;
    const newLeft = last ? last.left + last.width : 0;
    updated[insertIndex] = { left: newLeft, width: newWidth };
  }

  return updated;
}

export function insertRowDimension(
  rows: Types.rowDimensions,
  insertIndex: number,
  newHeight: number
): Types.rowDimensions {
  const updated: Types.rowDimensions = {};
  const keys = getSortedNumericKeys(rows);

  let shiftHeight = 0;
  let inserted = false;

  for (let i = 0; i < keys.length; i++) {
    // Insert before current index
    if (i === insertIndex) {
      const prev = updated[i - 1];
      const newTop = prev ? prev.top + prev.height : 0;
      updated[i] = { top: newTop, height: newHeight };
      shiftHeight = newHeight;
      inserted = true;
    }

    const oldKey = keys[i];
    if (oldKey === undefined) continue;
    const row = rows[oldKey];
    if (!row) continue;

    const newKey = inserted ? i + 1 : i;
    const newTop = inserted ? row.top + shiftHeight : row.top;

    updated[newKey] = { ...row, top: newTop };
  }

  // If inserting at the end
  if (!inserted) {
    const lastKey = keys.length > 0 ? keys[keys.length - 1] : undefined;
    const last = lastKey !== undefined ? updated[lastKey] : undefined;
    const newTop = last ? last.top + last.height : 0;
    updated[insertIndex] = { top: newTop, height: newHeight };
  }

  return updated;
}

export function deleteRowDimension(
  rows: Types.rowDimensions,
  deleteIndex: number
): Types.rowDimensions {
  const updated: Types.rowDimensions = {};
  const keys = getSortedNumericKeys(rows);

  let currentTop = 0;

  for (let i = 0, newIndex = 0; i < keys.length; i++) {
    if (keys[i] === deleteIndex) {
      continue;
    }

    const key = keys[i];
    if (key === undefined) continue;
    const row = rows[key];
    if (!row) continue;
    updated[newIndex] = {
      top: currentTop === 0 ? row.top : currentTop,
      height: row.height,
    };

    if (typeof updated[newIndex]?.top === 'number') {
      currentTop = (updated[newIndex]?.top ?? 0) + row.height;
    }
    newIndex++;
  }

  return updated;
}

export function deleteColumnDimension(
  columns: Types.columnDimensions,
  deleteIndex: number
): Types.columnDimensions {
  const updated: Types.columnDimensions = {};
  const keys = getSortedNumericKeys(columns);

  let currentLeft = 0;

  for (let i = 0, newIndex = 0; i < keys.length; i++) {
    if (keys[i] === deleteIndex) {
      continue;
    }

    const key = keys[i];
    if (key === undefined) continue;
    const col = columns[key];
    if (!col) continue;
    updated[newIndex] = {
      left: currentLeft === 0 ? col.left : currentLeft,
      width: col.width,
    };

    if (typeof updated[newIndex]?.left === 'number') {
      currentLeft = (updated[newIndex]?.left ?? 0) + col.width;
    }
    newIndex++;
  }

  return updated;
}



/** Get the dimensions of cell at point from state */
export function getCellDimensions(
  point: Point.Point,
  rowDimensions: Types.StoreState['rowDimensions'] | undefined,
  columnDimensions: Types.StoreState['columnDimensions'] | undefined,
): Types.Dimensions | undefined {
  const DEFAULT_ROW_HEIGHT = 32;
  const DEFAULT_COLUMN_WIDTH = 100; // Use your minimumColumnWidth or a default value; adjust based on props if needed
  const HEADER_HEIGHT = 32; // Adjust based on your header row height (e.g., from CSS or measured)
  const ROW_INDICATOR_WIDTH = 60; // From your RowIndicator minWidth style

  let top = HEADER_HEIGHT;
  for (let r = 0; r < point.row; r++) {
    top += (rowDimensions?.[r] ? rowDimensions?.[r]?.height : DEFAULT_ROW_HEIGHT) || DEFAULT_ROW_HEIGHT;
  }
  const height = (rowDimensions?.[point.row] ? rowDimensions?.[point.row]?.height : DEFAULT_ROW_HEIGHT) || DEFAULT_ROW_HEIGHT;

  let left = ROW_INDICATOR_WIDTH;
  for (let c = 0; c < point.column; c++) {
    left += (columnDimensions?.[c] ? columnDimensions?.[c]?.width : DEFAULT_COLUMN_WIDTH) || DEFAULT_COLUMN_WIDTH;
  }
  const width = (columnDimensions?.[point.column] ? columnDimensions?.[point.column]?.width : DEFAULT_COLUMN_WIDTH) || DEFAULT_COLUMN_WIDTH;

  return { top, height, left, width };
}
/** Get the dimensions of customized cell at point from state */
export function getScrollCellDimensions(
  point: Point.Point,
  rowDimensions: Types.StoreState['rowDimensions'] | undefined,
  columnDimensions: Types.StoreState['columnDimensions'] | undefined,
): Types.Dimensions | undefined {
  const DEFAULT_ROW_HEIGHT = 32;
  const DEFAULT_COLUMN_WIDTH = 100; // Use your minimumColumnWidth or a default value
  const HEADER_HEIGHT = 32; // Adjust as needed
  const ROW_INDICATOR_WIDTH = 60;

  let top = HEADER_HEIGHT + 4000; // Preserve your fixed top for scrolling, but add header offset
  for (let r = 0; r < point.row; r++) {
    top += (rowDimensions?.[r] ? rowDimensions?.[r]?.height : DEFAULT_ROW_HEIGHT) || DEFAULT_ROW_HEIGHT;
  }
  const height = (rowDimensions?.[point.row] ? rowDimensions?.[point.row]?.height : DEFAULT_ROW_HEIGHT) || DEFAULT_ROW_HEIGHT;

  let left = ROW_INDICATOR_WIDTH;
  for (let c = 0; c < point.column; c++) {
    left += (columnDimensions?.[c] ? columnDimensions?.[c]?.width : DEFAULT_COLUMN_WIDTH) || DEFAULT_COLUMN_WIDTH;
  }
  const width = (columnDimensions?.[point.column] ? columnDimensions?.[point.column]?.width : DEFAULT_COLUMN_WIDTH) || DEFAULT_COLUMN_WIDTH;

  return { top, height, left, width };
}

/** Get the dimensions of a range of cells */
export function getRangeDimensions(
  rowDimensions: Types.StoreState['rowDimensions'],
  columnDimensions: Types.StoreState['columnDimensions'],
  range: PointRange
): Types.Dimensions | undefined {
  const startDimensions = getCellDimensions(
    range.start,
    rowDimensions,
    columnDimensions
  );
  let endDimensions = getCellDimensions(
    range.end,
    rowDimensions,
    columnDimensions
  );
  if (endDimensions === undefined) {
    endDimensions = getScrollCellDimensions(
      range.end,
      rowDimensions,
      columnDimensions
    );
  }

  return (
    startDimensions &&
    endDimensions && {
      width: endDimensions.left + endDimensions.width - startDimensions.left,
      height: endDimensions.top + endDimensions.height - startDimensions.top,
      top: startDimensions.top + 1, // Note: +1 Because of Active cell width is 2px
      left: startDimensions.left + 1, // Note: +1 Because of Active cell width is 2px
    }
  );
}

/** Get the dimensions of selected */
export function getSelectedDimensions(
  rowDimensions: Types.StoreState['rowDimensions'],
  columnDimensions: Types.StoreState['columnDimensions'],
  data: Matrix.Matrix<unknown>,
  selected: Selection
): Types.Dimensions | undefined {
  const range = selected.toRange(data);
  return range
    ? getRangeDimensions(rowDimensions, columnDimensions, range)
    : undefined;
}

/** Get given data as CSV */
export function getCSV(data: Matrix.Matrix<Types.CellBase>): string {
  const valueMatrix = Matrix.map((cell) => cell?.value || '', data);

  return valueMatrix
    .map((row) =>
      row
        .map((cell) => {
          const str = String(cell).replace(/"/g, '""');
          return EXCEL_SPACING_REGEX.test(str) ? `"${str}"` : str;
        })
        .join('\t')
    )
    .join('\n');
}

/**
 * Calculate the rows and columns counts of a spreadsheet
 * @param data - the spreadsheet's data
 * @param rowLabels - the spreadsheet's row labels (if defined)
 * @param columnLabels - the spreadsheet's column labels (if defined)
 * @returns the rows and columns counts of a spreadsheet
 */
export function calculateSpreadsheetSize(
  data: Matrix.Matrix<unknown>,
  rowLabels?: string[],
  columnLabels?: string[]
): Matrix.Size {
  const { columns, rows } = Matrix.getSize(data);
  return {
    rows: rowLabels ? Math.max(rows, rowLabels.length) : rows,
    columns: columnLabels ? Math.max(columns, columnLabels.length) : columns,
  };
}

/** Should spreadsheet handle clipboard event */
export function shouldHandleClipboardEvent(
  root: Element | null,
  mode: Types.Mode
): boolean {
  return root !== null && mode === 'view' && isFocusedWithin(root);
}

export function isFocusedWithin(element: Element): boolean {
  return element.matches(FOCUS_WITHIN_SELECTOR);
}

export function hasLineBreaker(value: unknown) {
  return typeof value === 'string' && value.includes('\n');
}

export const convertPtToPx = (pt: number): string => {
  // Currently in Excel Util.ts
  const px = pt * 1.33;
  return `${px}px`;
};

export const convertPxToPt = (px: string): number => {
  // Currently in Excel Util.ts
  const numericPx = parseFloat(px.replace('px', ''));
  const pt = numericPx / 1.33;
  return pt;
};

export const EmptyCell: Types.CellBase = {
  value: '',
  inputType: { type: 'text' },
  readOnly: false,
  style: {
    color: '#000000', // Needed hexacode for backend
    backgroundColor: '#ffffff', // Needed hexacode for backend
    borderColor: '#c9c9c9', // Needed hexacode for backend
    textDecoration: 'normal',
    borderRight: `1px solid var(--excel-header-border)`,
    borderLeft: `1px solid var(--excel-header-border)`,
    borderTop: `1px solid var(--excel-header-border)`,
    borderBottom: `1px solid var(--excel-header-border)`,
    fontSize: `${convertPtToPx(9)}`,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    textAlign: 'left',
  },
};

export const fontFamilyList = [
  {
    label: 'Times New Roman',
    value: 'Times New Roman',
  },
  {
    label: 'Arial',
    value: 'Arial',
  },
  {
    label: 'fantasy',
    value: 'fantasy',
  },
  {
    label: 'cursive',
    value: 'cursive',
  },
  {
    label: 'Poppins',
    value: 'Poppins',
  },
  {
    label: 'Courier New',
    value: '"Courier New"',
  },
  {
    label: 'Verdana',
    value: 'Verdana',
  },
  {
    label: 'Tahoma',
    value: 'Tahoma',
  },
  {
    label: 'Trebuchet MS',
    value: 'Trebuchet MS',
  },
  {
    label: 'Comic Sans MS',
    value: 'Comic Sans MS',
  },
  {
    label: 'Impact',
    value: 'Impact',
  },
  {
    label: 'Arial Black',
    value: 'Arial Black',
  },
  {
    label: 'Lucida Console',
    value: 'Lucida Console',
  },
  {
    label: 'Lucida Sans Unicode',
    value: 'Lucida Sans Unicode',
  },
  {
    label: 'Courier',
    value: 'Courier',
  },
  {
    label: 'Arial Rounded MT Bold',
    value: 'Arial Rounded MT Bold',
  },
  {
    label: 'Georgia',
    value: 'Georgia',
  },
  {
    label: 'sans-serif',
    value: 'sans-serif',
  },
  {
    label: 'serif',
    value: 'serif',
  },
  {
    label: 'monospace',
    value: 'monospace',
  },
];

export const fontSizeList = [
  5, 6, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 48, 56, 72,
];

export const isPasteAllowed = (currentCell: Types.CellBase | null): boolean => {
  const inputType = currentCell?.inputType?.type ?? 'text';
  return ['dropDown', 'text'].includes(inputType) && !currentCell?.readOnly;
};

export function getMatrixDimensions(matrixData: [[]]) {
  const rowCount = matrixData?.length ?? 0;
  const columnCount = matrixData?.[0]?.length ?? 0;
  return { rowCount, columnCount };
}



export function getVisibleRangeDimensions(
  fullRange: Types.FullRange | null,
  visibleRange: Types.VisibleRange,
  rowDimensions: Types.StoreState['rowDimensions'],
  columnDimensions: Types.StoreState['columnDimensions']
): Types.Dimensions | undefined {
  const DEFAULT_ROW_HEIGHT = 32;
  const DEFAULT_COLUMN_WIDTH = 100;
  if (!fullRange) return undefined;

  const clippedStartRow = Math.max(fullRange?.start?.row, visibleRange?.start);
  const clippedEndRow = Math.min(fullRange?.end?.row, visibleRange?.end - 1);

  if (clippedStartRow > clippedEndRow) {
    return undefined;
  }

  let top = 0;
  for (let row = visibleRange?.start; row < clippedStartRow; row++) {
    top += rowDimensions?.[row]?.height || DEFAULT_ROW_HEIGHT;
  }

  let height = 0;
  for (let row = clippedStartRow; row <= clippedEndRow; row++) {
    height += rowDimensions?.[row]?.height || DEFAULT_ROW_HEIGHT;
  }

  let left = 0;
  for (let col = 0; col < fullRange?.start?.column; col++) {
    left += columnDimensions?.[col]?.width || DEFAULT_COLUMN_WIDTH;
  }

  let width = 0;
  for (let col = fullRange?.start?.column; col <= fullRange?.end?.column; col++) {
    width += columnDimensions?.[col]?.width || DEFAULT_COLUMN_WIDTH;
  }

  return { top, left, width, height };
}

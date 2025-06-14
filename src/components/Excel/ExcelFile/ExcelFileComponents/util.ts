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

/** Get the dimensions of cell at point from state */
export function getCellDimensions(
  point: Point.Point,
  rowDimensions: Types.StoreState['rowDimensions'] | undefined,
  columnDimensions: Types.StoreState['columnDimensions'] | undefined
): Types.Dimensions | undefined {
  const cellRowDimensions = rowDimensions && rowDimensions[point.row];
  const cellColumnDimensions =
    columnDimensions && columnDimensions[point.column];
  return (
    cellRowDimensions &&
    cellColumnDimensions && {
      ...cellRowDimensions,
      ...cellColumnDimensions,
    }
  );
}

/** Get the dimensions of customized cell at point from state */
export function getScrollCellDimensions(
  point: Point.Point,
  rowDimensions: Types.StoreState['rowDimensions'] | undefined,
  columnDimensions: Types.StoreState['columnDimensions'] | undefined
): Types.Dimensions | undefined {
  let cellRowDimensions = rowDimensions && rowDimensions[point.row];
  let initialDimensions = rowDimensions && rowDimensions[0];

  if (rowDimensions && initialDimensions) {
    cellRowDimensions = { top: 4000, height: initialDimensions?.height }; //fixed height
  }
  const cellColumnDimensions =
    columnDimensions && columnDimensions[point.column];

  return (
    cellRowDimensions &&
    cellColumnDimensions && {
      ...cellRowDimensions,
      ...cellColumnDimensions,
    }
  );
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
    value: '"Times New Roman"',
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
    value: '"Trebuchet MS"',
  },
  {
    label: 'Comic Sans MS',
    value: '"Comic Sans MS"',
  },
  {
    label: 'Impact',
    value: 'Impact',
  },
  {
    label: 'Arial Black',
    value: '"Arial Black"',
  },
  {
    label: 'Lucida Console',
    value: '"Lucida Console"',
  },
  {
    label: 'Lucida Sans Unicode',
    value: '"Lucida Sans Unicode"',
  },
  {
    label: 'Courier',
    value: 'Courier',
  },
  {
    label: 'Arial Rounded MT Bold',
    value: '"Arial Rounded MT Bold"',
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
  return !['dropDown', 'file'].includes(inputType) && !currentCell?.readOnly;
};

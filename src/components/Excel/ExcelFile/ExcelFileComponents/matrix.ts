import * as Point from './point';
/** A two-dimensional array of given type T in rows and columns */
export type Matrix<T> = Array<Array<T | undefined>>;

/**
 * Creates an empty matrix with given rows and columns
 * @param rows - integer, the amount of rows the matrix should have
 * @param columns - integer, the amount of columns the matrix should have
 * @returns an empty matrix with given rows and columns
 */
export function createEmpty<T>(rows: number, columns: number): Matrix<T> {
  const matrix = Array(rows);
  for (let i = 0; i < rows; i++) {
    matrix[i] = Array(columns);
  }
  return matrix;
}

/** Gets the value at row and column of matrix. */
export function get<T>(point: Point.Point, matrix: Matrix<T>): T | undefined {
  const columns = matrix[point.row];
  if (columns === undefined) {
    return undefined;
  }
  return columns[point.column];
}

/** Creates a slice of matrix from startPoint up to, but not including, endPoint. */
export function slice<T>(
  startPoint: Point.Point,
  endPoint: Point.Point,
  matrix: Matrix<T>
): Matrix<T> {
  const sliced: Matrix<T> = [];
  const columns = endPoint.column - startPoint.column;
  for (let row = startPoint.row; row <= endPoint.row; row++) {
    const slicedRow = row - startPoint.row;
    sliced[slicedRow] = sliced[slicedRow] || Array(columns);
    for (let column = startPoint.column; column <= endPoint.column; column++) {
      sliced[slicedRow][column - startPoint.column] = get(
        { row, column },
        matrix
      );
    }
  }
  return sliced;
}

/** Sets the value at row and column of matrix. If a row doesn't exist, it's created. */

export function set<T>(
  point: Point.Point,
  value: T,
  matrix: Matrix<T>
): Matrix<T> {
  // Create a shallow copy of the matrix
  const nextMatrix = [...matrix];

  // Ensure the first row exists (initialize if undefined)
  const firstRow = matrix[0] ?? [];
  const nextFirstRow = [...firstRow];

  // Ensure the first row has enough columns to accommodate the specified column
  if (nextFirstRow.length <= point.column) {
    nextFirstRow.length = point.column + 1; // Extend the first row if needed
  }

  // Set the modified first row back into the matrix
  nextMatrix[0] = nextFirstRow;

  // Ensure the specified row exists (initialize if undefined)
  const nextRow = matrix[point.row] ?? [];
  const nextRowCopy = [...nextRow];

  // Set the value at the specified point
  nextRowCopy[point.column] = value;

  // Set the modified row back into the matrix
  nextMatrix[point.row] = nextRowCopy;

  return nextMatrix;
}

/** Like Matrix.set() but mutates the matrix */

export function mutableSet<T>(
  point: Point.Point,
  value: T,
  matrix: Matrix<T>
): void {
  // Ensure that the first row exists, if not, create it
  let firstRow = matrix[0];
  if (!firstRow) {
    firstRow = [];
    matrix[0] = firstRow;
  }

  // Ensure the row at point.row exists, if not, create it
  let row = matrix[point.row];
  if (!row) {
    row = [];
    matrix[point.row] = row;
  }

  // Ensure that the first row has enough columns
  if (firstRow.length <= point.column) {
    firstRow.length = point.column + 1; // Extend the first row if needed
  }

  // Set the value at the specified point
  row[point.column] = value;
}

/** Removes the coordinate of matrix */
// export function unset<T>(point: Point.Point, matrix: Matrix<T>): Matrix<T> {
//   if (!has(point, matrix)) {
//     return matrix;
//   }
//   const nextMatrix = [...matrix];
//   const nextRow = [...matrix[point.row]];

//   // Avoid deleting to preserve first row length
//   nextRow[point.column] = undefined;
//   nextMatrix[point.row] = nextRow;

//   return nextMatrix;
// }

const convertPxToPt = (px: string): number => {
  const numericPx = parseFloat(px.replace('px', ''));
  const pt = numericPx / 1.33;
  return pt;
};

const EmptyCell = {
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
    fontSize: `${convertPxToPt('9')}`,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    textAlign: 'left',
  },
};

export function unset<T>(point: Point.Point, matrix: Matrix<T>): Matrix<T> {
  // Check if the point exists in the matrix
  if (!has(point, matrix)) {
    return matrix;
  }

  // Create a shallow copy of the matrix
  const nextMatrix = [...matrix];

  // Check if the row exists before trying to copy it
  const currentRow = matrix[point.row];
  if (currentRow) {
    // Create a shallow copy of the row
    const nextRow = [...currentRow];
    // Avoid deleting to preserve first row length
    nextRow[point.column] = EmptyCell as T | undefined;

    // Update the matrix with the modified row
    nextMatrix[point.row] = nextRow;
  }

  return nextMatrix;
}

/** Creates an array of values by running each element in collection thru iteratee. */
export function map<T, T2>(
  func: (value: T | undefined, point: Point.Point) => T2,
  matrix: Matrix<T>
): Matrix<T2> {
  const newMatrix: Matrix<T2> = [];
  for (const [point, value] of entries(matrix)) {
    mutableSet(point, func(value, point), newMatrix);
  }
  return newMatrix;
}

/** Create an iterator over the cells in the matrix */
export function* entries<T>(
  matrix: Matrix<T>
): IterableIterator<[Point.Point, T | undefined]> {
  for (const [row, values] of matrix.entries()) {
    for (const [column, value] of values.entries()) {
      const point = { row, column };
      yield [point, value];
    }
  }
}

/**
 * Converts all elements in row into a string separated by horizontalSeparator and each row string
 * to string separated by verticalSeparator
 */

export function join(
  matrix: Matrix<unknown>,
  horizontalSeparator = '\t',
  verticalSeparator = '\n'
): string {
  let joined = '';
  const { rows, columns } = getSize(matrix);

  for (let row = 0; row < rows; row++) {
    if (row) {
      joined += verticalSeparator;
    }

    for (let column = 0; column < columns; column++) {
      if (column) {
        joined += horizontalSeparator;
      }

      // Ensure matrix[row] exists and matrix[row][column] is not undefined
      const cellValue = matrix[row]?.[column];

      // If cellValue is undefined, you can use a fallback value like an empty string
      joined += cellValue !== undefined ? String(cellValue) : '';
    }
  }

  return joined;
}

/**
 * Parses a CSV separated by a horizontalSeparator and verticalSeparator into a
 * Matrix using a transform function
 */
export function split<T>(
  csv: string,
  transform: (value: string) => T,
  horizontalSeparator = '\t',
  verticalSeparator: string | RegExp = /\r\n|\n|\r/
): Matrix<T> {
  // Temporarily replace line breaks inside quotes
  const replaced = csv.replace(/"([^"]*?)"/g, (_, p1) => {
    return p1.replace(/\n/g, '\\n');
  });
  return replaced.split(verticalSeparator).map((row) =>
    row
      .split(horizontalSeparator)
      .map((line) => {
        // Restore original line breaks in each line
        return line.replace(/\\n/g, '\n');
      })
      .map(transform)
  );
}

/** Returns whether the point exists in the matrix or not. */
export function has(point: Point.Point, matrix: Matrix<unknown>): boolean {
  const firstRow = matrix[0];
  if (!firstRow) {
    return false; // If first row is undefined, return false
  }

  // Perform validation checks
  return (
    point.row >= 0 &&
    point.column >= 0 &&
    Number.isInteger(point.row) &&
    Number.isInteger(point.column) &&
    point.column < firstRow.length &&
    point.row < matrix.length
  );
}

/** Counts of the rows and column in a matrix */
export type Size = {
  /** Count of the rows in the matrix */
  rows: number;
  /** Count of the columns in the matrix */
  columns: number;
};

/** Gets the count of rows and columns of given matrix */
export function getSize(matrix: Matrix<unknown>): Size {
  return {
    columns: getColumnsCount(matrix),
    rows: getRowsCount(matrix),
  };
}

/** Gets the count of rows of given matrix */
export function getRowsCount(matrix: Matrix<unknown>): number {
  return matrix.length;
}

/** Gets the count of columns of given matrix */
export function getColumnsCount(matrix: Matrix<unknown>): number {
  const firstRow = matrix[0];
  return firstRow ? firstRow.length : 0;
}

/**
 * Pads matrix with empty rows to match given total rows
 * @param matrix - matrix to pad
 * @param totalRows - number of rows the matrix should have
 * @returns the updated matrix
 */
export function padRows<T>(matrix: Matrix<T>, totalRows: number): Matrix<T> {
  const { rows, columns } = getSize(matrix);

  if (rows >= totalRows) {
    return matrix;
  }

  const missingRows = totalRows - rows;
  const emptyRow = Array(columns).fill(undefined);
  const emptyRows = Array(missingRows).fill(emptyRow);
  return [...matrix, ...emptyRows];
}

/**
 * Pads matrix with empty columns to match given total columns
 * @param matrix - matrix to pad
 * @param size - minimum size of the matrix after padding.
 * @returns the updated matrix
 */
export function pad<T>(matrix: Matrix<T>, size: Size): Matrix<T> {
  const { rows, columns } = getSize(matrix);

  if (rows >= size.rows && columns >= size.columns) {
    // Optimization, no padding required.
    return matrix;
  }

  const resultSize: Size = {
    rows: size.rows > rows ? size.rows : rows,
    columns: size.columns > columns ? size.columns : columns,
  };

  let padded = [...matrix];
  if (resultSize.columns > columns) {
    const padColumns = resultSize.columns - columns;
    padded = padded.map((row) => [
      ...row,
      ...Array(padColumns).fill(undefined),
    ]);
  }

  if (resultSize.rows > rows) {
    const padRows = resultSize.rows - rows;
    const emptyRow = Array(resultSize.columns).fill(undefined);
    padded = [...padded, ...Array(padRows).fill(emptyRow)];
  }

  return padded;
}

export function toArray<T>(matrix: Matrix<T>): T[];
export function toArray<T1, T2>(
  matrix: Matrix<T1>,
  transform: (cell: T1 | undefined, coords: Point.Point) => T2
): T2[];

/**
 * Flattens a matrix values to an array
 * @param matrix - the matrix to flatten values from
 * @param transform - optional transform function to apply to each value in the
 * matrix
 * @returns an array of the values from matrix, transformed if a transform
 * function is passed
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

export function toArray<T1, T2>(
  matrix: Matrix<T1>,
  transform?: (cell: T1 | undefined, coords: Point.Point) => T2
): T2[] {
  const array: T2[] = [];

  for (let row = 0; row < matrix.length; row++) {
    const currentRow = matrix[row];

    // Ensure the row is not undefined
    if (currentRow !== undefined) {
      for (let column = 0; column < currentRow.length; column++) {
        const value = currentRow[column];
        // If transform is provided, apply it; otherwise, use the value as is
        array.push(
          transform ? transform(value, { row, column }) : (value as T2)
        );
      }
    }
  }

  return array;
}

/** Returns the maximum point in the matrix */
export function maxPoint(matrix: Matrix<unknown>): Point.Point {
  const size = getSize(matrix);
  return { row: size.rows - 1, column: size.columns - 1 };
}

import * as Matrix from '../matrix';
import { CellBase } from '../types';

export const FORMULA_VALUE_PREFIX = '=';

/** Returns whether given value is a formula */
export function isFormulaValue(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    value.startsWith(FORMULA_VALUE_PREFIX) &&
    value.length > 1
  );
}

/** Extracts formula from value  */
export function extractFormula(value: string): string {
  return value.slice(1);
}

export function createFormulaParser(
  data: Matrix.Matrix<CellBase>,
) {
  return data
}

export function evaluate() {
  try {
    return "";
  } catch (error) {
    throw error;
  }
}
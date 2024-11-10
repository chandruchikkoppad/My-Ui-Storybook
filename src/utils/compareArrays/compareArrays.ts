import { compareObjects } from '../compareObjects/compareObjects';

// Define a type for any object
export type AnyObject = Record<string, unknown>;

/**
 * Compare two arrays for equality.
 * This function checks if both arrays contain the same elements in the same order,
 * including nested structures.
 *
 * @param arr1 - The first array to compare.
 * @param arr2 - The second array to compare.
 * @returns - A boolean indicating if the arrays are equal.
 */
export const compareArrays = (arr1: unknown[], arr2: unknown[]): boolean => {
  // Check if both are arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  // Check if lengths are different
  if (arr1.length !== arr2.length) return false;

  // Compare each element
  return arr1.every((element, index) => {
    const otherElement = arr2[index];
    // Recursively compare objects or arrays, or check for strict equality
    return compareObjects(
      element as AnyObject | null,
      otherElement as AnyObject | null
    );
  });
};

// Define a type for any object
export type AnyObject = Record<string, unknown>;

export const compareObjects = (
  obj1: AnyObject | null,
  obj2: AnyObject | null
): boolean => {
  // Check if both are strictly equal (handles primitive types and same reference)
  if (obj1 === obj2) return true;

  // Check if either is null or not an object
  if (
    obj1 == null ||
    obj2 == null ||
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object'
  ) {
    return false;
  }

  // Handle array comparison
  const isArray1 = Array.isArray(obj1);
  const isArray2 = Array.isArray(obj2);
  if (isArray1 !== isArray2) return false; // One is an array, the other is not

  // Create arrays of keys for both objects
  const keys1 = isArray1 ? obj1 : Object.keys(obj1);
  const keys2 = isArray2 ? obj2 : Object.keys(obj2);

  // Check if the number of keys is different
  if (keys1.length !== keys2.length) return false;

  // Create a Set for keys2 for O(1) lookups (only for objects)
  if (!isArray1) {
    const keysSet2 = new Set<string>(keys2 as string[]);

    // Check each key and value
    return keys1.every((key) => {
      return (
        keysSet2.has(key) &&
        compareObjects(
          obj1[key] as AnyObject | null,
          obj2[key] as AnyObject | null
        )
      );
    });
  } else {
    // If arrays, compare elements directly
    return keys1.every((item, index) =>
      compareObjects(item as AnyObject | null, keys2[index] as AnyObject | null)
    );
  }
};

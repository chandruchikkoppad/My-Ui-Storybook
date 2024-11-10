type valueType = any;

export const checkEmpty = (value: valueType): boolean => {
  // Check for null or undefined
  if (value == null) return true;

  // Check for strings
  if (typeof value === 'string') return value.trim().length === 0;

  // Check for arrays
  if (Array.isArray(value)) return value.length === 0;

  // Check for objects
  if (typeof value === 'object') {
    // Handle Map and Set
    if (value instanceof Map || value instanceof Set) return value.size === 0;

    // Handle regular objects
    return Object.keys(value).length === 0;
  }

  // For all other types (numbers, booleans, etc.), return false as they are not "empty"
  return false;
};

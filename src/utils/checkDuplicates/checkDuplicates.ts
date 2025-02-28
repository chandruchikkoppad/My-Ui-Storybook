// Will be used to find duplicate key-value pair in an array of objects.

export const hasDuplicateFile = (array: any[], property: string): boolean => {
  const seen = new Set();
  for (const obj of array) {
    const key = property ? obj[property] : JSON.stringify(obj);
    if (seen.has(key)) {
      return true;
    }
    seen.add(key);
  }
  return false;
};

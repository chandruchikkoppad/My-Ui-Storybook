// findAndInsert.ts
export type AnyObject = { id: number; [key: string]: any };

export function findAndInsert<T extends AnyObject>(
  data: T[],
  key: keyof T,
  targetId: number,
  newEntry: T,
  insertPosition: 'above' | 'below' | 'replace',
  childrenKey: string = 'children' // Allow dynamic key for nested children
): { updatedArray: T[] } | null {
  function recursiveSearch(items: T[]): { updatedArray: T[] } | null {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      // Check if the item matches the target id
      if (item && item[key] === targetId) {
        const updatedItems = [...items];

        if (insertPosition === 'replace') {
          updatedItems[i] = newEntry; // Replace the current item
        } else {
          // Insert above or below
          updatedItems.splice(
            insertPosition === 'above' ? i : i + 1,
            0,
            newEntry
          );
        }

        return { updatedArray: updatedItems };
      }

      // Dynamically check nested children using the `childrenKey`
      if (item && item[childrenKey] && Array.isArray(item[childrenKey])) {
        const result = recursiveSearch(item[childrenKey] as T[]);
        if (result) {
          return {
            updatedArray: items.map((x, idx) =>
              idx === i ? { ...x, [childrenKey]: result.updatedArray } : x
            ),
          };
        }
      }
    }
    return null;
  }
  return recursiveSearch(data);
}

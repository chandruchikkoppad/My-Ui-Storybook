export const isEmptyObject = (obj: any): boolean =>
  typeof obj === 'object' && Object.keys(obj).length === 0;

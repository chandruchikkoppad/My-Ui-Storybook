export const ffid = (): string =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) =>
    (
      (char === 'x' ? Math.random() * 16 : ((Math.random() * 16) & 0x3) | 0x8) |
      0
    ).toString(16)
  );

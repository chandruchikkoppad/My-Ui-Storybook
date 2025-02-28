export const convertToBytes = (value: string): number => {
  const lower = value.toLowerCase().trim();
  const num = parseFloat(lower);
  const unit = lower.replace(/[0-9.]/g, '').trim(); // Extract the unit from the string

  switch (unit) {
    case 'gb':
      return num * 1024 * 1024 * 1024;
    case 'mb':
      return num * 1024 * 1024;
    case 'kb':
      return num * 1024;
    case 'b':
      return num;
    default:
      return num;
  }
};

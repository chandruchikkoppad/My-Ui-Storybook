export const convertToKB = (value: string): number => {
  const lower = value.toLowerCase().trim();
  const num = parseFloat(lower);
  const unit = lower.replace(/[0-9.]/g, '').trim();

  switch (unit) {
    case 'kb':
      return num;
    case 'mb':
      return num * 1024;
    case 'gb':
      return num * 1024 * 1024;
    case 'tb':
      return num * 1024 * 1024 * 1024;
    case 'b':
      return num / 1024;
    default:
      return num;
  }
};

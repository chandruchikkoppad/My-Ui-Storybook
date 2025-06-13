const DEFAULT_FONT_SIZE = 12;
const DEFAULT_FONT_FAMILY = 'Poppins';

const getCanvasContext = (
  fontSize: number = DEFAULT_FONT_SIZE,
  fontFamily: string = DEFAULT_FONT_FAMILY
): CanvasRenderingContext2D | null => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (context) {
    context.font = `${fontSize}px ${fontFamily}`;
  }
  return context;
};

export const truncateText = (
  text: string,
  maxLimit: number = 100,
  truncateType: 'count' | 'pixel' = 'count',
  fontSize: number = DEFAULT_FONT_SIZE,
  fontFamily: string = DEFAULT_FONT_FAMILY
): string => {
  if (!text || maxLimit <= 0) return '';

  const ellipsis = '...';

  if (truncateType === 'count') {
    return text.length > maxLimit
      ? `${text.slice(0, maxLimit)}${ellipsis}`
      : text;
  }

  const context = getCanvasContext(fontSize, fontFamily);
  if (!context) return text;

  const ellipsisWidth = context.measureText(ellipsis).width;

  if (context.measureText(text).width <= maxLimit) return text;

  let truncated = '';
  for (let i = 0; i < text.length; i++) {
    const temp = text.slice(0, i + 1);
    if (context.measureText(temp).width + ellipsisWidth > maxLimit) {
      return `${truncated}${ellipsis}`;
    }
    truncated = temp;
  }

  return truncated;
};

export const isTextTruncated = (
  text: string,
  maxLimit: number = 100,
  truncateType: 'count' | 'pixel' = 'count',
  fontSize: number = DEFAULT_FONT_SIZE,
  fontFamily: string = DEFAULT_FONT_FAMILY
): boolean => {
  if (!text || maxLimit <= 0) return false;
  if (truncateType === 'count') {
    return text.length > maxLimit;
  }
  const context = getCanvasContext(fontSize, fontFamily);
  if (!context) return false;

  return context.measureText(text).width > maxLimit;
};

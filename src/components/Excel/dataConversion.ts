import {
  convertPtToPx,
  convertPxToPt,
  fontFamilyList,
  fontSizeList,
} from './ExcelFile/ExcelFileComponents/util';

const getTextAlignment = (
  alignment: string
): 'left' | 'right' | 'center' | 'justify' => {
  switch (alignment.toUpperCase()) {
    case 'LEFT':
      return 'left';
    case 'RIGHT':
      return 'right';
    case 'CENTER':
      return 'center';
    case 'JUSTIFY':
      return 'justify';
    default:
      return 'left';
  }
};

const getTextAlignmentBack = (
  alignment: 'left' | 'right' | 'center' | 'justify'
): string => {
  switch (alignment) {
    case 'left':
      return 'LEFT';
    case 'right':
      return 'RIGHT';
    case 'center':
      return 'CENTER';
    case 'justify':
      return 'JUSTIFY';
    default:
      return 'LEFT';
  }
};

const getFontFamily = (selectedFontType: string): string => {
  const fontFamilyExists = fontFamilyList.some(
    (element) => element.value === selectedFontType
  );

  if (!fontFamilyExists) {
    return 'Poppins';
  }

  return selectedFontType;
};

const closestFontSize = (fontSize: string) =>
  fontSizeList.reduce((closest, current) => {
    return Math.abs(current - parseFloat(fontSize)) <
      Math.abs(closest - parseFloat(fontSize))
      ? current
      : closest;
  });

export function convertStyleToFrontend(
  backendStyle: BackendStyle
): React.CSSProperties {
  const { border } = backendStyle;

  let borderTop = '';
  let borderRight = '';
  let borderBottom = '';
  let borderLeft = '';

  if (border.top !== 'THIN') {
    borderTop =
      border.top === 'MEDIUM'
        ? '2px solid var(--input-hover-border-color)'
        : '1px solid var(--excel-header-border)';
  }
  if (border.right !== 'THIN') {
    borderRight =
      border.right === 'MEDIUM'
        ? '2px solid var(--input-hover-border-color)'
        : '1px solid var(--excel-header-border)';
  }
  if (border.bottom !== 'THIN') {
    borderBottom =
      border.bottom === 'MEDIUM'
        ? '2px solid var(--input-hover-border-color)'
        : '1px solid var(--excel-header-border)';
  }
  if (border.left !== 'THIN') {
    borderLeft =
      border.left === 'MEDIUM'
        ? '2px solid var(--input-hover-border-color)'
        : '1px solid var(--excel-header-border)';
  }

  return {
    fontSize: convertPtToPx(closestFontSize(String(backendStyle.size))),
    fontFamily: getFontFamily(backendStyle.name),
    color: `#${backendStyle.color}`,
    backgroundColor: `#${backendStyle.backgroundColor}`,
    fontWeight: backendStyle.bold ? 'bold' : 'normal',
    fontStyle: backendStyle.italic ? 'italic' : 'normal',
    textDecoration: backendStyle.underline ? 'underline' : 'normal',
    borderTop: borderTop,
    borderRight: borderRight,
    borderBottom: borderBottom,
    borderLeft: borderLeft,
    textAlign: getTextAlignment(backendStyle.alignment.horizontal),
  };
}

const getBorderStyle = (
  border: string | undefined
): 'NONE' | 'THIN' | 'MEDIUM' | 'THICK' => {
  if (!border || border === 'none') {
    return 'THIN';
  }
  if (
    border.includes('solid') ||
    border.includes('dashed') ||
    border.includes('dotted')
  ) {
    if (border.includes('2px') || border.includes('medium')) {
      return 'MEDIUM';
    } else if (border.includes('3px') || border.includes('medium')) {
      return 'THICK';
    }
  }
  return 'THIN';
};

export const convertStyleToBackend = (
  frontendStyle: React.CSSProperties
): BackendStyle => {
  return {
    name: frontendStyle.fontFamily || 'Arial',
    size: convertPxToPt(frontendStyle.fontSize?.toString() || '12'),
    bold: frontendStyle.fontWeight === 'bold',
    italic: frontendStyle.fontStyle === 'italic',
    underline: frontendStyle.textDecoration === 'underline',
    color: frontendStyle.color?.replace('#', '') || '000000',
    backgroundColor:
      frontendStyle.backgroundColor?.replace('#', '') || 'FFFFFF',
    borderColor:
      frontendStyle.borderTop &&
      frontendStyle.borderTop.toString().includes('solid')
        ? 'F2F2F2'
        : '000000',
    border: {
      top: getBorderStyle(
        frontendStyle.borderTop ? frontendStyle.borderTop.toString() : undefined
      ),
      right: getBorderStyle(
        frontendStyle.borderRight
          ? frontendStyle.borderRight.toString()
          : undefined
      ),
      bottom: getBorderStyle(
        frontendStyle.borderBottom
          ? frontendStyle.borderBottom.toString()
          : undefined
      ),
      left: getBorderStyle(
        frontendStyle.borderLeft
          ? frontendStyle.borderLeft.toString()
          : undefined
      ),
    },
    alignment: {
      horizontal: getTextAlignmentBack(
        frontendStyle.textAlign as 'left' | 'right' | 'center' | 'justify'
      ),
      vertical: 'BOTTOM',
      wrapText: false,
    },
  };
};

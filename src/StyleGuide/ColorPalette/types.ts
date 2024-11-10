export interface ColorBoxProps {
  name: string;
  colorCode: string;
  opacity?: number;
  dropShadow?: string;
  border?: string;
  variable?: string;
}

export interface Color {
  name: string;
  colorCode: string;
  opacity?: number;
  dropShadow?: string;
  border?: string;
  variable?: string;
}

export type ColorPaletteType = Color[];

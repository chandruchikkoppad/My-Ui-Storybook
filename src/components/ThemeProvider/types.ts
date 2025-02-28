import { ReactNode } from "react";

export type Theme = 'ff-light-theme' | 'ff-dark-theme' | 'ff-grey-theme' | 'ff-blue-theme';

export interface ThemeContextType {
  currentTheme: Theme;
  setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>;
  applyTheme: (newTheme: Theme) => void;
}

export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: Theme;
}

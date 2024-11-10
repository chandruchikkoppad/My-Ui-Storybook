import React, { createContext, useState, useEffect } from 'react';
import { ThemeContextType, ThemeProviderProps, Theme } from './types';
import '../../assets/Themes/Theme.scss';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme || 'ff-light-theme');

  const applyTheme = (newTheme: Theme) => setCurrentTheme(newTheme);

  useEffect(() => {
    document.body.className = currentTheme;
    return () => {
      document.body.className = '';
    };
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;

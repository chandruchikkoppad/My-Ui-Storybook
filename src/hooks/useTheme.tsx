import { useContext } from 'react';
import { ThemeContextType } from '../components/ThemeProvider/types';
import { ThemeContext } from '../components/ThemeProvider/ThemeProvider';

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default useTheme;

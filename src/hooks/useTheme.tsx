import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeProvider/ThemeProvider';
// import { Theme } from '../types/themeTypes';

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  const { theme, setAndStoreTheme } = useContext(ThemeContext);
  return {
    theme,
    setAndStoreTheme,
  };
}

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Theme } from '../../types/themeTypes';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setAndStoreTheme: (theme: Theme, shouldStore: boolean) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setAndStoreTheme: () => {},
};

export const ThemeContext = createContext<ThemeProviderState>(initialState);

function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme) {
      return storedTheme as Theme;
    }
    if (defaultTheme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return defaultTheme;
  });

  const setAndStoreTheme = useCallback(
    (newTheme: Theme, shouldStore: boolean = false) => {
      const root = window.document.documentElement;
      let finalTheme = newTheme;

      if (newTheme === 'system') {
        finalTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      }

      root.setAttribute('data-mode', finalTheme);
      if (shouldStore) {
        localStorage.setItem(storageKey, finalTheme);
      }
      setTheme(finalTheme);
    },
    [storageKey],
  );

  useEffect(() => {
    setAndStoreTheme(theme);
  }, [theme, setAndStoreTheme]);

  // Listen for changes to the system's preferred color scheme and update the theme

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? 'dark' : 'light';
      setAndStoreTheme(newTheme);
    };

    // Add the listener
    mediaQuery.addEventListener('change', handleChange);

    // Clean up the listener when the component unmounts
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setAndStoreTheme]);

  const value = useMemo(
    () => ({
      theme,
      setAndStoreTheme, // Use setAndStoreTheme here
    }),
    [theme, setAndStoreTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;

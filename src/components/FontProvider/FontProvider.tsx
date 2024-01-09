import { createContext, useEffect, useMemo, useState } from 'react';
import { Font } from '../../types/fontTypes';

type FontProviderProps = {
  children: React.ReactNode;
};

type FontContextType = {
  font: Font;
  setFont: (font: Font) => void;
};

const initialFont: FontContextType = {
  font: 'sans',
  setFont: () => {},
};

export const FontContext = createContext<FontContextType>(initialFont);

function FontProvider({ children }: FontProviderProps) {
  const [font, setFont] = useState<Font>('sans');

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('font-sans', 'font-serif', 'font-mono');

    root.classList.add(`font-${font}`);
  }, [font]);

  const value = useMemo(() => ({ font, setFont }), [font]);

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
}

export default FontProvider;

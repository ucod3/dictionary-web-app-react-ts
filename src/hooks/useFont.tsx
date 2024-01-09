import { useContext } from 'react';
import { FontContext } from '../components/FontProvider/FontProvider';

export default function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFont must be used within a FontProvider');
  }
  const { font, setFont } = useContext(FontContext);
  return {
    font,
    setFont,
  };
}

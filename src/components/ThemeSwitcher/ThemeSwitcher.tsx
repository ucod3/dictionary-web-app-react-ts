import useTheme from '../../hooks/useTheme';
import Switch from '../switch';
import { Theme } from '../../types/themeTypes';

function ThemeSwitcher() {
  const { theme, setAndStoreTheme } = useTheme();

  const handleThemeChange = (isChecked: boolean) => {
    const newTheme: Theme = isChecked ? 'dark' : 'light';
    setAndStoreTheme(newTheme, true);
  };

  return (
    <article className='flex items-center'>
      <Switch checked={theme === 'dark'} onChange={handleThemeChange} />

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='81'
        height='22'
        viewBox='0 0 81 22'
        fill='none'
        strokeWidth={1.5}
        className='p-0 -ml-12 transition-colors duration-200 ease-in-out stroke-toggle-bg hover:stroke-primary-accent'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M60 10.449C59.9985 12.8283 60.8017 15.1383 62.2791 17.0033C63.7566 18.8683 65.8214 20.1788 68.138 20.7218C70.4545 21.2647 72.8866 21.0082 75.039 19.994C77.1912 18.9797 78.9373 17.2673 79.9931 15.1352C70.5442 15.1352 65.858 10.4479 65.858 1C64.0984 1.87311 62.6177 3.22033 61.5827 4.88981C60.5476 6.5593 59.9995 8.48469 60 10.449Z'
        />
      </svg>
    </article>
  );
}

export default ThemeSwitcher;

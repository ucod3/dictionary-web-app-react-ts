import useFont from '../../hooks/useFont';
import { Font } from '../../types/fontTypes';
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '../dropdown';

function FontSwitcher() {
  const { font, setFont } = useFont();

  const handleFontChange = (newFont: Font) => {
    setFont(newFont);
  };

  return (
    <Dropdown>
      <DropdownButton>
        {
          {
            sans: 'Sans Serif',
            serif: 'Serif',
            mono: 'Mono',
          }[font as keyof { sans: string; serif: string; mono: string }]
        }
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='8'
          viewBox='0 0 14 8'
        >
          <path
            fill='none'
            stroke='#A445ED'
            strokeWidth='1.5'
            d='m1 1 6 6 6-6'
          />
        </svg>
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem
          onClick={() => handleFontChange('sans')}
          className='font-sans text-primary-accent'
        >
          Sans Serif
        </DropdownItem>
        <DropdownItem
          onClick={() => handleFontChange('serif')}
          className='font-serif'
        >
          Serif
        </DropdownItem>
        <DropdownItem
          onClick={() => handleFontChange('mono')}
          className='font-mono'
        >
          Mono
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default FontSwitcher;

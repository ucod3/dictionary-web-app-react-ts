import Select from '../select';
import useFont from '../../hooks/useFont';
import { Font } from '../../types/fontTypes';

function FontSwitcher() {
  const { font, setFont } = useFont();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFont = e.target.value as Font;
    setFont(newFont);
  };

  return (
    <>
      <label htmlFor='fontSwitcher' className='sr-only'>
        Font Switcher
      </label>
      <Select
        aria-label='Font Selection'
        name='selected-font'
        id='fontSwitcher'
        value={font}
        onChange={handleChange}
      >
        <option value='sans'>Sans Serif</option>
        <option value='serif'>Serif</option>
        <option value='mono'>Mono</option>
      </Select>
    </>
  );
}

export default FontSwitcher;

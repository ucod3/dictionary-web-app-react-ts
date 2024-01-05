import FontSwitcher from '../FontSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';

function Menu() {
  return (
    <menu className='flex items-center'>
      <li>
        <FontSwitcher />
      </li>
      <li>
        <ThemeSwitcher />
      </li>
    </menu>
  );
}

export default Menu;

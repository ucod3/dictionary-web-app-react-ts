import FontSwitcher from '../FontSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';

function Menu() {
  return (
    <menu className='flex items-center '>
      <li className='flex items-center'>
        <FontSwitcher />
        <span className='after:content-[""] border h-8 text-toggle-accent mx-4 md:mx-6' />
      </li>
      <li>
        <ThemeSwitcher />
      </li>
    </menu>
  );
}

export default Menu;

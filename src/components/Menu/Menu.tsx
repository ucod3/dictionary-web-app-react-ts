import FontSwitcher from '../FontSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';

function Menu() {
  return (
    <menu className='flex items-center gap-2'>
      <li className='flex items-center'>
        <FontSwitcher />
        <span className='after:content-["|"] text-[32px] text-secondary-accent ' />
      </li>
      <li>
        <ThemeSwitcher />
      </li>
    </menu>
  );
}

export default Menu;

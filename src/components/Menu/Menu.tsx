import FontSwitcher from '../FontSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';

function Menu() {
  return (
    <menu className='flex items-center '>
      <li className='flex items-center'>
        <FontSwitcher />
        <span className='after:content-["|"] text-[32px] text-secondary-accent mx-4 md:mx-6' />
      </li>

      <li>
        <ThemeSwitcher />
      </li>
    </menu>
  );
}

export default Menu;

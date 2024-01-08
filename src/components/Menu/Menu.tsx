import FontSwitcher from '../FontSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';

function Menu() {
  return (
    <menu className='flex items-center gap-3 md:gap-4'>
      <li className='flex items-center'>
        <FontSwitcher />
      </li>
      <span className='after:content-["|"] text-[32px] text-secondary-accent ' />
      {/* <li className='text-[32px] text-secondary-accent '>|</li> */}
      {/* <li className='after:content-["|"] text-[32px] text-secondary-accent ' /> */}

      <li>
        <ThemeSwitcher />
      </li>
    </menu>
  );
}

export default Menu;

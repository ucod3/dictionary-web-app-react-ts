import Logo from '../Logo';
import Menu from '../Menu';

function Header() {
  return (
    <header className='flex items-center justify-between pb-6'>
      <Logo />
      <Menu />
    </header>
  );
}

export default Header;

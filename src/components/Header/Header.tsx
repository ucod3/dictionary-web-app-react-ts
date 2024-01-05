import Logo from '../Logo';
import Menu from '../Menu';

function Header() {
  return (
    <header className='flex justify-between p-6'>
      <Logo />
      <Menu />
    </header>
  );
}

export default Header;

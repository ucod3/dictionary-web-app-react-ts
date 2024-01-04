import FontSwitcher from '../FontSwitcher';
import Logo from '../Logo';
import ThemeSwitcher from '../ThemeSwitcher';

function Header() {
  return (
    <header>
      <Logo />
      <FontSwitcher />
      <ThemeSwitcher />
    </header>
  );
}

export default Header;

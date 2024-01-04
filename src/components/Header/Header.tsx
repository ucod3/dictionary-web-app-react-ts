import FontSwitcher from '../FontSwitcher';
import Logo from '../Logo';
import ThemeSwitcher from '../ThemeSwitcher';

type HeaderProps = {};

function Header(props: HeaderProps) {
  return (
    <header>
      <Logo />
      <FontSwitcher />
      <ThemeSwitcher />
    </header>
  );
}

export default Header;

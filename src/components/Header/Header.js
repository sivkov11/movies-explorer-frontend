import './Header.css'
import Logo from "../Logo/Logo";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

function Header() {
  return (
    <header className="header header__auth">
      <section className="header__section">
        <Logo/>
        <AuthNavigation/>
      </section>
    </header>
  );
}

export default Header;
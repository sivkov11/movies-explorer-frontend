import './Header.css'
import Logo from "../Logo/Logo";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  return (
    <header className={`header ${ loggedIn ? '' : 'header__auth'}`}>
      <section className="header__section">
        <Logo/>
        { loggedIn ? <Navigation/> : <AuthNavigation/> }
      </section>
    </header>
  );
}

export default Header;
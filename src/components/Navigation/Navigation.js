import './Navigation.css'
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <input type="checkbox" id="checkboxId"/>
      <label className="hamburger" htmlFor="checkboxId"><span className="hamburger-line"></span></label>
      <div className="navigation__cover"></div>
      <div className="navigation__menu">
        <div className="navigation__links">
          <Link className="navigation__link navigation__link_main" to="/movies">Главная</Link>
          <Link className="navigation__link navigation__link_movies" to="/movies">Фильмы</Link>
          <Link className="navigation__link navigation__link_likes" to="/saved-movies">Сохранённые фильмы</Link>
        </div>
        <Link className="navigation__profile" to="/profile">Аккаунт</Link>
      </div>
    </nav>
  );
}

export default Navigation;
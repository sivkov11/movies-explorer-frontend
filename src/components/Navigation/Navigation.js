import './Navigation.css'
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__links">
        <Link className="navigation__link navigation__link_movies" to="/movies">Фильмы</Link>
        <Link className="navigation__link navigation__link_likes" to="/saved-movies">Сохранённые фильмы</Link>
      </div>
      <Link className="navigation__profile" to="/profile">Аккаунт</Link>
    </nav>
  );
}

export default Navigation;
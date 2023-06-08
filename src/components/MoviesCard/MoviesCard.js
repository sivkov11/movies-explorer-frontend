import './MoviesCard.css'
import {useLocation} from "react-router-dom";

function MoviesCard({movie, savedMovie, onAddMovie, onDeleteMovie}) {
  const location = useLocation()

  const handleAddMovie = () => {
    onAddMovie(movie);
  };

  const handleRemoveMovie = () => {
    onDeleteMovie(savedMovie);
  };

  const handleDeleteSavedMovie = () => {
    onDeleteMovie(movie);
  };

  return (
    <li className="movie">
      <div className="movie__container">
        <a
          className="movie__trailer-link"
          href={movie.trailerLink}
          target="blanck"
        >
          {location.pathname === '/movies' && (
            <img
              className="movie__image"
              alt={movie.nameRU}
              src={`https://api.nomoreparties.co` + movie.image.url}
            />
          )}
          {location.pathname === '/saved-movies' && (
            <img
              className="movie__image"
              alt={movie.nameRU}
              src={movie.image}
            />
          )}
        </a>
        <div className="movie__info">
          <p className="movie__title">{movie.nameRU}</p>
          {location.pathname === '/movies' && (
            <button
              type="button"
              className={`movie__icon movie__icon_like ${
                savedMovie ? 'movie__icon_like_active' : ''
              }`}
              onClick={savedMovie ? handleRemoveMovie : handleAddMovie}
            />
          )}
          {location.pathname === '/saved-movies' && (
            <button
              type="button"
              className="movie__icon movie__icon_delete"
              onClick={handleDeleteSavedMovie}
            />
          )}
        </div>
        <p className="movie__duration">{movie.duration + ' мин'}</p>
      </div>
    </li>
  )
}

export default MoviesCard
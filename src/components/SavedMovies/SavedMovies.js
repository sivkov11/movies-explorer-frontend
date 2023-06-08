import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {message} from "../../utils/Constants";
import {useState, useEffect} from "react";
import {filterSearchMovie, filterShortCheckbox} from '../../utils/Utils';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';

function SavedMovies({savedMovies, onDeleteMovie, windowWidth}) {
  const {notFound} = message;
  const [displayMovies, setDisplayMovies] = useState(savedMovies);
  const [inputQuery, setInputQuery] = useState('');
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearchSubmit = (input) => {
    setInputQuery(input);
  };

  const handleShortFilter = () => {
    setFilterCheckbox(!filterCheckbox);
  };

  useEffect(() => {
    const moviesList = filterSearchMovie(savedMovies, inputQuery);
    setDisplayMovies(
      filterCheckbox ? filterShortCheckbox(moviesList) : moviesList
    );
  }, [filterCheckbox, inputQuery, savedMovies]);

  useEffect(() => {
    if (displayMovies.length === 0) {
      setErrorMessage(notFound);
      setMoviesNotFound(true);
    } else {
      setErrorMessage('');
      setMoviesNotFound(false);
    }
  }, [displayMovies, notFound]);

  return (
    <section className="saved-movies">
      <SearchForm handleSearchSubmit={handleSearchSubmit}/>
      <FilterCheckbox
        filterCheckbox={filterCheckbox}
        handleShortFilter={handleShortFilter}
      />
      {!moviesNotFound ? (
        <MoviesCardList
          displayMovies={displayMovies}
          savedMovies={displayMovies}
          onDeleteMovie={onDeleteMovie}
          errorMessage={errorMessage}
          windowWidth={windowWidth}
        />
      ) : (
        <MoviesNotFound errorMessage={errorMessage}/>
      )}
    </section>
  )
}

export default SavedMovies
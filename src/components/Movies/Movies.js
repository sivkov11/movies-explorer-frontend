import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useState} from "react";
import moviesApi from "../../utils/MoviesApi";
import {filterSearchMovie, filterShortCheckbox} from '../../utils/Utils';
import {message} from "../../utils/Constants";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useEffect} from "react";
import Preloader from '../Preloader/Preloader';
import MoviesNotFound from "../MoviesNotFound/MoviesNotFound";


function Movies({savedMovies, onDeleteMovie, onAddMovie, windowWidth, preloader, setPreloader}) {
  const {notFound} = message;
  const [allMovies, setAllMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [displayMovies, setDisplayMovies] = useState([]);
  const [filterCheckbox, setFilterCheckbox] = useState(
    JSON.parse(localStorage.getItem('short-movies'))
  );

  const handleSearchMovies = (movies, input) => {
    const moviesList = filterSearchMovie(movies, input);

    if (moviesList.length === 0) {
      setErrorMessage(notFound);
      setMoviesNotFound(true);
      setSearchMovies(moviesList);
    } else {
      setErrorMessage(
        filterCheckbox && filterShortCheckbox(moviesList).length === 0
          ? message.notFound
          : ''
      );
      setMoviesNotFound(
        !!(filterCheckbox && filterShortCheckbox(moviesList).length === 0)
      );
      setSearchMovies(moviesList);
    }
  };

  const handleSearchSubmit = (input) => {
    localStorage.setItem('query-movies', input);

    if (allMovies.length === 0) {
      setPreloader(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setAllMovies(res);
          console.log(res)
          handleSearchMovies(res, input);
          localStorage.setItem('movies', JSON.stringify(res));
        })
        .finally(() => {
          setPreloader(false)
        })
        .catch((err) => console.log(err));
    } else {
      handleSearchMovies(allMovies, input);
    }
  };

  const handleShortFilter = () => {
    setFilterCheckbox(!filterCheckbox);

    if (!filterCheckbox) {
      setFilterCheckbox(true);
      setDisplayMovies(filterShortCheckbox(searchMovies));
      if (
        Array.isArray(searchMovies)
          ? filterShortCheckbox(searchMovies).length === 0
          : null
      ) {
        setErrorMessage(message.notFound);
        setMoviesNotFound(true);
        if (localStorage.getItem('movies') === null) {
          setErrorMessage(message.notFound);
          setMoviesNotFound(true);
        }
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    } else {
      setFilterCheckbox(false);
      setDisplayMovies(searchMovies);
      if (Array.isArray(searchMovies) ? searchMovies.length === 0 : null) {
        setErrorMessage(message.notFound);
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    }
    localStorage.setItem('short-movies', !filterCheckbox);
  };

  useEffect(() => {
    const getMovies = JSON.parse(localStorage.getItem('movies'));
    const getInput = localStorage.getItem('query-movies');

    if (localStorage.getItem('movies')) {
      setSearchMovies(filterSearchMovie(getMovies, getInput));
    }
  }, []);

  useEffect(() => {
    if (filterCheckbox) {
      setDisplayMovies(filterShortCheckbox(searchMovies));
    } else {
      setDisplayMovies(searchMovies);
    }
  }, [searchMovies, filterCheckbox]);

  return (
    <section className="movies">
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
      />

      <FilterCheckbox
        handleShortFilter={handleShortFilter}
        filterCheckbox={filterCheckbox}
      />
      {!moviesNotFound ? (
        <MoviesCardList
          displayMovies={displayMovies}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          onAddMovie={onAddMovie}
          windowWidth={windowWidth}
        />
      ) : (
        <MoviesNotFound errorMessage={errorMessage}/>
      )}
      {preloader ? <Preloader/> : null}
    </section>
  )
}

export default Movies
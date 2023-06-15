import './SearchForm.css'
import {message} from '../../utils/Constants';
import {useState, useEffect} from "react";
import useValidationForm from '../../hooks/useValidationForm';
import {useLocation} from "react-router-dom";

function SearchForm({handleSearchSubmit}) {
  const { values, handleChange, isValid, setIsValid } = useValidationForm();
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation()

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      if (
        location.pathname === '/movies' &&
        localStorage.getItem('query-movies')
      ) {
        localStorage.setItem('query-movies', values.search);
      }
      handleSearchSubmit(values.search);
    } else {
      if (
        location.pathname === '/movies' &&
        localStorage.getItem('query-movies')
      ) {
        localStorage.setItem('query-movies', '');
      }
      if (location.pathname === '/saved-movies') {
        handleSearchSubmit('');
      }
      setErrorMessage(message.enterKeyword);
    }
  };

  useEffect(() => {
    if (
      location.pathname === '/movies' &&
      localStorage.getItem('query-movies')
    ) {
      values.search = localStorage.getItem('query-movies');
      setIsValid(true);
    }
  }, [location, setIsValid]);

  useEffect(() => {
    setErrorMessage('');
  }, [isValid]);

  return (
    <section className="search">
      <form onSubmit={handleSubmit} className="search__container" noValidate>
        <input onChange={handleChange} value={values.search || ''} name="search" className="search__input" placeholder="Фильм" type="text" required/>
        <button type="submit" className="search__button"></button>
      </form>
      <span className="search-form__error">{errorMessage}</span>
    </section>
  )
}

export default SearchForm
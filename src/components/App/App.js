import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import React, {useState, useEffect} from "react";
import mainApi from "../../utils/MainApi";
import {useCallback} from "react";
import auth from "../../utils/Auth";
import api from "../../utils/Api";
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { message } from '../../utils/Constants';

function App() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [savedMovies, setSavedMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [preloader, setPreloader] = useState(true);
  const [infoTooltip, setInfoTooltip] = useState(false);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [messageTooltip, setMessageTooltip] = useState('');

  const getWindowWidth = useCallback(() => window.innerWidth, []);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      setLoggedIn(true)
      navigate('/movies')
    }
  }

  useEffect(() => {
    tokenCheck();
  }, [])

  const handleRegister = (data) => {
    auth.register(data).then((res) => {
      localStorage.setItem('jwt', res.token)
      if (res.token) {
        setLoggedIn(true)
        navigate('/movies')
      }
    }).catch((err) => console.log(err));
  }

  const handleLogin = (data) => {
    auth.login(data).then((res) => {
      localStorage.setItem('jwt', res.token)
      if (res.token) {
        setLoggedIn(true)
        navigate('/movies')
      }
    }).catch((err) => console.log(err));
  }

  const handleLogout = () => {
    setLoggedIn(false)
    localStorage.clear()
    setCurrentUser({
      name: '',
      email: '',
      password: ''
    });
    navigate('/')
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(getWindowWidth());
    };

    let resizeTime;

    const resizeController = () => {
      if (!resizeTime) {
        resizeTime = setTimeout(() => {
          resizeTime = null;
          handleWindowResize();
        }, 1000);
      }
    };

    window.addEventListener('resize', resizeController, false);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [getWindowWidth]);

  useEffect(() => {
    api
      .getUser()
      .then((res) => {
        if (res._id) {
          setLoggedIn(true);
          setCurrentUser(res);
        }
      })
      .finally(() => setIsChecked(true))
      .catch((err) => {
        if (err) {
          console.log(err);
          navigate('/');
        }
      });
    mainApi
      .getSavedMovies()
      .then((res) => {
        setPreloader(true);
        setSavedMovies(res);
      })
      .finally(() => setPreloader(false))
      .catch((err) => console.log(err));
  }, [isChecked, loggedIn]);

  const handleAddMovie = (movie) => {
    const addMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${`https://api.nomoreparties.co` + movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${`https://api.nomoreparties.co` + movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }
    mainApi
      .addMovie(addMovie)
      .then((saveMovie) => {
        setSavedMovies([...savedMovies, saveMovie]);
      })
      .catch((err) => console.log(err));
  }

  const handleDeleteMovie = (movie) => {
    mainApi
      .removeMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((err) => console.log(err));
  }

  const handleUpdateUser = (data) => {
    api
      .editUser(data)
      .then((res) => {
        setCurrentUser(res);
        console.log(res)
        setInfoTooltip(true);
        setMessageTooltip('Вы изменили личные данные');
      })
      .catch((err) => {
        console.log(err);
        setInfoTooltip(false);
        setMessageTooltip(message.catchError);
      })
      .finally(() => {
        setIsTooltipPopupOpen(true);
      });
  };

  const closeAllPopups = () => {
    setIsTooltipPopupOpen(false);
  };

  const isOpenPopup = isTooltipPopupOpen;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    if (isOpenPopup) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isOpenPopup]);


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header loggedIn={loggedIn}/>
                <Main/>
                <Footer/>
              </>
            }/>
          <Route
            path="/movies"
            element={
              <>
                <Header loggedIn={loggedIn}/>
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Movies}
                  savedMovies={savedMovies}
                  onAddMovie={handleAddMovie}
                  onDeleteMovie={handleDeleteMovie}
                  windowWidth={windowWidth}
                  preloader={preloader}
                  setPreloader={setPreloader}
                />
                <Footer/>
              </>
            }/>
          <Route
            path="/saved-movies"
            element={
              <>
                <Header loggedIn={loggedIn}/>
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={SavedMovies}
                  savedMovies={savedMovies}
                  onDeleteMovie={handleDeleteMovie}
                  windowWidth={windowWidth}
                />
                <Footer/>
              </>
            }/>
          <Route
            path="/profile"
            element={
              <>
                <Header loggedIn={loggedIn}/>
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Profile}
                  onLogout={handleLogout}
                  onUpdateUser={handleUpdateUser}
                />
              </>
            }/>
          <Route
            path="/signup"
            element={
              <Register handleRegister={handleRegister}/>
            }/>
          <Route
            path="/signin"
            element={
              <Login handleLogin={handleLogin}/>
            }/>
          <Route
            path="/*"
            element={
              <NotFoundPage/>
            }/>
        </Routes>
        <InfoTooltip
          isOpen={isTooltipPopupOpen}
          onClose={closeAllPopups}
          onInfoTooltip={infoTooltip}
          messageTooltip={messageTooltip}
        />
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App;
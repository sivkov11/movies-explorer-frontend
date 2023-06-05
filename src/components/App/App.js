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
import * as Auth from "../../utils/Auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import React, {useState, useEffect} from "react";


function App() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)

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
    Auth.register(data).then(() => {
      navigate('/movies')
    })
  }

  const handleLogin = (data) => {
    Auth.login(data).then((res) => {
      localStorage.setItem('jwt', res.token)
      if (res.token) {
        setLoggedIn(true)
        navigate('/movies')
      }
    })
  }

  const handleLogout = () => {
    setLoggedIn(false)
    localStorage.removeItem("jwt")
    navigate('/')
  }


  return (
    <div className="page">
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
              />
              <Footer/>
            </>
          }/>
        <Route
          path="/profile"
          element={
            <>
              <Header loggedIn={true}/>
              <ProtectedRoute
                loggedIn={loggedIn}
                component={Profile}
                handleLogout={handleLogout}
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
    </div>
  )
}

export default App;
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


function App() {
  const navigate = useNavigate()

  const handleRegister = (data) => {
    Auth.register(data).then(() => {
      navigate('/movies')
    })
  }

  const handleLogin = (data) => {
    Auth.login(data).then(() => {
      navigate('/movies')
    })
  }







  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header loggedIn={false}/>
              <Main/>
              <Footer/>
            </>
          }/>
        <Route
          path="/movies"
          element={
            <>
              <Header loggedIn={true}/>
              <Movies/>
              <Footer/>
            </>
          }/>
        <Route
          path="/saved-movies"
          element={
            <>
              <Header loggedIn={true}/>
              <SavedMovies/>
              <Footer/>
            </>
          }/>
        <Route
          path="/profile"
          element={
            <>
              <Header loggedIn={true}/>
              <Profile/>
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
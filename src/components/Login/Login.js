import './Login.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import {useState} from "react";

function Login({ handleLogin }) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (evt) => {
    const {name, value} = evt.target

    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    handleLogin(userData)
  }

  return (
    <section className="login">
      <div className="login__container">
        <Logo/>
        <h2 className="login__title">Рады видеть!</h2>
        <form onSubmit={handleSubmit} className="login__form">
          <div className="login__form-input">
            <label className="login__label" htmlFor="email">E-mail</label>
            <input onChange={handleChange} className="login__input" name="email" type="email" value={userData.email} required/>
          </div>
          <div className="login__form-input">
            <label className="login__label" htmlFor="password">Пароль</label>
            <input onChange={handleChange} className="login__input" name="password" type="password" value={userData.password} required/>
          </div>
          <button className="login__button" type="submit">Войти</button>
        </form>
        <span className="login__login-text">Ещё не зарегистрированы? <Link className="login__login-link" to="/signup">Регистрация</Link></span>
      </div>
    </section>
  )
}

export default Login
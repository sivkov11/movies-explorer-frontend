import './Register.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import {useState} from "react";

function Register({ handleRegister }) {
  const [userData, setUserData] = useState({
    name: '',
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

    handleRegister(userData)
  }


  return (
    <section className="register">
      <div className="register__container">
        <Logo/>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form onSubmit={handleSubmit} className="register__form">
          <div className="register__form-input">
            <label className="register__label" htmlFor="name">Имя</label>
            <input onChange={handleChange} className="register__input" name="name" type="text" value={userData.name} required/>
            {/*<p className="register__error">Что-то пошло не так...</p>*/}
          </div>
          <div className="register__form-input">
            <label className="register__label" htmlFor="email">E-mail</label>
            <input onChange={handleChange} className="register__input" name="email" type="email" value={userData.email} required/>
            {/*<p className="register__error">Что-то пошло не так...</p>*/}
          </div>
          <div className="register__form-input">
            <label className="register__label" htmlFor="password">Пароль</label>
            <input onChange={handleChange} className="register__input" name="password" type="password" value={userData.password} required/>
            <p className="register__error">Что-то пошло не так...</p>
          </div>
          <button className="register__button" type="submit">Зарегистрироваться</button>
        </form>
        <span className="register__login-text">Уже зарегистрированы? <Link className="register__login-link"
                                                                           to="/signin">Войти</Link></span>
      </div>
    </section>
  )
}

export default Register
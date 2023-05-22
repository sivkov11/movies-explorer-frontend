import './Register.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Logo/>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <div className="register__form-input">
            <label className="register__label" htmlFor="name">Имя</label>
            <input className="register__input" name="name" type="text"/>
            {/*<p className="register__error">Что-то пошло не так...</p>*/}
          </div>
          <div className="register__form-input">
            <label className="register__label" htmlFor="email">E-mail</label>
            <input className="register__input" name="email" type="email"/>
            {/*<p className="register__error">Что-то пошло не так...</p>*/}
          </div>
          <div className="register__form-input">
            <label className="register__label" htmlFor="password">Пароль</label>
            <input className="register__input" name="password" type="password" minLength="2"/>
            <p className="register__error">Что-то пошло не так...</p>
          </div>
          <button className="register__button" type="submit">Зарегистрироваться</button>
        </form>
        <span className="register__login-text">Уже зарегистрированы? <Link className="register__login-link" to="/signin">Войти</Link></span>
      </div>
    </section>
  )
}

export default Register
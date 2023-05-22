import './Login.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Logo/>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <div className="login__form-input">
            <label className="login__label" htmlFor="email">E-mail</label>
            <input className="login__input" name="email" type="email"/>
          </div>
          <div className="login__form-input">
            <label className="login__label" htmlFor="password">Пароль</label>
            <input className="login__input" name="password" type="password" minLength="2"/>
          </div>
          <button className="login__button" type="submit">Зарегистрироваться</button>
        </form>
        <span className="login__login-text">Ещё не зарегистрированы? <Link className="login__login-link" to="/signup">Регистрация</Link></span>
      </div>
    </section>
  )
}

export default Login
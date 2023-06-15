import './Login.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import useValidationForm from "../../hooks/useValidationForm";

function Login({ handleLogin }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useValidationForm();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values);
  };

  return (
    <section className="login">
      <div className="login__container">
        <Logo/>
        <h2 className="login__title">Рады видеть!</h2>
        <form onSubmit={handleSubmit} className="login__form">
          <div className="login__form-input">
            <label className="login__label" htmlFor="email">E-mail</label>
            <input onChange={handleChange} className="login__input" name="email" type="email" value={values.email} required/>
            <span className={`register__error ${
              errors.name ? `register__error_active` : ''
            }`}>{errors.name}</span>
          </div>
          <div className="login__form-input">
            <label className="login__label" htmlFor="password">Пароль</label>
            <input onChange={handleChange} className="login__input" name="password" type="password" value={values.password} required/>
            <span className={`register__error ${
              errors.name ? `register__error_active` : ''
            }`}>{errors.name}</span>
          </div>
          <button className={`register__button ${!isValid ? 'register__button_disable' : ''}`} disabled={!isValid} type="submit">Войти</button>
        </form>
        <span className="login__login-text">Ещё не зарегистрированы? <Link className="login__login-link" to="/signup">Регистрация</Link></span>
      </div>
    </section>
  )
}

export default Login
import './Register.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import useValidationForm from "../../hooks/useValidationForm";

function Register({handleRegister}) {
  const {values, handleChange, resetForm, errors, isValid} =
    useValidationForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(values);
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);


  return (
    <section className="register">
      <div className="register__container">
        <Logo/>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form onSubmit={handleSubmit} className="register__form">
          <div className="register__form-input">
            <label className="register__label" htmlFor="name">Имя</label>
            <input onChange={handleChange} className="register__input" name="name" type="text" value={values.name}
                   required/>
            <span className={`register__error ${
              errors.name ? `register__error_active` : ''
            }`}>{errors.name}</span>
          </div>
          <div className="register__form-input">
            <label className="register__label" htmlFor="email">E-mail</label>
            <input onChange={handleChange} className="register__input" name="email" type="email" value={values.email}
                   required/>
            <span className={`register__error ${
              errors.email ? `register__error_active` : ''
            }`}>{errors.email}</span>
          </div>
          <div className="register__form-input">
            <label className="register__label" htmlFor="password">Пароль</label>
            <input onChange={handleChange} className="register__input" name="password" type="password" value={values.password} required/>
            <span className={`register__error ${
              errors.password ? `register__error_active` : ''
            }`}>{errors.password}</span>
          </div>
          <button className={`register__button ${!isValid ? 'register__button_disable' : ''}`} disabled={!isValid} type="submit">Зарегистрироваться</button>
        </form>
        <span className="register__login-text">Уже зарегистрированы? <Link className="register__login-link"
                                                                           to="/signin">Войти</Link></span>
      </div>
    </section>
  )
}

export default Register
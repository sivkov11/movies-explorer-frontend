import './Profile.css'
import {Link} from "react-router-dom";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useContext, useEffect} from 'react';
import useValidationForm from '../../hooks/useValidationForm';

function Profile({onLogout, onUpdateUser}) {
  const currentUser = useContext(CurrentUserContext);
  const {values, handleChange, resetForm, errors, isValid} =
    useValidationForm();

  const validity =
    !isValid ||
    (currentUser.name === values.name && currentUser.email === values.email);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser(values);
  };

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [resetForm]);

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, {values.name}!</h2>
        <form onSubmit={handleSubmit} className="profile__info" noValidate>
          <div className="profile__info-block profile__info-block_name">
            <span className="profile__name">Имя</span>
            <input type="text"
                   name="name"
                   value={values.name}
                   onChange={handleChange}
                   className="profile__user-name"
                   required/>
            <span className="profile__error">{errors.name}</span>
          </div>
          <div className="profile__info-block profile__info-block_email">
            <span className="profile__email">E-mail</span>
            <input type="email"
                   name="email"
                   value={values.email}
                   onChange={handleChange}
                   className="profile__user-email"
                   required/>
            <span className="profile__error">{errors.email}</span>
          </div >
          <nav className="profile__button-block">
            <button
              type="submit"
              disabled={validity}
              className={`profile__edit ${
                validity ? 'profile__edit_disable' : ''
              }`}
            >
              Редактировать
            </button>
            <Link className="profile__exit" to="/signin" onClick={onLogout}>
              Выйти из аккаунта
            </Link>
          </nav>
        </form>
      </div>
    </section>
  )
}

export default Profile
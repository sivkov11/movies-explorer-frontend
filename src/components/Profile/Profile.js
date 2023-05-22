import './Profile.css'
import {Link} from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__info">
          <div className="profile__info-block profile__info-block_name">
            <p className="profile__name">Имя</p>
            <p className="profile__user-name">Виталий</p>
          </div>
          <div className="profile__info-block profile__info-block_email">
            <p className="profile__email">E-mail</p>
            <p className="profile__user-email">pochta@yandex.ru</p>
          </div>
        </div>
        <button className="profile__edit">Редактировать</button>
        <Link className="profile__exit" to="/">Выйти из аккаунта</Link>
      </div>
    </section>
  )
}

export default Profile
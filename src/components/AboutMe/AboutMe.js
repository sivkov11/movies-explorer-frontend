import './AboutMe.css'
import Photo from '../../images/about-me__photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__person">
          <div className="about-me__text-block">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
              «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
              постоянной работы.</p>
            <a href="#" className="about-me__link">Github</a>
          </div>
          <img className="about-me__photo" src={Photo} alt="Фото"/>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
import './Promo.css'
import Planet from '../../images/promo__image.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__banner">
        <div className="promo__container">
          <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href="#about-project" className="promo__button">Узнать больше</a>
        </div>
        <img className="promo__image" src={Planet} alt="Planet"/>
      </div>
    </section>

  )
}

export default Promo
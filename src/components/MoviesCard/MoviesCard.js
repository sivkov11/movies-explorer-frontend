import './MoviesCard.css'
import Image from '../../images/card__image.jpg'

function MoviesCard({isLiked}) {
  function likeToggle() {
    const like = document.querySelector('.movie__icon_like')
    like.classList.toggle('movie__icon_like_active')
  }

  return (
    <li className="movie">
      <div className="movie__container">
        <img className="movie__image" src={Image} alt="Кадр из фильма"/>
        <div className="movie__info">
          <p className="movie__title">33 слова о дизайне</p>
          {isLiked
            ? <button className="movie__icon movie__icon_delete"></button>
            : <button onClick={likeToggle} className="movie__icon movie__icon_like"></button>
          }
        </div>
        <p className="movie__duration">1ч 47м</p>
      </div>
    </li>
  )
}

export default MoviesCard
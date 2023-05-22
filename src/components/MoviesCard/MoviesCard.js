import './MoviesCard.css'
import Image from '../../images/card__image.jpg'

function MoviesCard({isLiked}) {
  function likeToggle() {
    const like = document.querySelector('.movie__icon_like')
    like.classList.toggle('movie__icon_like_active')
  }

  return (
    <ul className="movies-list">
      <li className="movie">
        <img className="movie__image" src={Image} alt="Кадр из фильма"/>
        <div className="movie__info">
          <p className="movie__title">33 слова о дизайне</p>
          {isLiked
            ? <button className="movie__icon movie__icon_delete"></button>
            : <button onClick={likeToggle} className="movie__icon movie__icon_like"></button>
          }
        </div>
        <p className="movie__duration">1ч 47м</p>
      </li>
    </ul>
  )
}

export default MoviesCard
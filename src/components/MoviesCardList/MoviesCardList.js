import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({isLiked}) {
  return (
    <section className="movie-list">
      <ul className="movie-list__container">
        <MoviesCard isLiked={isLiked}/>
        <MoviesCard isLiked={isLiked}/>
        <MoviesCard isLiked={isLiked}/>
        <MoviesCard isLiked={isLiked}/>
      </ul>
    </section>
  )
}

export default MoviesCardList
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({isLiked}) {
  return (
    <section className="movie-list">
      <div className="movie-list__container">
        <MoviesCard isLiked={isLiked}/>
        <MoviesCard isLiked={isLiked}/>
        <MoviesCard isLiked={isLiked}/>
        <MoviesCard isLiked={isLiked}/>
      </div>
    </section>
  )
}

export default MoviesCardList
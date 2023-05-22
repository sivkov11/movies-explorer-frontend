import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";

function Movies() {
  return (
    <section className="movies">
      <SearchForm/>
      <MoviesCardList isLiked={false}/>
      <MoreButton/>
    </section>
  )
}

export default Movies
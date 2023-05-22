import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm/>
      <MoviesCardList isLiked={true}/>
    </section>
  )
}

export default SavedMovies
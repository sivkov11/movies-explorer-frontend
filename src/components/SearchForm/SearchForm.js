import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__container">
        <input className="search__input" placeholder="Фильм" type="text" required/>
        <button type="submit" className="search__button"></button>
        <FilterCheckbox/>
      </form>
    </section>
  )
}

export default SearchForm
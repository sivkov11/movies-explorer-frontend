import './SearchForm.css'
import {Link} from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <input className="search__input" placeholder="Фильм" type="text"/>
        <Link className="search__button" to="/result"></Link>
      </div>
      <FilterCheckbox/>
    </section>
  )
}

export default SearchForm
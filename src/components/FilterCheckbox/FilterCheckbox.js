import './FilterCheckbox.css'

function FilterCheckbox({ handleShortFilter, filterCheckbox }) {

  return (
    <section className="checkbox">
      <div className="checkbox__container">
        <label className="checkbox__button" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" className="checkbox__input" checked={!!filterCheckbox} onChange={handleShortFilter}></input>
          <span className="checkbox__slider"></span>
        </label>
        <p className="checkbox__title">Короткометражки</p>
      </div>
    </section>
  )
}

export default FilterCheckbox
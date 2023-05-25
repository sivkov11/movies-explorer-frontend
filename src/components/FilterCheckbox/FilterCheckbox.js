import './FilterCheckbox.css'

function FilterCheckbox() {

  return (
    <div className="checkbox">
      <div className="checkbox__container">
        <label className="checkbox__button" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" className="checkbox__input"></input>
          <span className="checkbox__slider"></span>
        </label>
        <p className="checkbox__title">Короткометражки</p>
      </div>
    </div>
  )
}

export default FilterCheckbox
import './MoreButton.css'

function MoreButton({ setIndex, showMovies, showCards, filter }) {
  return (
    <div className="more">
      <div className="more__container">
        {showMovies.length >= showCards.total &&
          showMovies.length < filter.length && (
            <button onClick={setIndex} className="more__button" type="submit">
              Ещё
            </button>
          )}
      </div>
    </div>
  )
}

export default MoreButton
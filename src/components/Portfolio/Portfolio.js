import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__projects">
          <li className="portfolio__project">
            <a href="https://sivkov11.github.io/russian-travel-sivkov11/" className="portfolio__link">
              Статичный сайт
              <span className="portfolio__icon">↗</span>
            </a>
          </li>
          <li className="portfolio__project">
            <a className="portfolio__link">
              Адаптивный сайт
              <span className="portfolio__icon">↗</span>
            </a>
          </li>
          <li className="portfolio__project">
            <a className="portfolio__link">
              Одностраничное приложение
              <span className="portfolio__icon">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
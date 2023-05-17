import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__projects">
          <li className="portfolio__project">
            <a>Статичный сайт</a>
            <span className="portfolio__icon">↗</span>
          </li>
          <li className="portfolio__project">
            <a>Адаптивный сайт</a>
            <span className="portfolio__icon">↗</span>
          </li>
          <li className="portfolio__project">
            <a>Одностраничное приложение</a>
            <span className="portfolio__icon">↗</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
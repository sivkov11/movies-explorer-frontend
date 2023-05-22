import './NotFoundPage.css'

function NotFoundPage() {

  return (
    <section className="not-found-page">
      <div className="not-found-page__container">
        <div className="not-found-page__message">
          <span className="not-found-page__title">404</span>
          <span className="not-found-page__text">Страница не найдена</span>
        </div>
        <button className="not-found-page__back">Назад</button>
      </div>
    </section>
  )
}

export default NotFoundPage
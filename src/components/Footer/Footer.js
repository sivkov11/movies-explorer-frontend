import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__info">
          <p className="footer__year">© 2023</p>
          <div className="footer__links">
            <a href="#" className="footer__link">Яндекс.Практикум</a>
            <a href="#" className="footer__link">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import './AboutProject.css'

function AboutProject() {
  return (
    <section id="about-project" className="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__elements">
        <div className="about__element">
          <h3 className="about__element-title">Дипломный проект включал 5 этапов</h3>
          <p className="about__element-text">Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.</p>
        </div>
        <div className="about__element">
          <h3 className="about__element-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__element-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
            чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about__scale">
        <div className="about__week1">
          <div className="about__green-block">1 неделя</div>
          <p className="about__scale-text">Back-end</p>
        </div>
        <div className="about__week4">
          <div className="about__grey-block">4 недели</div>
          <p className="about__scale-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
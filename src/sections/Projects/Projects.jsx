import styles from './ProjectsStyles.module.css'
import weather from '../../assets/weather.jpeg'
import dictionary from '../../assets/dictionary.jpg'
import ProjectCard from '../../common/ProjectCard'
import calculator from '../../assets/calculator.png'
import markspredictor from '../../assets/markspredictor.jpeg'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        {/* <a href="https://github.com/rishav-wq/weather_app" target="_blank">
          <img className="hover" src={viberr} alt="Weather logo" />
           <h3>Weather </h3>
           <p>Weather Forecasting App</p>
          </a> */}
          <ProjectCard src={weather} link="https://github.com/rishav-wq/weather_app" h3="Weather" p="Weather Forecasting App"/>
          <ProjectCard src={calculator} link="https://github.com/rishav-wq/calculator_app" h3="Calculator" p="Calculation App"/>
          <ProjectCard src={dictionary} link="https://github.com/rishav-wq/dictionary_app" h3="Dictionary" p="Meaning Finder App"/>
          <ProjectCard src={markspredictor} link="https://github.com/rishav-wq/mlproject" h3="Marks Predictor" p="Marks Predicting App"/>
      </div>
    </section>
  );
}

export default Projects

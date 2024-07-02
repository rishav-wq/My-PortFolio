import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme,toggleTheme} = useTheme();
    const themeIcon = theme ==='light' ? sun : moon;
    const twitterIcon = theme ==='light' ? twitterLight : twitterDark;
    const githubIcon = theme ==='light' ? githubLight : githubDark;
    const linkedinIcon = theme ==='light' ? linkedinLight : linkedinDark ;
  
    return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile  picture of Rishav Raj" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>
            Rishav
            <br />
            Raj
        </h1>
        <h2>FullStack Developer</h2>
        <span>
            <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://linkedin.com/in/rishav-raj-177610262" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="https://github.com/rishav-wq" target="_blank">
            <img src={githubIcon} alt="Github icon" />
            </a>
        </span>
        <p className={styles.description}>
        I am a dedicated Full Stack Developer with expertise in front-end and back-end technologies. Skilled in JavaScript, Python, React, and Node.js, I build responsive, high-quality web applications. Always eager to learn and adapt to new technologies.
        </p>
        <a href={CV}  download>
            <button className='hover'>
                Resume
            </button>
        </a>
      </div>
    </section>
  )
}

export default Hero

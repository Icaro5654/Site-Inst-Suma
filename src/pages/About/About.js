import styles from './About.module.css'
import AboutCard from './About_Card';

function About(){
    return(
        <div className={styles.about_container}>
            <h2>O que é o <span>Instituto Sumaúma?</span></h2>
            <br/>
            <AboutCard />

        </div>
    )
}

export default About;
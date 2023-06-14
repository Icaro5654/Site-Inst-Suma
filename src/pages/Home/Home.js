//style
import styles from './Home.module.css'

//img
import arvoredavida from '../../img/Instituto/arvoredavida.png'
import sumaúma from '../../img/Instituto/sumaúma.jpg'
import parque from '../../img/parque.svg'
//Home_components
//import Carousel from './HomeComponents/Carousel'
import HomeCard from './HomeComponents/HomeCard'

const Home = () => {
    return(
        <main className={styles.home_container}>
                <h1>Bem vindo ao <span>Instituto Sumaúma</span></h1> 
            <div className={styles.banner}>
                <h5>
                O <span>Instituto Sumaúma</span>, é uma organização da sociedade 
                civil, com responsabilidade jurídica de direito privado, sem fins
                econômicos.
                </h5>
            </div>
                            
                <br/>
                <HomeCard/>
        </main>
    )
}
export default Home
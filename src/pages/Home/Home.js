//style
import styles from './Home.module.css'

//Home_components
import Carousel from './Carousel'

const Home = () => {
    return(
        <main>
            <section className={styles.home_container}>
                <h1>Bem vindo ao <span>Instituto Sumaúma</span></h1>  
                <Carousel />
            </section>
         
        </main>
    )
}
export default Home
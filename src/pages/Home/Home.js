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
            <h5>O <span>Instituto Sumaúma</span>, é uma organização da sociedade civil,
                com responsabilidade jurídica de direito privado, sem fins econômicos, 
                voltado para o desenvolvimento de atividades de interesse público e 
                relevância socioeducacional, ambiental e cultural, fundamentado na defesa.
            </h5>

        </main>
    )
}
export default Home
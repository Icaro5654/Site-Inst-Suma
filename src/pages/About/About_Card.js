import Card from 'react-bootstrap/Card';
import styles from './Card.module.css'

import logo from "../../img/logo.png"

function AboutCard() {
  return (
    <>
      <Card className={styles.container_card}>
        <div className={styles.about} >
        <Card.Img variant="top" src={logo} alt='logo'/>
        <Card.Body>
          <Card.Text>
          <h5><span>Quem somos?</span></h5>
            O <span>Instituto Sumaúma</span>, é uma organização da sociedade civil,
            com responsabilidade jurídica de direito privado, sem fins
            econômicos, com prazo de duração indeterminado, voltado para
            o desenvolvimento de atividades de interesse público e relevância
            socioeducacional, ambiental e cultural, fundamentado na defesa. 
            preservação e conservação do meio ambiente e promoção do desenvolvimento
            sustentável, na busca pela solidariedade, no bem estar e melhoria continua 
            da qualidade de vida dos indivíduos.
          </Card.Text>
          
          <Card.Text>
          <h5><span>Missão</span></h5>
          
            Promover a valorização e conversação dos remanencentes florestais urbanos e 
            implementar ações alternativas de uso público com fins educativos, recreativos 
            culturais e pesquisas científicas.
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
    </>
  );
}

export default AboutCard;
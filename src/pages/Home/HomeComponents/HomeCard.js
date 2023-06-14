import Card from 'react-bootstrap/Card';
import styles from './HomeCard.module.css'
//img
import sumaúma from '../../../img/Instituto/sumaúma.jpg'
import oficina1 from '../../../img/Instituto/oficina1.jpg'

function BodyOnlyExample() {
  return (
    <div>
    <Card className={styles.conteudo}>
      <Card.Body className={styles.card}>       
      <img src={sumaúma} width="300px" height="350px"/>
        <Card.Text>
          O <span>Instituto Sumaúma</span>, é uma organização da sociedade 
          civil, com responsabilidade jurídica de direito privado, sem fins
          econômicos.
        </Card.Text>   
      </Card.Body>
    </Card>

    <br/>

    <Card className={styles.conteudo}>
      <Card.Body className={styles.card}>
        <img src={oficina1}/>
          <Card.Text>
            Voltado para o desenvolvimento de atividades de interesse público 
            e relevância socioeducaional, ambiental e cultural, fundamentado na 
            defesa e preservação e conservação do meio ambiente.
          </Card.Text>
      </Card.Body>
    </Card>

    <br/>
    <Card className={styles.conteudo}>
      <Card.Body className={styles.card}>
        <Card.Img src={oficina1} />
        <Card.Text>
          Promover a conservação dos remanescentes florestais urbanos e implementar
          ações alternativas de uso público com fins educativos, recreativos, culturais
          e pesquisa científica.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BodyOnlyExample;
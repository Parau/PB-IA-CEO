import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import DrawioCurso from '@site/src/components/drawio-curso'

const divStyle = {
  width: '100%',
  display: 'inline-block',
  textAlign: 'center'
};

const paragrafo = {
  marginLeft: '20px', /* Define a margem esquerda como 20 pixels */
  marginRight:'20px', /* Define a margem direita como 20 pixels */
  maxWidth: '640px',
  margin: '0 auto',
  padding: '0 30px 0 30px'
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={paragrafo}>
        {/* Adicionando o novo recurso "Alo mundo" diretamente */}
        <div className="row" >
            <p>Olá! Sou Parahuari Branco, especialista em tecnologia e educação. 
            Quero dar boas-vindas ao <b>IA Estratégica: <i>guia essencial para CEOs e Líderes</i></b>. 
            Meu objetivo com este guia é desmistificar a Inteligência Artificial, de forma objetiva, acessível e abrangente, 
            demonstrando como ela pode se tornar uma peça fundamental na estratégia da sua organização.</p>
            <p>Explore todo o conteúdo do guia <b><a href="docs/intro">navegando de forma sequencial clicando aqui</a></b> ou utilizando o diagrama com os principais tópicos, apresentado a seguir.
            </p>
        </div>
        <center>
          <div className="row" style={divStyle}>
              <br />
          </div>
          <DrawioCurso />
        </center>
      </div>
    </section>
  );
}

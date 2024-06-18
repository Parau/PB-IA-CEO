import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import DrawioCurso from '@site/src/components/drawio-curso'

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];
const divStyle = {
  width: '100%',
  display: 'inline-block',
  textAlign: 'center'
};

const paragrafo = {
  marginLeft: '20px', /* Define a margem esquerda como 20 pixels */
  marginRight:'20px' /* Define a margem direita como 20 pixels */
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={paragrafo}>
        {/* Adicionando o novo recurso "Alo mundo" diretamente */}
        <div className="row" >
            <p>Seja bem-vindo ao PowerBook do curso <b>Inteligência Artificial para CEOs</b>. 
            Nosso objetivo é desmistificar essa tecnologia e mostrar, de forma objetiva, acessível e abrangente, 
            como ela pode se tornar uma peça fundamental na estratégia da sua organização.</p>
            <p>Explore todo o conteúdo do curso, <b><a href="docs/intro">navegando de forma sequencial</a></b> ou utilizando a estrutura apresentada abaixo.
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

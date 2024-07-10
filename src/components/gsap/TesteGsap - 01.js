import React, { useEffect, useRef } from 'react';
import { gsap,  TimelineLite, TweenMax }  from '@site/src/components/gsap/gsap'
import '@site/src/components/gsap/gsap.css';

const TesteGsap = () => {

  useEffect(() => {
    drawRectangle(); // Chamar a função para desenhar o retângulo
  }, []);

  
  // Criar uma referência para o retângulo
  const rectangleRef = React.useRef(null);

  // Função para desenhar o retângulo
  const drawRectangle = () => {
    // Obter o elemento do retângulo
    const rectangle = rectangleRef.current;

    // Criar uma animação GSAP para o retângulo
    const timeline = new TimelineLite();

    // Animar a largura do retângulo
    timeline.to(rectangle, 2, { width: 200 });

    // Animar a altura do retângulo
    timeline.to(rectangle, 2, { height: 100 });

    // Animar a cor do retângulo
    timeline.to(rectangle, 2, { backgroundColor: 'red' });

    // Animar a posição do retângulo
    timeline.to(rectangle, 2, { x: 100, y: 50 });

    // Iniciar a animação
    timeline.play();
  };

  // Renderizar o componente
  return (
    <div ref={rectangleRef} style={{ width: 0, height: 0, backgroundColor: 'gray' }}></div>
  );
};

export default TesteGsap;
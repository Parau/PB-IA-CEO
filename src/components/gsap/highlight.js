import React, { useEffect, useRef } from 'react';
import { gsap }  from '@site/src/components/gsap/gsap';
import { ScrollTrigger }  from '@site/src/components/gsap/ScrollTrigger';
import { useGSAP } from '@site/src/components/gsap/react';
import '@site/src/components/gsap/hightlight.css';
//import { useColorMode } from '@docusaurus/theme-classic';
const useColorMode = "";
gsap.registerPlugin(ScrollTrigger);

const Highlight = () => {

  useGSAP(() => {
    //const mode = useColorMode;
    gsap.registerPlugin(ScrollTrigger);

    // Criar uma timeline para controlar a ordem das animações
    const timeline = gsap.timeline();

    const viewportHeight = window.innerHeight;
    const startMeioTexto = Math.trunc(viewportHeight/2) + 'px bottom'; //Para iniciar a animação quando texto chega no meio da tela
    const navbar = document.querySelector('nav');
    const startFimTexto = (2*navbar.offsetHeight) + 'px bottom'; //Para iniciar a animação com pouca distância porque estamos no final da tela (botão prpóximo/anterior)
    //const startFimTexto = 'bottom bottom'; //Para iniciar a animação com pouca distância porque estamos no final da tela (botão prpóximo/anterior)

    //Para animação texto no meio da tela
    gsap.utils.toArray(".text-highlight").forEach((highlight, index) => {
        ScrollTrigger.create({
          trigger: highlight,
          start: startMeioTexto,
          onEnter: () => {
            //console.log('onenter: '+highlight);
            highlight.classList.add("active")
          }
      });
   });
  
    //Para animação texto no final da tela
    gsap.utils.toArray(".text-highlight-end").forEach((highlight, index) => {
      console.log('end:'+startFimTexto);
        ScrollTrigger.create({
          trigger: highlight,
          start: startFimTexto,
          onEnter: () => {
            //console.log('onenter: '+highlight);
            highlight.classList.add("active")
          }
        });
    });
  }); // <-- scope is for selector text (optional)

  // Renderizar o componente
  return (

<div id="wrapper">

</div>
  );
};

export default Highlight;
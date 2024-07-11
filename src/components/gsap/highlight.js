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
    
    gsap.utils.toArray(".text-highlight").forEach((highlight, index) => {
        ScrollTrigger.create({
        trigger: highlight,
        start: "100px bottom",
        onEnter: () => {
          //console.log('onenter: '+highlight);
          highlight.classList.add("active")
        }
      });
    });
    
  }
); // <-- scope is for selector text (optional)

  // Renderizar o componente
  return (

<div id="wrapper">

</div>
  );
};

export default Highlight;
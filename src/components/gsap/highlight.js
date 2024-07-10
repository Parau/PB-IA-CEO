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
    
    const highlight = document.getElementById("highlight-style");
    //const mode = useColorMode;
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".text-highlight").forEach((highlight) => {
      console.log('highlight '+highlight);
      ScrollTrigger.create({
        trigger: highlight,
        start: "-50px center",
        onEnter: () => {
          console.log('onenter: '+highlight);
          highlight.classList.add("active")
        }
      });
    });
    
    //const setHighlightStyle = (value) =>
    //  document.body.setAttribute("data-highlight", value);
    
    //mode.addEventListener("click", (e) =>
    //  document.body.classList.toggle("dark-mode")
    //);
    
    //highlight.addEventListener("change", (e) => setHighlightStyle(e.target.value));
    
    //setHighlightStyle(highlight.value);

  }
); // <-- scope is for selector text (optional)

  

  // Renderizar o componente
  return (

<div id="wrapper">

</div>
  );
};

export default Highlight;
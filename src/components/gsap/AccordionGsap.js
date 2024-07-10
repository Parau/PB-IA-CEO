import React, { useEffect, useRef } from 'react';
import { gsap }  from '@site/src/components/gsap/gsap';
import { ScrollTrigger, ScrollSmoother }  from '@site/src/components/gsap/ScrollTrigger';
import { useGSAP } from '@site/src/components/gsap/react';
import '@site/src/components/gsap/accordiongsap.css';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const AccordionGsap = () => {

  useGSAP(() => {
    /*const scrollerSmoother = ScrollSmoother.create({
      content: '#content',
      wrapper: '#wrapper',
      smooth: true,
      effects: false,
      normalizeScroll: true
    })*/
    
    const navbar = document.querySelector('nav');
    //define o topo do accordions baseado na altura do navbar docusaurus
    const start = "top "+(navbar.offsetHeight+5)+"px";

    const tl = gsap.timeline({
      scrollTrigger: {
          trigger: '.accordions',
          pin: false,
          pinSpacing: true,
          start: start, //'top top',
          end: 'top top',
          scrub: 1,
          ease: 'linear',
        }
    })

    tl.to('.accordion', {
      height: 'auto',
      /*duration: 5, */
      /*each: 3.5, */
      stagger: .5,
    }, '<')
    
    /*
    tl.to('.accordion .text', {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: .5,
    })
    tl.to('.accordion', {
      marginBottom: -15,
      stagger: .5,
    }, '<')*/
  }
); // <-- scope is for selector text (optional)

  

  // Renderizar o componente
  return (

<div id="wrapper">

</div>
  );
};

export default AccordionGsap;
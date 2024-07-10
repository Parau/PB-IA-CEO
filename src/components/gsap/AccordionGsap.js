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


    // Select all the accordion elements
    const accordions = document.querySelectorAll('.accordion');

    //Obtem o tamanho atual do accordion conforme tela atual
    const myDiv = document.querySelector(".accordion:nth-child(1)");
    const divHeight = myDiv.offsetHeight;
    //console.log("Div height:", divHeight);

    // Loop through each accordion and create a ScrollTrigger for each
    accordions.forEach((accordion, index) => {
      gsap.fromTo(accordion, 
        {
          height: divHeight // Inicia animação com o tamanho atual da div conforme css
        },
        {
          height: 'auto', // Final height
          scrollTrigger: {
            trigger: accordion,
            pin: false,
            pinSpacing: true,
            start: start, // 'top top', // Start when the top of the accordion is at the bottom of the viewport
            end: 'top bottom', // End when the bottom of the accordion is at the top of the viewport
            scrub: 1,
            ease: 'linear',
            stagger: .1,
            toggleActions: 'play none none none' // Only play the animation on scroll
          }
        }
      );
    });

  }
); // <-- scope is for selector text (optional)

  

  // Renderizar o componente
  return (

<div id="wrapper">

</div>
  );
};

export default AccordionGsap;
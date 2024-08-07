import React, { useState, useRef, useEffect } from 'react';
import ChatGPTWelcome from '@site/static/img/docs/boas-vindas-ChatGPT.jpg';
import { useSpring, animated } from '@react-spring/web';

const BoasVindasChatGPTAlucina = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const animaGPTRef = useRef(null);

  const props = useSpring({
    x: isAnimated ? 200 : -200, 
    //loop: true,
    config: { mass: 1, friction: 15, tension: 200 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
        } 
      },
      {
        threshold: 0.5, // Trigger when 10% of the element is visible
      }
    );

    if (animaGPTRef.current) {
      observer.observe(animaGPTRef.current);
    }

    return () => {
      if (animaGPTRef.current) {
        observer.unobserve(animaGPTRef.current);
      }
    };


  }, []);

  return (
    <div style={{ maxWidth: '100%', margin: 'auto', textAlign: 'center' }}>
      <svg width="100%"
        height="auto"
        viewBox="0 0 508 533"
        preserveAspectRatio="xMidYMid meet">
        <image href={ChatGPTWelcome} width={252} height={533} x={130}/>
        <g transform="scale(0.3) translate(0, 585)">
          { isAnimated &&
            <animated.g style={{ transform: props.x.interpolate(x => `translateX(${x}px)`) }}>
              <path
                fillRule="nonzero"
                fill="orange"
                d="M 16.251 68.479 L 172.991 68.479 L 172.991 12.249 C 172.991 7.949 176.471 4.469 180.761 4.469 C 182.931 4.469 184.881 5.349 186.291 6.769 L 309.351 113.359 C 312.591 116.159 312.941 121.059 310.141 124.289 C 309.881 124.599 309.591 124.879 309.291 125.139 L 185.841 232.059 C 182.601 234.859 177.701 234.499 174.901 231.269 C 173.68 229.862 173.009 228.062 173.011 226.199 L 172.991 169.959 L 16.251 169.959 C 11.961 169.959 8.481 166.479 8.481 162.189 L 8.481 76.249 C 8.481 71.959 11.961 68.479 16.251 68.479 Z"
              />
            </animated.g>
          }
        </g>
      </svg>
      <span id="animaGPT" ref={animaGPTRef}></span>
    </div>
  );
};
export default BoasVindasChatGPTAlucina;


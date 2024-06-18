import React, { useEffect, useRef } from 'react';
//using https://boxy-svg.com/app
const ChartPwcCEOs = () => {
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const lineWidth = 365.66 - 129.31;



  useEffect(() => {
    const percentageText = textRef.current;
    const percentageLine = lineRef.current;
    const duration = 2000; // Duration in milliseconds
    const targetPercentage = 45;

    let startTime = null;

    const animateText = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min((progress / duration) * targetPercentage, targetPercentage);
      percentageText.textContent = `${Math.round(percentage)}%`;

      const lineX2 = 129.31 + (lineWidth * (percentage/targetPercentage));
      percentageLine.setAttribute('x2', lineX2);

      if (progress < duration) {
        requestAnimationFrame(animateText);
      }
    };

    requestAnimationFrame(animateText);
  }, []);

  return (
    <svg viewBox="25.862 10.735 430.4429 135.196" xmlns="http://www.w3.org/2000/svg">
    <line ref={lineRef} style={{ stroke: 'rgb(225, 135, 24)', paintOrder: 'stroke', fill: 'rgb(227, 138, 27)' }} x1="129.31" y1="137.931" x2="365.66" y2="137.931" />
    <text style={{ fill: 'rgb(225, 135, 24)', fontFamily: 'Arial, sans-serif', fontSize: '28px', whiteSpace: 'pre' }} transform="matrix(0.7691810131072998, 0, 0, 0.7691810131072998, -9.601678848266602, -63.7108268737793)">
      <tspan x="275.862" y="125.718">dos CEOs acreditam que </tspan>
      <tspan x="275.862" dy="1em">​</tspan>
      <tspan>suas empresas não serão </tspan>
      <tspan x="275.862" dy="1em">​</tspan>
      <tspan>viáveis em dez anos se </tspan>
      <tspan x="275.862" dy="1em">​</tspan>
      <tspan>continuarem no caminho </tspan>
      <tspan x="275.862" dy="1em">​</tspan>
      <tspan>atual.</tspan>
    </text>
    <text ref={textRef} style={{ fill: 'rgb(225, 135, 24)', fontFamily: 'Arial, sans-serif', fontSize: '79.3px', whiteSpace: 'pre' }} x="25.862" y="82.735">45%</text>
  </svg>
  );
};

export default ChartPwcCEOs;


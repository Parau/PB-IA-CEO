import React, { useEffect, useRef } from 'react';

const ChartPwcCEOs = () => {
  const textRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const percentageText = textRef.current;
    const duration = 2000; // Duration in milliseconds
    const targetPercentage = 45;

    let startTime = null;

    const animateText = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min((progress / duration) * targetPercentage, targetPercentage);
      percentageText.textContent = `${Math.round(percentage)}%`;
      //percentageText.setAttribute('x', 10 + (80 * (percentage / 100)) + '%');

      if (progress < duration) {
        requestAnimationFrame(animateText);
      }
    };

    requestAnimationFrame(animateText);
  }, []);

  return (
    <svg width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      {/* Background bar */}
      <rect x="1" y="45" width="100%" height="40" fill="#000" />

      {/* Animated bar */}
      <rect ref={barRef} x="1" y="45" width="0" height="40" fill="#FFDA73">
        <animate attributeName="width" from="0" to="45%" dur="2s" fill="freeze" />
      </rect>

      {/* Percentage text */}
      <text ref={textRef} x="1" y="38" fill="#FF9900" font-weight="bold" fontSize="50">0%</text>

      <text id="Texto" x="1" y="120" fill="#000" font-weight="bold" font-size="36">
        Em 10 anos
      </text>
      <text id="Texto" x="1" y="150" fill="#000" font-size="26">
        Minha empresa não será viável.
      </text>
      <text id="Texto" x="1" y="170" fill="#000" font-size="12">
        Source: PwC's 27th Annual Global CEO Survey
      </text>
    </svg>
  );
};

export default ChartPwcCEOs;

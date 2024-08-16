import React, { useEffect, useRef } from 'react';

const commonStyle = {
  backgroundColor: '#FF9900',
  color: 'white',
  fontWeight: 'bold',
  height: '25px',
  transition: 'width 1s, padding-right 1s', // Add padding-right to transition
  textAlign: 'right',
  paddingRight: '0',
  width: '0%' // Set initial width to zero
};

const McKinseyIAbyUseCase = () => {
  const chartRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    const bars = chart.querySelectorAll('.bar');
    const duration = 2000; // Duration in milliseconds

    let startTime = null;

    const animateBars = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      bars.forEach((bar, index) => {
        const targetPercentage = parseInt(bar.dataset.percentage, 10);
        const currentPercentage = Math.min((progress / duration) * targetPercentage, targetPercentage);
        bar.style.width = `${currentPercentage}%`;
        bar.style.paddingRight = `${10 * (currentPercentage / targetPercentage)}px`; // Adjust paddingRight based on percentage
      });

      if (progress < duration) {
        requestAnimationFrame(animateBars);
      }
    };

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(animateBars);
      }
    });

    const targetElement = Array.from(chart.childNodes).find(node => node.textContent === '22%');
    //observer.current.observe(chart);
    observer.current.observe(targetElement);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div ref={chartRef} style={{ width: '100%', overflow: 'hidden' }}>
      Automação dos centros de atendimento:
      <div className="bar" data-percentage="26" style={{ ...commonStyle  }}>26%</div>
      Personalização: 
      <br /><div className="bar" data-percentage="23" style={{ ...commonStyle  }}>23%</div>
      Aquisição de clientes: 
      <br /><div className="bar" data-percentage="22" style={{ ...commonStyle  }}>22%</div>

      <div style={{ textAlign: 'center', fontSize: 'calc(100% - 20%)' }}>Source: McKinsey & Company Survey, 2023 | Chart: 2024 AI Index report.</div>
      <br />
    </div>
  );
};
export default McKinseyIAbyUseCase;

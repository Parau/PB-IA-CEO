import React, { useEffect, useRef } from 'react';
//using https://boxy-svg.com/app
const commonStyle = {
  backgroundColor: '#FF9900',
  color: 'white',
  fontWeight: 'bold',
  height: '30px',
  transition: 'width 1s, padding-right 1s', // Add padding-right to transition
  textAlign: 'right',
  paddingRight: '0',
  width: '0%' // Set initial width to zero
};

const PwcCEOsFactors = () => {
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

    const targetElement = Array.from(chart.childNodes).find(node => node.textContent === '38%');
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
      Mudança tecnológica:
      <div className="bar" data-percentage="56" style={{ ...commonStyle  }}>56%</div>
      Mudança nas preferências do cliente: 
      <br /><div className="bar" data-percentage="49" style={{ ...commonStyle  }}>49%</div>
      Regulamentação governamental: 
      <br /><div className="bar" data-percentage="47" style={{ ...commonStyle  }}>47%</div>
      Ações da concorrência: 
      <br /><div className="bar" data-percentage="38" style={{ ...commonStyle  }}>38%</div>
      Mudanças climáticas: 
      <br /><div className="bar" data-percentage="30" style={{ ...commonStyle  }}>30%</div>
      Instabilidade da cadeia de suprimentos: 
      <br /><div className="bar" data-percentage="27" style={{ ...commonStyle  }}>27%</div>
      Mudanças demográficas: 
      <br /><div className="bar" data-percentage="27" style={{ ...commonStyle  }}>27%</div>
      <div style={{ textAlign: 'center', fontSize: 'calc(100% - 20%)' }}>Source: PwC's 27th Annual Global CEO Survey.</div>
      <br />
    </div>
  );
};
export default PwcCEOsFactors;


import React, { useEffect, useRef } from 'react';

const commonStyle = {
  backgroundColor: '#FF9900',
  color: 'white',
  fontWeight: 'bold',
  height: '30px',
  transition: 'width 1s',
  textAlign: 'right',
  paddingRight: '10px'
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

    observer.current.observe(chart);

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
      <br />
    </div>
  );
};
export default PwcCEOsFactors;

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

const McKinseyNegativeExperience = () => {
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

    const targetElement = Array.from(chart.childNodes).find(node => node.textContent === '11%');
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
      <center><b>Riscos relacionados à IA generativa que causaram consequências negativas para as organizações.</b></center>
      Imprecisão:
      <div className="bar" data-percentage="23" style={{ ...commonStyle  }}>23%</div>
      Cibersegurança: 
      <br /><div className="bar" data-percentage="16" style={{ ...commonStyle  }}>16%</div>
      Explicabilidade: 
      <br /><div className="bar" data-percentage="12" style={{ ...commonStyle  }}>12%</div>
      Violação de propriedade intelectual: 
      <br /><div className="bar" data-percentage="11" style={{ ...commonStyle  }}>11%</div>
      Conformidade regulatória: 
      <br /><div className="bar" data-percentage="10" style={{ ...commonStyle  }}>10%</div>
      Privacidade pessoal/individual: 
      <br /><div className="bar" data-percentage="9" style={{ ...commonStyle  }}>9%</div>
      Reputação da organização: 
      <br /><div className="bar" data-percentage="8" style={{ ...commonStyle  }}>8%</div>
      Deslocamento da força de trabalho: 
      <br /><div className="bar" data-percentage="7" style={{ ...commonStyle  }}>7%</div>
      Equidade e justiça: 
      <br /><div className="bar" data-percentage="7" style={{ ...commonStyle  }}>7%</div>
      Segurança física: 
      <br /><div className="bar" data-percentage="4" style={{ ...commonStyle  }}>4%</div>
      Segurança nacional: 
      <br /><div className="bar" data-percentage="4" style={{ ...commonStyle  }}>4%</div>
      Estabilidade política: 
      <br /><div className="bar" data-percentage="4" style={{ ...commonStyle  }}>4%</div>
      Impacto ambiental: 
      <br /><div className="bar" data-percentage="4" style={{ ...commonStyle  }}>4%</div>
      Nenhuma das opções acima: 
      <br /><div className="bar" data-percentage="39" style={{ ...commonStyle  }}>39%</div>
      <div style={{ textAlign: 'center', fontSize: 'calc(100% - 20%)' }}>Source: McKinsey Global Survey on AI. The state of AI in early 2024.</div>
      <br />
    </div>
  );
};
export default McKinseyNegativeExperience;

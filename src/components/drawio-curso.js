import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/*Para exportar os dados adicionais no svg tem que carregar o plugin do draw.io
Select Extras > Plugins from the menu
Click Add
Svgdata
Ou online https://app.diagrams.net/?p=svgdata

Observar se ele tem os data-section que indica os itens para o checks de visitado
data-section="apresentacao"
*/


const itensDoCurso = [
  ["apresentacao", true],
  ["o desafio", false]
];


function UpdateSVG(svgString) {
  const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgString, "image/svg+xml");

  itensDoCurso.forEach(function(item) {
    if (item[1] == false) { //Se ainda não foi concluído retira a marca
      const primeiro = svgDocument.querySelector('[data-section="'+item[0]+'"]');
      const alterarBoxFundo = primeiro.firstChild;
      alterarBoxFundo.setAttribute('fill-opacity', '0');
      const alterar = primeiro.querySelector('image')
      alterar.setAttribute('opacity', '0');
      //console.log(alterar.getAttribute('opacity'));
    }
  });
  return(svgDocument.documentElement.outerHTML);
}

function SvgLoader( ) {
  const [svgContent, setSvgContent] = useState(null);

  const svgPath = useBaseUrl('/img/diagrama_curso.svg');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(svgPath);
        const svgString = await response.text();
        const svgStringUpdated = UpdateSVG(svgString);
        setSvgContent(svgStringUpdated);
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    fetchData();
  }, [svgPath]); // Re-fetch on svgPath change

  return (
    <div>
      {svgContent && (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      )}
    </div>
  );
  
}

export default SvgLoader;
import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@site/src/components/observable/sorveteria";

function SorveteriaObservable() {
  const viewofTemperatura32Ref = useRef();
  const graficoRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "viewof temperatura32") return new Inspector(viewofTemperatura32Ref.current);
      if (name === "Grafico") return new Inspector(graficoRef.current);
      return ["y","tabela","GraficoComLinhaCalculada","GraficoComLinhaCalculadaComparacao","data_curve","poly","Grafico2","polynome_terms","solver","fitting_curve"].includes(name);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={viewofTemperatura32Ref} />
      <div ref={graficoRef} />
    </>
  );
}

export default SorveteriaObservable;
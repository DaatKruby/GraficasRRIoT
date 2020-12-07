import GraficaActividad from "./components/GraficaActividad";
import GraficaBruto from "./components/GraficaBruto";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import { useState, Fragment, useEffect } from "react";

const Titulo = styled.h5`
  font-family: "Staatliches", cursive;
  text-align: center;
`;

const Contenedor = styled.div`
  padding-top: 2rem;
  text-align: center;
  /* Si quieres agregar estilos al contenedor, es aqui (como si fuera css) Ve el ejemplo de arriba si no entiendes */
`;

function App() {
  //EN ESTA SE GUARDA LA INFO QUE VIENE DE LA API QUE ES {DATAMOV,DATASOUND,DATE,ISACTIVITY,LEVELBATERY}
  //PARA MODIFICARLO UTILIZAR SINTAXIS DE REACT => setApiInfo(data) => No modificar sin supervisión (porfaxd)
  const [apiInfo, setApiInfo] = useState([
    {
      name: "",
      Movimiento: 0,
      Sonido: 0,
      amt: 0,
    },
  ]);

  //AQ
  const [dataMov, setDataMov] = useState([
    {
      name: "Sept 1",
      Positivo: 0,
      amt: 2400,
    },
  ]);

  var activity = [{}];
  apiInfo.map((actividad) => {
    let number = actividad.activity ? 1 : 0;
    activity.push({ activ: number });
  });
  console.log(activity);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      const api = await fetch("http://localhost:4000/api/sensorinfo/");
      const info = await api.json();
      setApiInfo(info);
    };
    consultarAPI();
  }, [refresh]);

  let equipo = `
  Equipo:
  Marcos Garcia Ayala, Luis Peña Valenzuela, Alejandra Gandarilla Zarate, Mario Eduardo Gamez, Jose Moreira Ayala`;

  return (
    <Contenedor className="container">
      <h1>SISTEMA DE SEGURIDAD</h1>
      <div className="row">
        <Fragment>
          <div className="row">
            <div className="one-half column">
              <Titulo>Datos del sensor en bruto</Titulo>
              <GraficaBruto data={apiInfo} />
            </div>
            <div className="one-half column">
              <Titulo>Detección de posible actividad</Titulo>
              <GraficaActividad data={activity} />
            </div>
          </div>
        </Fragment>
      </div>
      <Footer titulo="Sistema de Seguridad" texto={equipo} />
    </Contenedor>
  );
}

export default App;

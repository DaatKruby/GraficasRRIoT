import GraficaBruto from './components/GraficaBruto'
import GraficaActividad from './components/GraficaActividad'
import styled from '@emotion/styled'

const Titulo = styled.h5`
font-family: 'Staatliches', cursive;
text-align: center;
`;

const Contenedor = styled.div`
/* Si quieres agregar estilos al contenedor, es aqui (como si fuera css) Ve el ejemplo de arriba si no entiendes */
`;

function App() {

  return (
    <Contenedor className="container">
      <div className="row">
        <div className="one-half column">
          <Titulo>Datos del sensor en bruto</Titulo>
        <GraficaBruto/>
        </div>
        <div className="one-half column">
        <Titulo>Detección de posible actividad</Titulo>
        <GraficaActividad />
        </div>
      </div>
    </Contenedor>
  );
}

export default App;

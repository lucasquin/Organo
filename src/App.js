import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <>
       <Banner />
       <Formulario aoCadastrarColaborador={colaborador => aoNovoColaborador(colaborador)}/>
    </>
  );
}

export default App;

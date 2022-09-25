import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Times';

function App() {
  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaborador = (colaborador) => {setColaboradores([...colaboradores, colaborador])}
  const times = [
    {
      Nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      Nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      Nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      Nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      Nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
    {
      Nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    },
    {
      Nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    }
]

  return (
    <>
       <Banner />
       <Formulario aoCadastrarColaborador={colaborador => aoNovoColaborador(colaborador)}/>
       {times.map(time => <Times  key={time.Nome} nome={time.Nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)} 
    </>
  );
}

export default App;

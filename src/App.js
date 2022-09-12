import { useState } from 'react';
import './App.css';

// crio um objeto para usar no initialState
let initialState = [
  {
    "id": 1,
    "descricao": "Primeira sessão"
  },
  {
    "id": 2,
    "descricao": "Segunda sessão"
  }
]


function App() {

  // para usar o useState ele tem que ser importado
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e) {

    // impede que o navegador atualize a pagina quando clicar no botao
    e.preventDefault();
  
    // preenchendo o objeto
    const atividade = {
      "id": document.getElementById("id").value,
      "descricao": document.getElementById("descricao").value,
    };

    // spread operator, cria um novo array de atividades e faz o push de atividade para esse novo array.
    // deve ser criado um novo array de atividades, se não é criado um array dentro de outro array
    setAtividades([...atividades,  {...atividade}]);
  }

  return (
    <>
    <form className='row g-3'>
      <div className="col-md-6">
          <label htmlFor="inputEmail4">Id</label>
          <input id="id" type="text" className="form-control" placeholder="Id" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4"> Descrição</label>
        <input id="descricao" type="text" className="form-control" placeholder="Descrição" />
      </div>
      <hr />
      <div className="col-12">
        <button className="btn btn-outline-success" onClick={addAtividade}>+ Atividade</button>
      </div>
    </form>

    <div className="mt-3">
      <ul className="list-group"> {atividades.map(x => (
            <li key={x.id} className="list-group-item">{x.id} - {x.descricao}</li>
        ))}        
      </ul>
    </div>
    </>
  );
}

export default App;

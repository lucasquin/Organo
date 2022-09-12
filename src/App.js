import './App.css';

const atividade = [
  {
      "id": 1,
      "descricao": "Primeira sessão"
  }
]
function App() {
  return (
    <div className="mt-3">
        <ul className="list-group">
          <li className="list-group-item">{atividade[0].id} {atividade[0].descricao}</li>
          <li className="list-group-item" onClick={() => ( console.log("JSX"))}>Segunda sessão</li>
          <li className="list-group-item">Terceira sessão</li>
          <li className="list-group-item">Quarta sessão</li>
        </ul>
    </div>
  );
}

export default App;

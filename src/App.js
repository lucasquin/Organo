import './App.css';

const atividade = [
  {
      "id": 1,
      "descricao": "Primeira sessão"
  },
  {
    "id": 2,
    "descricao": "Segunda sessão"
  },
  {
    "id": 3,
    "descricao": "Primeira sessão"
  },
  {
    "id": 4,
    "descricao": "Segunda sessão"
  }
]

function App() {
  return (
    <div className="mt-3">
        <ul className="list-group"> {atividade.map(x => (
              <li key={x.id} className="list-group-item">{x.id} - {x.descricao}</li>
          ))}        
        </ul>
    </div>
  );
}

export default App;

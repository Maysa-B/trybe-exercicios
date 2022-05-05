import './App.css';

const compromissos = ['Limpar quarto', 'Aprender React', 'Academia', 'Comprar presente dia das mães', 'Fazer a janta'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To do List</h1>
        <ol>
        {compromissos.map(curr => Task(curr))}
      </ol>
      </header>
    </div>
  );
}

export default App;

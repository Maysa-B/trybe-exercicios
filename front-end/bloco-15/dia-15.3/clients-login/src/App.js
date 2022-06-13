import './App.css';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Clients from './pages/Clients';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/cadastro" component={ Cadastro } />
          <Route exact path="/clientes-cadastrados" component={ Clients } />
        </Switch>
      </header>
    </div>
  );
}

export default App;

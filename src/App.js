import logo from './logo.svg';
import './App.css';

function App() {
  // crea un nuevo objeto `Date`
  var today = new Date();
 
  // obtener la fecha y la hora
  var now = today.toLocaleString();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo!!!
        </p>
        <p>
          {now}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

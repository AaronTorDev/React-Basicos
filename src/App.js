import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <section>
        <hr></hr>
        <Componente msg = "Hola Soy Un componente funcional expresado desde una prop" msg2 ="Hola, soy la propiedad msg2"/>
      </section>
      <hr></hr>
      <section>
        <Propiedades
         porDefecto = "Las Props" 
         cadena = "Esto es un string"
         numero = {19}
         booleano = {false}
         arreglo = {[1,2,3]}
         />
      </section>
      <hr/>
      <section>
      </section>

    </div>
  );
}

export default App;

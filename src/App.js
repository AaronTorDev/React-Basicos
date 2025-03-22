import logo from './logo.svg';
import Propiedades from './components/Propiedades'
import './App.css';
import Componente from './components/Componente';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';

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
        //  numero = {19}
         booleano = {false}
         arreglo = {[1,2,3]}
         objeto = 
         {{ 
            nombre: "TorDev", 
            correo: "aarontordel1@gmail.com",
             }}
        funcion = { function(num){
          return(num * num)
        }}
         elementoReact = {<i>Esto es un elemento react</i>}
         componenteReact = {<Componente msg = "Soy un componente pasado como prop" msg2 = "Soy msg2"/>}
          />
          <hr></hr>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
          <hr/>
          <MasSobreEventos/>
          <hr/>
          <ComunicacionComponentes/>
      </section>

    </div>
  );
}

export default App;

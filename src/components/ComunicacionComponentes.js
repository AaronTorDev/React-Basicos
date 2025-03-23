import React, {Component} from "react";

class Padre extends Component {

    state = {
        contador : 0,
    };

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador +1
        })
    }
    reducirContador = (e) => {
        this.setState({
            contador: this.state.contador -1
        })
    }


    

    render() { 
        return (
            <>
            <h2>Comunicacion entre Componentes</h2>
            <p>Contador <b>{this.state.contador}</b> </p>
            <Hijoi incrementarContador = {this.incrementarContador} mensaje = "mensaje para el hijo 1"/>
            <Hijor reducirContador = {this.reducirContador} mensaje = "mensaje para el hijo 2"/>
           
            </>
        );
    }
};
 
export default Padre;

function Hijoi (props){

    return(
        <>
        <h3>{props.mensaje}</h3>
        <button onClick = {props.incrementarContador}>+</button>
        </>
    )
};

function Hijor(props){
    return(
        <>
        <h3>{props.mensaje}</h3>
        <button onClick={props.reducirContador}>-</button>
        </>
    )
};


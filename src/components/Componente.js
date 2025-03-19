import React, {Component} from "react";

const Componente = props => 
<>
<div>
<h2>{props.msg}</h2>
<h3>{props.msg2}</h3>
</div>
</>;


// function Componente(props){
//     return <h2>{props.msg}</h2>;
// }

// class Componente extends Component{
//     render(){
//         return <h2>{this.props.msg}</h2>
//     }
// }

export default Componente;
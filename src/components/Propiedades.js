import React from 'react';


 function Propiedades(props){
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero":"Falso"}</li>
                <li>{props.arreglo}</li>

            </ul>
        </div>
    )
};



export default Propiedades;
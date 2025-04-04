import React from 'react';
import PropTypes from 'prop-types';

 function Propiedades(props){
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <h3>{props.porDefecto1}</h3>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero":"Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
                {/* <li>{props.objeto.correo}</li> */}
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion).join(" , ")}</li>
                <hr></hr>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
};


Propiedades.propTypes = {
    numero : PropTypes.number.isRequired,
};

export default Propiedades;
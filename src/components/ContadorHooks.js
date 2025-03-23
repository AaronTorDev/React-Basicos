
import React, {useState,} from "react";

function ContadorHooks(props){

    const [contador,setContador] = useState(0);
    // console.log(useState())

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);




    return(
        <>
        <h2>Hooks - useState</h2>
        <h3>{contador}</h3>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <p>Contador de {props.titulo} </p>
        </>
    );
}

export default ContadorHooks
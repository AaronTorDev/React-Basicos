import React, {useState, useEffect} from "react";


function Reloj({Hour}){
    return(
        <h3>{Hour}</h3>
    )
}

function RelojHooks() {

    const [Hour, setHour] = useState(new Date().toLocaleTimeString());
    const [Visible, setVisible] = useState(false);



  useEffect(() => {

    let temporizador;

    if(Visible){
        temporizador = setInterval(() => {
            setHour(new Date().toLocaleTimeString());
            console.log("Renderizando...")
        }, 1000);
    }else {
        clearInterval(temporizador);

    }
    
    return() => {
        console.log("Temporizador limpiado");
        clearInterval(temporizador);
    };

  }, [Visible]);
 

    return ( 
        <>
        <h2>Reloj Con Hooks</h2>
        <h3>Prueba</h3>
        {Visible && <Reloj Hour = {Hour}/>}
        <button onClick={() => setVisible(true)}>Iniciar</button>
        <button onClick={() => setVisible(false)}>Detener</button>
        </>
     );
}

export default RelojHooks;
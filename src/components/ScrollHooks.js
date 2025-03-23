import React, {useState, useEffect} from 'react';

function ScrollHooks (){

    const [ScrollY, setscrollY] = useState(0);


    useEffect(() => {
      console.log("Moviendo el Scroll");

      const detectarScroll = () => setscrollY(window.pageYOffset);

      window.addEventListener("scroll", detectarScroll);

      return () => window.removeEventListener("scroll", detectarScroll);

      },[ScrollY]);

      useEffect(() => {
        console.log("Fase de Montaje");
      }, []);

      useEffect(() => {
        console.log("Fase de Actualizacion");
      })


      useEffect(() => {
        return() => {
            console.log("Fase de Desmontaje");
        };

      })
    
      
    
    return(
        <>
        <h2> Hooks useEffect Y el Ciclo de Vida</h2>
        <p>Scroll Y del Navegador {ScrollY} px</p>
        </>
    );

}

export default ScrollHooks;
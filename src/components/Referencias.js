import { useRef} from "react"
import React from 'react'

function Referencias() {
    let refMenu = useRef();
    let refMenuBtn = useRef();

    const handleToggleMenu = (e) => {

        // console.log(refMenu);
        // console.log(refMenuBtn);

        // const $menu = document.getElementById("menu");

        // if(e.target.textContent === "Menu"){
        //     e.target.textContent = "Cerrar";
        //     $menu.style.display = "block";
        // }else{
        //     e.target.textContent = "Menu";
        //     $menu.style.display = "none";
        // }

        if(refMenuBtn.current.textContent === "Menu"){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        }else{
            refMenuBtn.current.textContent = "Menu";
            refMenu.current.style.display = "none";
        }


    };

    return(
        <>
        <h2>Referencias</h2>
        <button id='menu-btn' ref = {refMenuBtn} onClick={handleToggleMenu}>Menu</button>
        <nav id='menu' ref= {refMenu} style = {{display : "none"}}>

        <a href="public/index.html">Seccion 1</a>
        <br/>
        <a href="public/index.html">Seccion 2</a>
        <br/>
        <a href="public/index.html">Seccion 3</a>
        <br/>
        <a href="public/index.html">Seccion 4</a>
        <br/>
        <a href="public/index.html">Seccion 5</a>

        </nav>

    
        </>
    );
};

export default Referencias;
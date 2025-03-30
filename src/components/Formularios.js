import React, { useState } from 'react';

// function Formularios(){
//     const [Nombre, setNombre] = useState("");
//     const [sabor, setSabor] = useState("");
//     const [lenguaje, setlenguaje] = useState("");
//     const [Terminos, setTerminos] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("El formulaario se ha enviado");
//     }

//     // const handleChecked = (e) =>{
//     //     if(e.target.value === false){
//     //         setlenguaje(true);
//     //     }else{
//     //         setlenguaje(false);
//     //     }
//     // }

//     return(
//         <>
//         <h2>Formularios</h2>
//         <form onSubmit={handleSubmit}>
//         <label htmlFor='nombre'>Nombre:</label>
//         <br/>
//         <input type="text" 
//         id='nombre' 
//         name='nombre'
//         defaultValue = ""
//         value={Nombre}
//         onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elige tu Sabor JS Favorito</p>


//         <input 
//         type="radio" 
//         id='vanilla' 
//         name='sabor'
//         defaultValue={sabor} 
//         value='vanilla' 
//         onChange={(e) => setSabor(e.target.value)}/>
//         <label htmlFor='vanilla'>Vanilla</label>

//         <input 
//         type="radio" 
//         id='react' 
//         name='sabor' 
//         defaultValue={sabor} 
//         value='react' 
//         onChange={(e) => setSabor(e.target.value)}/>
//         <label htmlFor='react'>React</label>

//         <input 
//         type="radio" 
//         id='angular' 
//         name='sabor' 
//         defaultValue={sabor} 
//         value='angular' 
//         onChange={(e) => setSabor(e.target.value)}
//         defaultChecked
//         />
//         <label htmlFor='angular'>Angular</label>

//         <input 
//         type="radio" 
//         id='vue' 
//         name='sabor'
//         defaultValue={sabor}  
//         value='vue' 
//         onChange={(e) => setSabor(e.target.value)}/>
//         <label htmlFor='vue'>Vue</label>

//         <input 
//         type="radio" 
//         id='svelte' 
//         name='sabor' 
//         defaultValue={sabor}
//         value='svelte' 
//         onChange={(e) => setSabor(e.target.value)}/>
//         <label htmlFor='svelte'>Svelte</label>

//         <br/>
//         <br/>
//         <br/>

//         <p>Elige tu lenguaje de programación Favorito</p>
//         <select name = "lenguaje"
//         defaultValue={lenguaje}
//         onChange={(e) => setlenguaje(e.target.value)}
//         >
//             <option value="">----</option>
//             <option value="js" key="">JavaScript</option>
//             <option value="php" key="">PHP</option>
//             <option value="py" key="">Python</option>
//             <option value="go" key="">Go</option>
//             <option value="rb" key="">Ruby</option>

//         </select>
//         <br/>
//         <label htmlFor='terminos'>Acepto Terminos y Condiciones</label>
//         <br/>
//         <input type="checkbox"
//         id='terminos'  
//         name='terminos' 
//         defaultChecked = {Terminos}
//         onChange= {(e) => {
//             if(e.target.value === false){
//                 setlenguaje(true);
//             }else{
//                 setlenguaje(false);
//             }

//         }}
//         />
//         <br/>
//         <input type="submit"/>
//         </form>



//         </>
//     );
// }
// export default Formularios;

function Formularios(){
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const handleChecked = (e) =>{
        setForm({
            ...form,[e.target.name]: e.target.checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulaario se ha enviado");
    }

    return(
        <>
        <h2>Formularios</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre:</label>
        <br/>
        <input type="text" 
        id='nombre' 
        name='nombre'
        defaultValue = ""
        value = {form.nombre}
        onChange={handleChange}
        />
        <p>Elige tu Sabor JS Favorito</p>


        <input 
        type="radio" 
        id='vanilla' 
        name='sabor'
        value='vanilla' 
        onChange={handleChange}/>
        <label htmlFor='vanilla'>Vanilla</label>

        <input 
        type="radio" 
        id='react' 
        name='sabor' 
        value='react' 
        onChange={handleChange}/>
        <label htmlFor='react'>React</label>

        <input 
        type="radio" 
        id='angular' 
        name='sabor' 
        value='angular' 
        onChange={handleChange}
        defaultChecked
        />
        <label htmlFor='angular'>Angular</label>

        <input 
        type="radio" 
        id='vue' 
        name='sabor'
        value='vue' 
        onChange={handleChange}/>
        <label htmlFor='vue'>Vue</label>

        <input 
        type="radio" 
        id='svelte' 
        name='sabor' 
        value='svelte' 
        onChange={handleChange}/>
        <label htmlFor='svelte'>Svelte</label>

        <br/>
        <br/>
        <br/>

        <p>Elige tu lenguaje de programación Favorito</p>
        <select name = "lenguaje"
        onChange={handleChange}
        >
            <option value="">----</option>
            <option value="js" key="">JavaScript</option>
            <option value="php" key="">PHP</option>
            <option value="py" key="">Python</option>
            <option value="go" key="">Go</option>
            <option value="rb" key="">Ruby</option>

        </select>
        <br/>
        <label htmlFor='terminos'>Acepto Terminos y Condiciones</label>
        <br/>
        <input type="checkbox"
        id='terminos'  
        name='terminos' 
        onChange= {handleChecked}
        />
        <br/>
        <input type="submit"/>
        </form>



        </>
    );
}
export default Formularios;
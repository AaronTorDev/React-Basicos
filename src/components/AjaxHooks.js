
import React, {useState, useEffect} from 'react'
function Pokemon({ avatar, name }) {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}



function AjaxHooks(){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async(url) => {
            let res = await fetch(url),
            json = await res.json();
        
            // console.log(json);

            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                json = await res.json();
                    // console.log(json);
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default,
                    };
                    
                    setPokemons((pokemons) =>[...pokemons, pokemon]);
                });
            
        }

        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);

    return (
        <>
        <h2>Peticiones Asincronas en Hooks</h2>
        {pokemons.length === 0 ? (<h3>Cargando...</h3>)
         : (
            pokemons.map((el) => <Pokemon key = {el.id} name ={el.name} avatar = {el.avatar}/>)
            )}



        {/* {this.state.pokemons.map(el => <Pokemon key = {el.id} name ={el.name} avatar = {el.avatar}/>)} */}
        </>
    );
}

export default AjaxHooks;
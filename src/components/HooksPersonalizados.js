import React from 'react';
import {useFetch} from '../hooks/useFetch';


function HooksPersonalizados() {
    let url = "https://pokeapi.co/api/v2/pokemons/";
    url = "https://jsonplaceholder.typicode.com/users"
    // console.log(useFetch());
    let {Data, IsPending, Error} = useFetch(url);
    return(
        <>
        <h2>Hooks Personalizados</h2>
        <h3>{JSON.stringify(IsPending)}</h3>
        <h3><mark>{JSON.stringify(Error)}</mark></h3>
        <h3>
            <pre style = {{whiteSpace: "pre-wrap"}}>
                <code>
                    {JSON.stringify(Data)}
                </code>
            </pre>
        </h3>
        </>
    );
}
export default HooksPersonalizados;
import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    const [Data, setData] = useState(null);
    const [IsPending, setIsPending] = useState(true);
    const [Error, setError] = useState(null);

    useEffect(() => {

        const getData = async(url) => {

            try {
                let res = await fetch(url);

                if(!res.ok){
                    throw{
                        err:true, 
                        status:res.status, 
                        statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
                    }


                }
                    
                setData(await res.json());
                setIsPending(false);
                setError({err: false});



                
            }catch(err){
                setIsPending(true);
                 setError(err);
            }        
            // console.log(json);   
        }

        getData(url);

    }, [url]);

    return({Data, IsPending, Error});

};

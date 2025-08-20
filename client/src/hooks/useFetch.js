import { useEffect, useState } from "react"

export const useFetch = ( url , options = {}, dependencies = []) =>{
    const [ data, setData] = useState();
    const [loading , setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() =>{
        const fetchData = async () =>{
            setLoading(true);
            console.log('ye main wala chal rha he');
            
            try {
                const response = await fetch(url, options)
                const responseData = await response.json()
                if(!response.ok){
                    throw new Error(`Error: ${response.statusText}, ${response.status}`)
                }
                console.log('yaha pe bhi aa gye hum');
                
                setData(responseData);
                setError();
            } catch (error) {
                setError(error)
            } finally{
                setLoading(false)
            }
        }
        fetchData()
    }, dependencies)


    return { data, error, loading }
}
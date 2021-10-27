import { useState,useEffect } from "react/cjs/react.development";

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const[error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        const abort = new AbortController()
        setTimeout(() => {
           fetch( url,{signal:abort.signal}).then(res=>{
           if (!res.ok) {
                   throw Error("could not get data")
               }
               return res.json();
           })
                .then(data => { setData(data); setError(null); setIsLoading(false) })
                .catch(e => {
                    if (e.name === "AbortError") {
                        console.log("aborted")
                    }
                    else {
                        setError(e.message)
                        setIsLoading(false)
                    }
                })
        }, 700);
        return (() => abort.abort())
    }, [url])
    const handleDelete = (id) => {
        const newBlogs = data.filter(blog=>blog.id!==id)
         setData(newBlogs)
     }
    return {data,isLoading,error,handleDelete} 
}
 
export default useFetch;
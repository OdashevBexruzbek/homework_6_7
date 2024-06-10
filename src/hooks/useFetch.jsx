import { useState, useEffect } from "react"

function useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] =useState(false)
    const [error, setError] = useState(null)

    useEffect(()=> {
      const getData = async () => {
        setIsPending(true)
        try{
          const request = await fetch(url);

          if(!request.ok) {
            throw new Error("Something went wrongg!!!")
          }

          const response = await request.json()
          setData(response)
          setIsPending(false)
          setError(null)
        } catch (error) {
          console.log(error);
          setIsPending(false)
          setError(error.message)
        }
      }

      getData()
    }, [url])

  return {data, isPending, error}
}

export default useFetch
import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      setIsPending(true)

      try {
        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError("Could not fetch the data")
        }
      }
    }
    //this fetchData function runs only after the await above has resolved, meaning the component has successfully mounted
    fetchData()
    //this cleanup function *only* returns when the component using this hook unmounts prematurely!
    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isPending, error }
}

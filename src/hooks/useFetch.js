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
    // This effect runs after the component has mounted.
    // I call fetchData immediately to start the request.
    fetchData()
    // React will run this cleanup function when the component unmounts...
    // OR before the effect runs again due to a dependency change.
    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isPending, error }
}

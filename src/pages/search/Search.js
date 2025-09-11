import { useLocation } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

// Components
import EntryList from "../../components/EntryList"

// Styles
import "./Search.css"

export default function Search() {
  //getting the search term from the URL's query string
  const q = useLocation().search
  const queryParams = new URLSearchParams(q)
  const searchTerm = queryParams.get("q")

  //building the URL with the encoded search term
  const url = `http://localhost:8000/entries?q=${encodeURIComponent(
    searchTerm
  )}`

  //using the URL to fetch the data
  const { error, isPending, data } = useFetch(url)

  return (
    <div>
      <h2 className="page-title">Entries including "{searchTerm}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <EntryList entries={data} />}
    </div>
  )
}

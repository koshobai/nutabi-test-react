import { useFetch } from "../../hooks/useFetch"
// styles
import "./Home.css"

//components
import EntryList from "../../components/EntryList"

export default function Home() {
  const { data, isPending, error } = useFetch("/db.json")

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <EntryList entries={data.entries} />}
    </div>
  )
}

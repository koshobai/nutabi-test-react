import { useFetch } from "../../hooks/useFetch"
// styles
import "./Home.css"

//components
import EntryList from "../../components/EntryList"

export default function Home() {
  //I'm fetching data from a local JSON server running on port 3000
  //after this, I still need to run "npm start" in a separate terminal window
  //it'll ask if I want to run on another port; I say "Y" and it runs on 3001
  //from there, I can access the raw json data at http://localhost:3000/entries
  //and the react app at http://localhost:3001
  const { data, isPending, error } = useFetch("http://localhost:3000/entries")

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <EntryList entries={data} />}
    </div>
  )
}

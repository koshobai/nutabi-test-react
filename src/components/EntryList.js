import { Link } from "react-router-dom"
import "./EntryList.css"

export default function EntryList({ entries }) {
  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <div key={entry.id} className="card">
          <h3>{entry.title}</h3>
          <div>{entry.method.substring(0, 100)}...</div>
          <Link to={`/entries/${entry.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}

import { Link } from "react-router-dom"
//styles
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Nutabi! </h1>ニュウ旅
        </Link>

        <Link to="/create">New Article</Link>
      </nav>
    </div>
  )
}

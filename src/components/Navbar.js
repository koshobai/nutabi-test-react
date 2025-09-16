import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h2>Nutabi! </h2>ニュウ旅
        </Link>

        <Link to="/create">Request a Call</Link>
      </nav>
    </div>
  )
}

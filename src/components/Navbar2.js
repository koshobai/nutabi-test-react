import { Link } from "react-router-dom"
import "./Navbar2.css"

export default function Navbar2() {
  return (
    <div className="navbar2">
      <nav>
        <Link to="/" className="brand2">
          <h2>get excited !</h2>🙌
        </Link>
      </nav>
    </div>
  )
}

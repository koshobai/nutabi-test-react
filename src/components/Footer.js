import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <nav>
        <Link to="/homepage" className="brand">
          <h1>©︎ 2025 Nutabi! </h1>
        </Link>
        <Link to="/search" className="footer ">
          🔍
        </Link>
      </nav>
    </div>
  )
}

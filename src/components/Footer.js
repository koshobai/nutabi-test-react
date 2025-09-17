import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <nav>
        <Link to="/homepage" className="brand">
          <h6>©︎ 2025 Nutabi! </h6>
        </Link>

        <a href="#top" className="floating-nav-button">
          ⇧
        </a>
      </nav>
    </div>
  )
}

import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <nav>
        <Link to="/homepage" className="brand">
          <h1>©︎ 2025 Nutabi! </h1>
        </Link>

        <a href="#top" className="floating-nav-button">
          &#9650;
        </a>
      </nav>
    </div>
  )
}

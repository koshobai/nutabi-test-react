import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <nav>
        <a href="#top" className="floating-cta-button">
          <Link to="/create">Request a Call</Link>
        </a>
        <Link to="/homepage" className="brand">
          <h6>©︎ 2025 Nutabi! </h6>
        </Link>

        <a href="#top" className="floating-nav-button">
          ↑
        </a>
      </nav>
    </div>
  )
}

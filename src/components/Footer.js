import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <nav>
        <div className="floating-cta-button">
          <Link to="/create">Request a Call</Link>
        </div>

        <a href="#top" className="floating-nav-button">
          <h1>〄</h1>
        </a>
      </nav>
    </div>
  )
}

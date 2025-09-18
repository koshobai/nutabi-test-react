import { Link } from "react-router-dom"
import "./Futon.css"

export default function Futon() {
  return (
    <div className="futon">
      <nav>
        <div className="floating-cta-button-blog">
          <Link to="/articles">Our Blog</Link>
        </div>
      </nav>
    </div>
  )
}

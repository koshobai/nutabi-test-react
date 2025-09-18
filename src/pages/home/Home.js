import "./Home.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function Home() {
  return (
    <div className="home" id="home">
      <div
        style={{
          height: "5500px",
          background: "#f0f0f0",
          display: "grid",
          placeItems: "center",
        }}
      >
        content!!
      </div>
      <Link to="/homepage" className="brand">
        <h6 className="copyright">©︎ 2025 Nutabi! </h6>
      </Link>
    </div>
  )
}

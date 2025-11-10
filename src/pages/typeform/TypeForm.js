import { Widget } from "@typeform/embed-react"
import "./Typeform.css"

export default function Typeform() {
  return (
    <div className="typeform" id="typeform">
      <header className="typeform-header">
        <h1 className="typeform-h1">Get Started with Your Tour</h1>
        <p className="lead-text">
          Fill out the form below to begin your journey to Japan.
        </p>
      </header>

      <Widget
        id="01K9NMM69ZYTGSVPGS3HS9GZ1Z"
        style={{
          width: "100%",
          height: "500px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        className="form-container"
      />

      <a href="/about#about-top" className="brand">
        <h6 className="copyright">©︎ 2025 Nutabi </h6>
      </a>
    </div>
  )
}

// styles
import "./Homepage.css"

// components

export default function Home() {
  return (
    // All content is wrapped in a single parent div
    <div className="home">
      <h2 className="page-title">Welcome to Nutabi! ニュウ旅</h2>

      <h1>Business Consulting Services in Japan</h1>
      <p>
        We provide expert guidance and strategic solutions to help your business
        thrive in the unique Japanese market.
      </p>

      {/* Inline styles in JSX use double curly braces {{}} */}
      <div
        style={{
          height: "500px",
          background: "#f0f0f0",
          display: "grid",
          placeItems: "center",
        }}
      >
        content!!
      </div>

      {/* Corrected the className attribute and tag structure */}
      <div className="cta-container">
        <a href="/consultation" className="cta-button">
          Request a Free Consultation
        </a>
      </div>
    </div>
  )
}

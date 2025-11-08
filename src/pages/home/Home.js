import "./Home.css"
// import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="services-container">
        <header className="services-header">
          <h1 className="services-h1">
            It's Tour Time. <br />
            Let's Get You to Japan.
          </h1>
          <br />
          <p className="lead-text">
            We procure the best private tours in Japan, hands down. Prepare for
            the most exclusive-access experience of your life.{" "}
          </p>
          <br />
          <a href="/about" className="cta-button">
            learn more about us
          </a>
          <br />
          <br />
          <p className="lead-text">
            Get spirited away with a tour that spans over a week throughout
            Kyoto, Nara, Osaka, and Awaji.
            <br />
          </p>
        </header>

        {/* Core Services Section */}
        <section className="services-section">
          <h2 className="services-h2">The Flow</h2>
          <div className="services-grid-container">
            <div className="service-card">
              <h3 className="services-h3">Tours Tours Tours</h3>
              <p>
                <div
                  style={{
                    marginTop: "10px",
                    height: "100px",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  <div data-tf-live="01K9EN1VY94FMBDFVK3YJAP039"></div>
                  <script src="//embed.typeform.com/next/embed.js"></script>
                </div>
                <br />
                <br />
              </p>
            </div>
            <div className="service-card">
              <h3 className="services-h3">...</h3>
              <p></p>
            </div>
            <div className="service-card">
              <h3 className="services-h3">...</h3>
              <p>...</p>
            </div>
            <div className="service-card">
              <h3 className="services-h3">...</h3>
              <p>
                <em>...</em>
              </p>
            </div>
          </div>
        </section>

        {/* Partner Network Section */}
        <section className="services-section">
          <h2 className="services-h2">...</h2>
          <p className="lead-text">
            <strong>
              ,,,, <br />
            </strong>
            <br /> ...
          </p>
          <ul className="partner-list">
            <li className="partner-tag">...</li>
            <li className="partner-tag">...</li>
            <li className="partner-tag">...</li>
            <li className="partner-tag">,,,</li>
            <li className="partner-tag">...</li>
            <li className="partner-tag">...</li>
            <li className="partner-tag">...</li>
          </ul>
        </section>

        {/* Our Case Studies  */}
        <section className="services-section">
          <h2 className="services-h2">
            ...
            <br /> ...
          </h2>
          <p className="lead-text">
            ... <br />
            <br />
            ...
            <br />
          </p>
        </section>

        <section>
          <h2 className="services-h2">...</h2>
          <p className="lead-text">
            ...
            <br /> ...
          </p>
        </section>
        <br />
        <br />
        <br />
        <br />
        {/* <br />
        <br /> */}
      </div>
      <a href="/about#about-top" className="brand">
        <h6 className="copyright">©︎ 2025 Nutabi </h6>
      </a>
    </div>
  )
}

import React, { useEffect } from "react"
import "./Typeform.css"

export default function Typeform() {
  // This hook adds the Typeform script to the page
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://embed.typeform.com/next/embed.js" // Force HTTPS
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, []) // Runs only once

  return (
    <div className="typeform" id="typeform">
      <header className="typeform-header">
        <h1 className="typeform-h1">Get Started with Your Tour</h1>
        <p className="lead-text">
          Fill out the form below to begin your journey to Japan.
        </p>
      </header>

      <div
        data-tf-widget="GtFtAZF7"
        style={{
          width: "100%",
          height: "500px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        className="form-container"
      ></div>

      <a href="/about#about-top" className="brand">
        <h6 className="copyright">©︎ 2025 Nutabi </h6>
      </a>
    </div>
  )
}

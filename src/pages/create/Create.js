import { useState } from "react"
import { useHistory } from "react-router-dom"
import "./Create.css"

export default function Create() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submissionMessage, setSubmissionMessage] = useState(null)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submission = { name, email, message }

    try {
      const response = await fetch("https://formspree.io/f/mqayzklo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      })

      if (response.ok) {
        setSubmissionMessage("Thank you for your submission!")
        setTimeout(() => {
          setSubmissionMessage(null)
          history.push("/articles")
        }, 3000)
      } else {
        throw new Error("Network response was not ok.")
      }
    } catch (error) {
      console.error("There was a problem with your submission:", error)
      setSubmissionMessage("Sorry, there was an error. Please try again.")
    }
  }

  return (
    <div className="create">
      <div className="header">
        <h2>Contact Form</h2>
        <p>Get in touch with us!</p>
      </div>

      {submissionMessage && (
        <div className="submission-message">{submissionMessage}</div>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <button className="create-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

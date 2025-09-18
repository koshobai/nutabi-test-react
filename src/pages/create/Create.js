// styles
import "./Create.css"

export default function Create() {
  return (
    <div className="create">
      <div className="header">
        <h2>Contact Form</h2>
        <p>Get in touch with us!</p>
      </div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

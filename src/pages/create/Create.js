// styles
import "./Create.css"

export default function Create() {
  return (
    <div>
      <h2>Request Form Landing Page</h2>
      <p>This is where the form will go.</p>
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

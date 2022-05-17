import { useState } from "react"

const ContactPage = () => {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

 const submitHandler = (e) => {
   e.preventDefault()
 }
  return (
    <>
    <div className="contact-container">
      <h2>Send a message to contact me:</h2>
    <form onSubmit={submitHandler} className="contact-form">
      <label htmlFor="name">Name:</label>
      <input
        className="input"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        className="input"
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message">Message:</label>
      <input
        className="input-message"
        type="text"
        name="message"
        cols="31"
        rows="9"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="input-button" type="submit" value="Submit">Submit</button>
    </form>
    </div>

  </>
  );
};

export default ContactPage;
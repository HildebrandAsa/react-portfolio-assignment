import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showInput, setShowInput] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    setShowInput([
      ...showInput,
      {
        text: name,
        text: email,
        text: message
      }
    ])

    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <>
    
    <form onSubmit={submitHandler} className="contact-form">
      <label htmlFor="name">Name:</label>
      <input
        className="input"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        className="input"
        name="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        className="input-message"
        name="message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="input-button" type="submit" value="Submit">Submit</button>
    </form>
  
  {showInput.map((inputs) => (
    <p>{inputs.text}</p>
  ))}
  </>
  );
};

    export default ContactPage
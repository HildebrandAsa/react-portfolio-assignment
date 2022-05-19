import { useState } from "react"

const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showInput, setShowInput] = useState([])


  const onNameChange = (event) => {
    setName(event.target.value);
  }
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const person = { name, email, message }
    setShowInput([...showInput, person])
  
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
          onChange={onNameChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          className="input"
          name="email"
          type="text"
          value={email}
          onChange={onEmailChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          className="input-message"
          name="message"
          type="text"
          value={message}
          onChange={onMessageChange}
        />
        <button className="input-button" type="submit" value="Submit">Submit</button>
      </form>
    
      {showInput.map((person, i) => (
        <div>
        <h3>Name: {person.name}</h3>
        <h3>Email: {person.email}</h3>
        <h3>Message: {person.message}</h3>
        </div>
      ))}
    </>
  );
};

    export default ContactPage
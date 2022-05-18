import { useState } from "react"

const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name, email, message)
  }
  return (
    <>
    
    <form onSubmit={submitHandler} className="contact-form">
      <label htmlFor="name">Name:</label>
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        className="input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        className="input-message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="input-button" type="submit" value="Submit">Submit</button>
    </form>
{/*     
    <p>Namn: {name}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p> */}
  </>
  );
};

    export default ContactPage
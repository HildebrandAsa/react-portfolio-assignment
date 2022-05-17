import { useState } from "react"

const ContactPage = () => {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

 const submitHandler = (e) => {
   e.preventDefault()
   `Your message has been sent!</h3>
   <p>Name: ${name}</p>
   <p>Email: ${email}</p>
   <p>Message: ${message}</p>`

 }
  return (
    <>
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message">Message:</label>
      <input
        type="text"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>

  </>
  );
};

export default ContactPage;
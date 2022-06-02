import { useState } from "react"

const ContactPage = () => {
//the states to update the values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showInput, setShowInput] = useState([])
  

//Functions for the onChange to change the value
  const onNameChange = (event) => {
    setName(event.target.value);
  }
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  }

  //Function for the submit button 
  const submitHandler = (e) => {
    e.preventDefault()

    //Saving the new values in person
    const person = { name, email, message }
    setShowInput([...showInput, person])
  
    //Clean the inputs
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <>
      <form onSubmit={submitHandler} className="contact-form">
        <label htmlFor="name">Namn:</label>
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
        <label htmlFor="message">Meddelande:</label>
        <textarea
          className="input-message"
          name="message"
          type="text"
          value={message}
          onChange={onMessageChange}
        />
        <button className="input-button" type="submit" value="Submit">Skicka</button>
      </form>
    
    {/* Mapping through the values */}
      {showInput.map((person, i) => (
        <div className="summary">
          <div className="summary-div" key={i}>
            <h3>Name: {person.name}</h3>
            <h3>Email: {person.email}</h3>
            <h3>Message: {person.message}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

    export default ContactPage
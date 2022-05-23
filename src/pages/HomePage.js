import { useState } from "react"
import { Link } from "react-router-dom";

import ImageDisplay from "../components/ImageDisplay";
import Modal from "../components/Modal"


const HomePage = () => {
//useState to be able to change the state - open and close the modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
    <div className="container">
      <div className="home-container">
        <h1 className="title">Välkommen till</h1>
        <h2 className="title-name">Åsas portfolio</h2>
        <ImageDisplay />
        <h3 className="home-text">Hej! Jag heter Åsa Hildebrand, är 35 år och bor i Karlstad tillsammans 
          med min sambo, våra två barn och en katt. Jag tycker, förutom att koda, umgås med familj och 
          vänner, resa, träna och läsa böcker. Jag är frontend-utvecklare och gör gärna en hemsida till 
          just dig! Klicka nedan för att läsa mer om mig!</h3>
          <Link to={"/about"}><button className="button">Om mig</button></Link>
      </div>
      <div className="modal-container">
        {/* Button with onClick to chang the state to true for opening the modal */}
        <button className="modal-button" onClick={() => {setOpenModal(true)}}>Boka ett möte!</button>
        {/* When openModal is true the modal shows with the messages, and a clickHandler which sets to false to be able to close the modal */}
        {openModal && <Modal closeModal={setOpenModal} clickHandler={() => {setOpenModal(false)}} message={"Ring mig på nummer 070-0000000 för att boka ett möte!"} closeMessage={"X"}/>}
      </div>
    </div>
    </>
  );
};

export default HomePage;
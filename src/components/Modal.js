import { useState } from "react"

const Modal = () => {

  const [modal, setModal] = useState()
  
  return (
    <div>
      <button>Book a meeting</button>
    </div>
  );
};

export default Modal;
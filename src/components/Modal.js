import { useState } from "react"

const Modal = ({open, children}) => {

  const [openModal, setOpenModal] = useState(false)

  
  return (
    <div>
      <button onClick={open}>{children}</button>
    </div>
  );
};

export default Modal;
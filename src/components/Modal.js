//Props for the onClick and messages on the modal
const Modal = ({clickHandler, message, closeMessage}) => {

  
  return (
    <div className="modal">
      <button onClick={clickHandler} className="close-button">{closeMessage}</button>
      <h3>{message}</h3>
    </div>
  );
};

export default Modal;
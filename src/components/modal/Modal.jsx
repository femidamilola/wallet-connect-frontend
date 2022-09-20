import "./modal.css";
// template for the modals
const Modal = ({showModal, handleShowModal, children}) => {
    return (
        <div  onClick={handleShowModal} className={`modal_wrap hide  ${showModal ? "show" : ""}`}>
            <div className="modal_dialogue">
            <div className="modal">
              {children}
            </div>
            </div>
        </div>
    )
}

export default Modal

import Modal from "./Modal";

const InfoModal = ({handleShowModal, showModal, message}) => {
  return (
    <Modal showModal={showModal} handleShowModal={handleShowModal}>
      <div className="modal-head">
        <p>{message}</p>
      </div>
      <button onClick={handleShowModal} type="button" className="btn">
        Ok
      </button>
    </Modal>
  );
};

export default InfoModal;

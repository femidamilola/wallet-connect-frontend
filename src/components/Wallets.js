const Wallets = ({wallets, handleShowModal}) => {
  return (
    <div className="wallets_wrap">
      {wallets.map(({name, icon}, i) => (
        <button
          key={name + i}
          onClick={handleShowModal}
          value={name}
          className="wallet"
        >
          <img className="icon" src={icon} alt={icon} />
          <h2>{name}</h2>
        </button>
      ))}
    </div>
  );
};

export default Wallets;

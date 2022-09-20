import { useState } from "react";
import Wallets from "./components/Wallets";
import FormModal from "./components/modal/FormModal";
import "./assets/styles/app.css";
import trustWallet from "./assets/images/trustwallet.png";
import metamask from "./assets/images/metamask.png";
import digitex from "./assets/images/digitex.png";
import aave from "./assets/images/AAVE.png";
import coinbase from "./assets/images/coinbase.jpeg";
import defiat from "./assets/images/defiat.jpeg";
import enjin from "./assets/images/enjin.svg";
import exodus from "./assets/images/exodus.png";
import fortmatic from "./assets/images/fortmatic.jpeg";
import ledger from "./assets/images/ledger.jpeg";
import mew from "./assets/images/mew.png";
import portis from "./assets/images/portis.svg";
import skale from "./assets/images/skale.webp";
import walletconnect from "./assets/images/walletconnect.svg";
import authereum from "./assets/images/authereum_shield.svg";
import capiteum from "./assets/images/capiteum.png"

const wallets = [
  {
    name: "Trust Wallet",
    icon: trustWallet,
  },
  {
    name: "Metamask",
    icon: metamask,
  },
  {
    name: "Digitex",
    icon: digitex,
  },
  {
    name: "AAVE",
    icon: aave,
  },
  {
    name: "Coinbase",
    icon: coinbase,
  },
  {
    name: "Defiat",
    icon: defiat,
  },
  {
    name: "Enjin",
    icon: enjin,
  },
  {
    name: "Exodus",
    icon: exodus,
  },
  {
    name: "FortMatic",
    icon: fortmatic,
  },
  {
    name: "Ledger",
    icon: ledger,
  },
  {
    name: "Mew",
    icon: mew,
  },
  {
    name: "Portis",
    icon: portis,
  },
  {
    name: "Skale",
    icon: skale,
  },
  {
    name: "Capiteum Wallet Connect",
    icon: walletconnect,
  },
  {
    name: "Authereum",
    icon: authereum,
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = e => {
    if (e.target !== e.currentTarget) return;
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <main>
        <img className="icon" src={capiteum} alt={capiteum} />
        <h1 className="title">Capiteum Wallet Connect</h1>
        <p className="description">
          The best way to manage all your wallets from a single app. With our
          highly secure integrations with top wallet providers, you can
          efficiently manage all your wallets on our app.
        </p>
        <Wallets wallets={wallets} handleShowModal={handleShowModal} />
        <FormModal showModal={showModal} handleShowModal={handleShowModal} />
      </main>
    </div>
  );
}

export default App;

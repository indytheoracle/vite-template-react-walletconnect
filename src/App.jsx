import { useState } from "react";
import useWalletConnect from "./useWalletConnect";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [uri, setUri] = useState("");
  const { createWeb3Wallet, pair } = useWalletConnect();

  const handleConnect = async () => {
    // Here, you would initiate the WalletConnect connection using the provided URI.
    // For the sake of this example, we'll just log it.
    await createWeb3Wallet();
    await pair({ uri });
    console.log(`Connecting to WalletConnect with URI: ${uri}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Vite + React + WalletConnect</h1>
        <div>
          <input
            type="text"
            placeholder="Paste WalletConnect URI here"
            value={uri}
            onChange={(e) => setUri(e.target.value)}
          />
          <button onClick={handleConnect}>Connect</button>
        </div>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;

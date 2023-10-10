import { useState } from "react";
import { Core } from "@walletconnect/core";
import { Web3Wallet } from "@walletconnect/web3wallet";

const useWalletConnect = () => {
  // Initialize WalletConnect
  const [web3wallet, setWeb3Wallet] = useState(null);

  const createWeb3Wallet = async () => {
    if (web3wallet) return;
    const core = new Core({
      projectId: import.meta.env.VITE_WALLETCONNECT_ID,
    });
    const newWallet = await Web3Wallet.init({
      core,
      metadata: {
        name: "React Wallet Example",
        description: "React Wallet for WalletConnect",
        url: "https://walletconnect.com/",
        icons: ["https://avatars.githubusercontent.com/u/37784886"],
      },
    });

    newWallet.on("session_proposal", async (sessionProposal) => {
      console.log("pca", "session_proposal", sessionProposal);
      // connect to wallet and approve session if successful.
    });

    newWallet.on("session_request", async (sessionRequest) => {
      console.log("pca", "session_request", sessionRequest);
      // pass request to wallet and return result
    });
    setWeb3Wallet(newWallet);
  };

  const pair = async ({ uri }) => {
    if (!web3wallet) return;
    debugger;
    await web3wallet.pair({ uri });
  };

  return {
    createWeb3Wallet,
    pair,
  };
};

export default useWalletConnect;

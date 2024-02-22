"use client";

import React, {useState, useEffect} from "react";
import {useWallet} from "@/Context/WalletContext";

const Phantom = ({
  setWalletAddress,
  setIsWalletConnected,
  setWalletInfo,
  setWalletDropdown,
  setLoading
}) => {
  const [provider, setProvider] = useState(null);

  const wallet = useWallet();

  useEffect(() => {
    getProvider();
  }, []);

  useEffect(() => {
    if (provider) {
      provider.on("disconnect", () => {
        setIsWalletConnected(false);
        setWalletAddress(null);
        setWalletInfo(null);
        wallet.setProvider(null);
      });
    }
  }, [provider]);

  const getProvider = () => {
    if ("phantom" in window) {
      const anyWindow = window;
      const provider = anyWindow.phantom?.solana;

      if (provider?.isPhantom) {
        setProvider(provider);
        return;
      }
    }
    setProvider(false);
    return;
  };

  const connectPhantom = async () => {
    if (!provider) {
      window.open("https://phantom.app/", "_blank");
    } else {
      console.log("in connection phantmo");
      setWalletDropdown(false);
      setLoading(true);
      try {
        const resp = await provider.connect();

        setWalletAddress(resp.publicKey.toString());
        setLoading(false);
        setIsWalletConnected(true);
        wallet.setProvider(provider);
        setWalletInfo(prev => {
          return {
            ...prev,
            key: "PHANTOM"
          };
        });
      } catch (err) {
        setLoading(false);
        console.log({code: 4001, message: "User rejected the request."});
      }
    }
    // console.log("connected!!!");
  };

  return (
    <a
      onClick={() => {
        connectPhantom();
      }}
      style={{
        display: "flex",
        gap: "10px",

        fontSize: "14px",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "var(--green-100)"
      }}>
      Phantom Wallet
      {/* <img
        src='/assets/phantom.png'
        alt='solana logo'
        height={26}
      /> */}
    </a>
  );
};

export default Phantom;

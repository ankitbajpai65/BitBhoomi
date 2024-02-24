"use client";
import { useState, useEffect } from "react";
import { Menu, MenuItem, Typography } from '@mui/material';
import Phantom from "./Wallets/Phantom";
import Solflare from "./Wallets/Solflare";
import { useWallet } from "@/Context/WalletContext";
import './Wallet.css';

const solfareLogoStyle = {
  height: '2rem',
  width: '2.5rem',
  marginLeft: '-4px'
}

const phantomLogoStyle = {
  height: "2rem",
  width: "1.8rem",
  marginRight: "10px"
};

const Wallet = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletInfo, setWalletInfo] = useState({
    id: "",
    key: ""
  });
  const [loading, setLoading] = useState(false);

  const wallet = useWallet();

  const [anchorElWallet, setAnchorElWallet] = useState(null);
  const [anchorElDisconnect, setAnchorElDisconnect] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElWallet(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElWallet(null);
  };

  const handleOpenDisconnectMenu = (event) => {
    setAnchorElDisconnect(event.currentTarget);
  };

  const handleCloseDisconnectMenu = () => {
    setAnchorElDisconnect(null);
  };

  const wallets = [
    {
      name: "Solflare Wallet",
      image: "/dp2.png",
      component: (
        <Solflare
          setIsWalletConnected={setIsWalletConnected}
          setWalletAddress={setWalletAddress}
          setWalletInfo={setWalletInfo}
          setLoading={setLoading}
        />
      ),
    },
    {
      name: "Phantom Wallet",
      image: "/dp1.png",
      component: (
        <Phantom
          setIsWalletConnected={setIsWalletConnected}
          setWalletAddress={setWalletAddress}
          setWalletInfo={setWalletInfo}
          setLoading={setLoading}
        />
      ),
    }
  ];

  //Set the wallet address state to the context api
  useEffect(() => {
    wallet.setAddress(walletAddress);
  }, [walletAddress]);

  const handleDisconnectWallet = async () => {
    if (walletInfo.key === "SOLFLARE") {
      await wallet.provider.disconnect();
    } else if (walletInfo.key === "PHANTOM") {
      await wallet.provider.disconnect();
    }
    handleCloseDisconnectMenu();
  };


  return (
    <>
      <div className='secondaryButton homeButtonProp'>
        {
          isWalletConnected ?
            (
              <div
                onMouseEnter={handleOpenDisconnectMenu}
                className="walletAddressContainer"
              >
                {`${walletAddress.slice(0, 10)}...${walletAddress.slice(-4)}`}
                <img
                  src={wallets[walletInfo.id].image}
                  alt={wallets[walletInfo.id].name}
                  style={walletInfo.id === 0 ? solfareLogoStyle : phantomLogoStyle}
                />

                <Menu
                  sx={{ top: '55px' }}
                  id="menu-appbar"
                  anchorEl={anchorElDisconnect}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElDisconnect)}
                  onClose={handleCloseDisconnectMenu}
                >
                  <MenuItem onClick={handleDisconnectWallet}>
                    <Typography textAlign="center">Disconnect wallet</Typography>
                  </MenuItem>
                </Menu>
              </div>
            )
            :
            (
              <div>
                <button
                  className="connectBtn"
                  onMouseEnter={(e) => {
                    if (!loading) handleOpenUserMenu(e);
                  }}
                >
                  {loading ? "Connecting..." : "Connect Solana Wallet"}
                  <img
                    src='/solana_logo.png'
                    alt='solana logo'
                    className="solanaImg"
                  />
                </button>

                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElWallet}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElWallet)}
                  onClose={handleCloseUserMenu}
                >
                  {
                    wallets?.map((wallet, index) => {
                      return (
                        <MenuItem>
                          <>
                            {index === 0 && <img src="/dp2.png" alt="" style={solfareLogoStyle} />}
                            {index === 1 && <img src="/dp1.png" alt="" style={phantomLogoStyle} />}
                            <div
                              key={wallet.name}
                              onClick={() => {
                                setWalletInfo(prev => {
                                  return {
                                    ...prev,
                                    id: index
                                  };
                                });
                                handleCloseUserMenu();
                              }}>
                              {wallet.component}
                            </div>
                          </>
                        </MenuItem>
                      );
                    })
                  }
                </Menu>
              </div>
            )}
      </div>
    </>
  );
};

export default Wallet;

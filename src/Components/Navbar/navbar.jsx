"use client";
import {useState} from "react";
import "./navbar.css";
import {Menu, MenuItem, Typography} from "@mui/material";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Wallet from "../Wallet/Wallet";

import SolflareWallet from "@solflare-wallet/sdk";

const logoStyle = {
  height: "2rem",
  width: "1.8rem",
  marginRight: "10px"
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='navbar'>
      <span>
        <img
          src='/logo2.png'
          alt=''
        />
      </span>
      <div className='linksContainer'>
        <Link
          href='/'
          className={`${pathname === "/" && "activeNavLink"}`}>
          Home
        </Link>
        <Link
          href='/ido'
          className={`${pathname === "/ido" && "activeNavLink"}`}>
          IDO
        </Link>
      </div>
      <Wallet />
    </nav>
  );
};

export default Navbar;

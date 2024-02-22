"use client"
import { useState } from 'react';
import './navbar.css';
import { Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const logoStyle = {
    height: '2rem',
    width: '1.8rem',
    marginRight: '10px'
};

const Navbar = () => {
    const pathname = usePathname();
    const [anchorElUser, setAnchorElUser] = useState(null);
    // const [isWalletConnect, setIsWalletConnected] = useState(false);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <nav className='navbar'>
            <span>
                <img src="/logo2.png" alt="" />
            </span>
            <div className="linksContainer">
                <Link href="/" className={`${pathname === '/' && 'activeNavLink'}`}>Home</Link>
                <Link href="/ido" className={`${pathname === '/ido' && 'activeNavLink'}`}>IDO</Link>
            </div>
            <button
                className="walletBtn"
                onMouseEnter={handleOpenUserMenu}
            >Connect Wallet
            </button>

            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                    <img src="/dp1.png" alt="" style={logoStyle} />
                    <Typography textAlign="center">Phantom</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <img src="/dp2.png" alt="" style={{ width: "2rem", marginRight: '10px' }} />
                    <Typography textAlign="center">Solfare</Typography>
                </MenuItem>
            </Menu>
        </nav>
    )
}

export default Navbar;
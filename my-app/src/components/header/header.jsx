import React from 'react';
import './Header.css';
import Logo from "../../images/logo.png"

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="Logo" className="logo" />
            <h1>Gatos Amigos</h1>
        </div>
    );
};

export default Header;



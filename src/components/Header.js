import React from 'react';
import logo from "../assets/images/logo.png"

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark justify-content-between px-4">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" width="200" height="30"/>
                </a>
            </nav>
        </header>
    );
};

export default Header;
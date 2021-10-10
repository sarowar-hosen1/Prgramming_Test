import React from 'react';
import logo from "../assets/images/logo.png"

const Header = () => {
    return (
        <header className="">
            <nav className="navbar navbar-dark bg-dark justify-content-between px-4">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" width="200" height="30" />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
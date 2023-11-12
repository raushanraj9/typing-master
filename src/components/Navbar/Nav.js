import React from "react";
import "./Nav.css";
import logo from "./../../assests/logo.png"

const Nav=()=>
{
    return (
        <div className="nav-container">
            <div className="nav-left">
              <img className="flash-logo" src={logo} alt="logo" />
              <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
              <a className="nav-link" target="_blank" href="https://portfolio.rock1234.repl.co/" rel="noreferrer">Portfolio</a>
            </div>
        </div>
    )
}

export default Nav;
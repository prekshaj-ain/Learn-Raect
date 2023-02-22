import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => (
    <div className="Header">
        <Logo/>
        <ul className="navItems">
            <li className="item"><Link to="/About">About Us</Link></li>
            <li className="item"><Link to="/Contact">Contact</Link></li>
            <li className="item">Cart</li>
            <li className="item"><Link to="/login">Login</Link></li>
        </ul>
    </div>
)
// default export
export default Header;
import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
    <div className="Header">
        <div className="logo">Flavour</div>
        <ul className="navItems">
            <li className="item"><Link to="/About">About Us</Link></li>
            <li className="item"><Link to="/Contact">Contact</Link></li>
            <li className="item">Cart</li>
        </ul>
    </div>
)
// default export
export default Header;
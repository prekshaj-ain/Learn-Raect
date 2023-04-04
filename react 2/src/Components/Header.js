import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => (
    <div className="flex max-w-[1228px] m-auto px-2">
        <Link to="/"><Logo/></Link>
        <ul className="flex items-center flex-auto justify-end gap-8 font-semibold antialiased text-slate-600 text-sm">
            <li className="hover:text-red-500"><Link to="/Contact">Offers</Link></li>
            <li className="hover:text-red-500"><Link to="/About">About</Link></li>
            <li className="hover:text-red-500"><Link to="/login">Sign In</Link></li>
            <li className="hover:text-red-500">Cart</li>
            <li className="hover:text-red-500"><Link to="/instamart">Instamart</Link></li>
        </ul>
    </div>
)
// default export
export default Header;
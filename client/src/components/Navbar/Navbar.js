import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (

    <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link
                to="/"
                className={
                    window.location.pathname === "/" ? "nav-link active" : "nav-link"
                }
            >
                Log In
       </Link>
        </li>
        <li className="nav-item">
            <Link
                to="/records"
                className={
                    window.location.pathname === "/records" ? "nav-link active" : "nav-link"
                }
            >
                Records
       </Link>
        </li>

        <li className="nav-item">
            <Link
                to="/form"
                className={
                    window.location.pathname === "/form" ? "nav-link active" : "nav-link"
                }
            >
                Form
      </Link>
        </li>

        <li className="nav-item">
            <Link
                to="/chat"
                className={
                    window.location.pathname === "/chat" ? "nav-link active" : "nav-link"
                }
            >
                Chat
      </Link>
        </li>

        <li className="nav-item">
            <Link
                to="/Directions"
                className={
                    window.location.pathname === "/Directions" ? "nav-link active" : "nav-link"
                }
            >
                Directions
      </Link>
        </li>

    </ul>

);

export default Navbar;
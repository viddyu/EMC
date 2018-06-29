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
                Form
      </Link>
        </li>
        <li className="nav-item">
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
    </ul>
);

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import BlueCross from "./bluecross.png";
import "./Navbar.css";

const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img className="blue-cross-logo" src={BlueCross}/>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
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
                to="/directions"
                className={
                    window.location.pathname === "/directions" ? "nav-link active" : "nav-link"
                }
            >
                Directions
      </Link>
        </li>

    </ul>
    </div>
    </nav>

);

export default Navbar;
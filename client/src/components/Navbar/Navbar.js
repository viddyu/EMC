import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import BlueCross from "./bluecross.png";

const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <img src={BlueCross} style={{ height: '35px', width: '35px', marginRight: '10px' }} />
        <h5 style={{ marginTop: '5px' }}><i><b>Emergency Medical Communication (EMC)</b></i></h5>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                    <div className="navbar-item">
                        <Link to="/login" class="nav-link js-scroll-trigger" href="#login"><i><b>Login</b></i></Link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

);

export default Navbar;
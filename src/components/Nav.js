import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return (
        <>
            <nav>
                <img src="Logo.svg" alt="Little Lemon Logo"></img>
                <ul className="nav-container">
                    <li><Link to="/" id="nav-button">Home</Link></li>
                    <li><Link to="/about" id="nav-button">About</Link></li>
                    <li><Link to="/menu" id="nav-button">Menu</Link></li>
                    <li><Link to="/booking" id="nav-button">Reservations</Link></li>
                    <li><Link to="/order" id="nav-button">Order Online</Link></li>
                    <li><Link to="/login" id="nav-button">Login</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Nav;
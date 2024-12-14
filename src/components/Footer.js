import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <img src="Logo.svg" alt="Little Lemon Logo" id="littlelemon-logo"></img>
                <div className="about-list">
                    <h2>Navigation</h2>
                    <ul className="about-container">
                        <li><a href="./home.html">Home</a></li>
                        <li><a href="./About.html">About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
                <div className="about-list">
                    <h2>Contact Us</h2>
                    <ul className="about-container">
                        <li><a>Address</a></li>
                        <li><a>Phone Number</a></li>
                        <li><a>Email</a></li>
                    </ul>
                </div>
                <div className="about-list">
                    <h2>Social Media</h2>
                    <ul className="about-container">
                        <li><a>Social Link</a></li>
                        <li><a>Social Link</a></li>
                        <li><a>Social Link</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
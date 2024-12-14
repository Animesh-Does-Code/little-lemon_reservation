import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section id="Hero">
            <span className="hero-section">
                <article className="hero-section-text">
                    <h1 id="little-lemon-title">Little Lemon</h1>
                    <h4 id="location">Chicago</h4>
                    <p id="little-lemon-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to='/booking' id="reserve-button">Reserve a Table</Link>
                </article>
                <article className="hero-section-img">
                    <img src="./assets/restauranfood.jpg" id="food_large" alt="food"></img>
                </article>
            </span>
    </section>
    )
}

export default Hero;
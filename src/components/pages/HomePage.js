import React from "react";
import "./HomePage.css";
import CustomersSay from "../CustomersSay";
import Chicago from "../Chicago";
import Specials from "../Specials";
import Hero from "../Hero";

const HomePage = () => {
    return (
        <div className="homepage">
            <Hero />
            <Specials />
            <CustomersSay />
            <Chicago />
        </div>
    )
}

export default HomePage;
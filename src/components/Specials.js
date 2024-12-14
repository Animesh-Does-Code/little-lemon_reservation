import React from "react";

const Specials = () => {
    return (
        <section id="Specials">
            <div className="specials-header">
                <h1 id="specials-title">This week's specials!</h1>
                <a href="./onlineorder.html" id="menu-button">Online Menu</a>
            </div>
            <div className="item-container">
                <article className="item-card">
                    <img src="./assets/greek salad.jpg" alt="Greek Salad" className="item-image"></img>
                    <div className="item-price">
                        <h6 className="item-header">Greek Salad</h6>
                        <h6 id="price">$10.00</h6>
                    </div>
                    <p id="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="./onlineorder.html"><h6 className="item-header">Order a delivery 🛵</h6></a>
                </article>
                <article className="item-card">
                    <img src="./assets/bruchetta.svg" alt="Bruschetta" className="item-image"></img>
                    <div className="item-price">
                        <h6 className="item-header">Bruschetta</h6>
                        <h6 id="price">$5.00</h6>
                    </div>
                    <p id="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="./onlineorder.html"><h6 className="item-header">Order a delivery 🛵</h6></a>
                </article>
                <article className="item-card">
                    <img src="./assets/lemon dessert.jpg" alt="Lemon Dessert" className="item-image"></img>
                    <div className="item-price">
                        <h6 className="item-header">Lemon Dessert</h6>
                        <h6 id="price">$5.00</h6>
                    </div>
                    <p id="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="./onlineorder.html"><h6 className="item-header">Order a delivery 🛵</h6></a>
                </article>
            </div>
        </section>
    )
}

export default Specials;
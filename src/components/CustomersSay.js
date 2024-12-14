import React from "react";

const CustomersSay = () => {
    return (
        <section id="testimonials-section">
            <h4 id="testimonials">Testimonials</h4>
            <div className="reviews-container">
                <div className="review-card">
                    <h6>Rating</h6>
                    <div className="profile-name">
                        <img src="./assets/profile-icon.png" alt="profile" className="profile"></img>
                        <h6>Name</h6>
                </div>
                <p>Review Content</p>
                </div>
                <div className="review-card">
                    <h6>Rating</h6>
                    <div className="profile-name">
                        <img src="./assets/profile-icon.png" alt="profile icon" className="profile"></img>
                        <h6>Name</h6>
                    </div>
                <p>Review Content</p>
                </div>
                <div className="review-card">
                    <h6>Rating</h6>
                    <div className="profile-name">
                        <img src="./assets/profile-icon.png" alt="profile icon" className="profile"></img>
                        <h6>Name</h6>
                    </div>
                    <p>Review Content</p>
                </div>
                <div className="review-card">
                    <h6>Rating</h6>
                    <div className="profile-name">
                        <img src="./assets/profile-icon.png" alt="profile icon" className="profile"></img>
                        <h6>Name</h6>
                    </div>
                <p>Review Content</p>
                </div>
            </div>
        </section>
    )
}

export default CustomersSay;
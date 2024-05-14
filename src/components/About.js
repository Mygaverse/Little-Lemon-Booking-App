import React from 'react';
import "../components/styles/About.css";
import Logo from "../components/assets/logo.png";
import HeroImage from "../components/assets/gourmet.jpg"

const About = () => {
  return (
    <div className="about-background">
        <div className="about-container">
            <div className="about-left">
                <img src={ Logo } alt="Little Lemon logo" />
                <h1>About Us</h1>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
            </div>
            <div className="about-right">
                <div className="image-box">
                    <img src={HeroImage} alt="Serving delicious dish" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About

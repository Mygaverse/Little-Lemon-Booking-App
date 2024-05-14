import React from 'react';
import "../components/styles/HeroSection.css";
import { NavLink } from 'react-router-dom';


const HeroSection = () => {
  return (
    <div className="hero-section-background">
        <div className="hero-section-container">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection

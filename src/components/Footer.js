import React from 'react';
import logo from '../components/assets/favilogo.png';
import { Link } from 'react-router-dom';
import "../components/styles/Footer.css";

const Footer = () => {
  return (
    <footer>
        
            <div className="footer-container">
                <div className="footer-content">
                    <figure>
                        <img src={logo} alt="footer logo"></img>
                    </figure>
                    <article>
                        <h5>Quick Links</h5>
                        <ul className='footer-links'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Menu</Link></li>
                            <li><Link to="/reservations">Reservations</Link></li>
                            <li><Link to="#">Order Online</Link></li>
                            <li><Link to="#">Login</Link></li>
                            <li><Link to="#">Sign Up</Link></li>
                        </ul>
                    </article>
                    <article>
                        <h5>Contact</h5>
                        <ul>
                            <li>2148 W Chicago Ave, Chicago, IL</li>
                            <li>Tel: +17732767567</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </article>
                    <article>
                        <h5>Social Media</h5>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </article>
                    
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer

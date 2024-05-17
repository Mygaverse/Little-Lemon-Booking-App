import React from 'react';
import "./styles/ConfirmationPage.css";
import { Link } from 'react-router-dom';


function confirmation() {

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
                <h1>Your Reservation is Confirmed!</h1>
                <p>A confirmation message has been sent to your email.</p>
                <p>Thanks for dining with us!</p>
                <br/>
                <Link className="reserve-btn" to="/">Back to Homepage</Link>
            </div>
        </div>
    </div>
  )
}

export default confirmation;
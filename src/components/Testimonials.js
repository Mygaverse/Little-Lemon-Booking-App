import React from 'react'
import "../components/styles/Testimonials.css"
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-title">
            <h1>Testimonials</h1>
            <p>Checkout how our customers say about us!</p>
      </div>
      <TestimonialsCard />
    </div>
  )
}

export default Testimonials

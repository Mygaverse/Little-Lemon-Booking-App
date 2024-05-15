import React from 'react'
import "../components/styles/TestimonialsCard.css"
import User1 from "../components/assets/user1.png"
import User2 from "../components/assets/user2.png"
import User3 from "../components/assets/user3.png"
import User4 from "../components/assets/user4.png"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const TestimonialsCard = () => {
    const userFeedbacks = [
        {   
            image: User1,
            name: "Nicolas Case",
            rating: "8.5/10",
            description: "This is the best Mediterranean food that I've ever had!",
        },
        {
            image: User2,
            name: "Jessica Alta",
            rating: "9.0/10",
            description: "I really loved the cozy vibes and delicious food here.",
        },
        {
            image: User3,
            name: "Christian Wale",
            rating: "9.5/10",
            description: "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
        },
        {
            image: User4,
            name: "Lucy Liu",
            rating: "9.0/10",
            description: "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.",
        }
    ]

    const userFeedbacksItems = userFeedbacks.map(feedback => {
            const image = feedback.image;
            const name = feedback.name;
            const rating = feedback.rating;
            const description = feedback.description;
            
            return (
                <section>
                    <div className="testimonial-card-container">
                        <div className="testimonial-card-user">
                            <img src={image} alt="User Avatar" />
                            <h3>{name}</h3>
                        </div>
                        <h3 className="rating">{rating}</h3>
                        <div className='testimonial-card-quote'>
                            <FaQuoteLeft color='gray' size={16}/>
                            <p>{description}</p>
                            <FaQuoteRight color='gray' size={16}/>
                        </div>
                    </div>
                </section>
            )
    })


  return (
    <div>
      <div className="testimonial-card">
        {userFeedbacksItems}
      </div>
    </div>
  )
}

export default TestimonialsCard

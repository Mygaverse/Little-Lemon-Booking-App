import React from 'react';
import "./styles/ReservationsContent.css";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../bookingsAPI';


const schema = yup.object({
    name: yup.string().required("Full name is a required field!"),
    email: yup.string().required("Email is a required field!").email("Email is not valid!"),
    telephone: yup.string().required("Telephone is a required field!").matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, "Phone number must match the form (773) 456 7890 or 773 456 7890"),
    guests: yup.number().min(1, "There must be at least 1 guest!").required("Please specify number of guests per table!"),
    date: yup.string().required("Please select date!"),
    time: yup.string().required("Please select time!"),
})

const Form = (props) => {

    const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submitForm = async (data) => {
        try {
            // 1. Perform form submission logic (e.g., send data to API)
          const isSubmitted = await submitAPI(data); // Your submission function

          if (isSubmitted) {
            // 2. Redirect on successful submission
            navigate("/confirmation");
          } else {
            // Handle submission failure (e.g., display an error)
            alert(JSON.stringify(data));
          }
        } catch (error) {
          // Handle errors during submission (e.g., network issues)
          alert('Something goes wrong!');
        }
      };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder="John Doe" name="name" {...register("name")} />
                    <span className="error-message">{errors.name?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="text@email.com" name="email" {...register("email")}/>
                    <span className="error-message">{errors.email?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="telephone">Telephone</label>
                    <input type="tel" placeholder="773-456-7890" name="telephone" {...register("telephone")}/>
                    <span className="error-message">{errors.telephone?.message}</span>
                </div>

                {/*<div className="guestsdate">*/}

                <div className="field">
                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" placeholder="2" name="guests" {...register("guests")}/>
                    <span className="error-message">{errors.guests?.message}</span>
                </div>
                {/*</div>*/}

                <div className="field">
                    <label htmlFor="date">Select the Date</label>
                    <input type="date" name="date" {...register("date")} />
                    <span className="error-message">{errors.date?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="time">Select the Time</label>
                    <div className="options">
                        <select name="time" {...register("time")}>
                            <option selected disabled>Select the Time</option>
                            {props.availableTimes.map((times) =>
                                <option key={times}>{times}</option>
                            )}
                        </select>
                    </div>
                    <span className="error-message">{errors.time?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="occasion">Occasion (optional)</label>
                    <div className="options">
                        <select name="occasion">
                            <option selected disabled>Select occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                </div>
                <button className="reserve-btn" type="submit">Reserve</button>
            </fieldset>
        </form>
  )
}

export default Form;
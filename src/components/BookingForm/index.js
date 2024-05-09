import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Consider if validation is needed
import './styles.css';

const BookingForm = () => {
 const formik = useFormik({
     // ... Your formik configuration
 });

 return (
   <form onSubmit={formik.handleSubmit}>
     {/* Your form fields here */}
   </form>
 );
};

export default BookingForm;

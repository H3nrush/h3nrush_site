import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formData.email;
    if(email){
      const isValidEmail = (email) => {
        // Regular expression for validating email addresses
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
    }

    emailjs.sendForm('h3nrush', 'template_960l8cc', e.target, 'X3YYBqfxURBLJ_Mw2')
      .then((result) => {
        alert('Your message has been sent successfully! i will contact you as soon if your email address is correct :)');
        // Optionally, reset the form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <form onSubmit={handleSubmit} id='mail-form'>
      <div><label>Your Name:</label></div>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required className='input-send-mail'/>

      <div><label>Your Email:</label></div>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required className='input-send-mail'/>

      <div><label>Subject:</label></div>
      <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className='input-send-mail'/>

      <div><label>Message:</label></div>
      <textarea name="message" value={formData.message} onChange={handleChange} required className='textarea-send-mail' placeholder='please dont forgot to send your phone number :)'/>

      <button type="submit" className='mail-submit'>Send Email</button>
    </form>
  );
};

export default EmailForm;

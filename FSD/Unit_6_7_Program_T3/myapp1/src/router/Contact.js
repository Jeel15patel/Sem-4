import React from 'react';

function ContactPage(){
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, please fill out the form below.</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default ContactPage;

import React, { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow p-4 w-75 maxWidth 1200px">
        <h3 className="mb-4">Contact Me</h3>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address:</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              name="message"
              rows="5"
              value={formState.message}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </section>
  );
};
  
  export default ContactForm;



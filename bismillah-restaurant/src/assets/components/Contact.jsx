import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Have questions or want to plan your next adventure? Send us a message!
        </p>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <h3>Contact Info</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Paradise Rd, Bali, Indonesia</p>
            <p><i className="fas fa-phone"></i> +62 812 3456 7890</p>
            <p><i className="fas fa-envelope"></i> info@travelworld.com</p>

            <div className="contact-socials">
              <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

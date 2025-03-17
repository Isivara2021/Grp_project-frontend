import React from "react";
import "../styles/ContactUs.css"; 

import generalEnquiriesImage from "../images/GeneralEnquiries.jpg";
import CallUsImage from "../images/CallUs.png";
import OfficeAddressImage from "../images/OfficeAddress.png";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>

      {/* Form Section */}
      <form className="contact-form">
        <div className="input-row">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
        </div>
        <textarea placeholder="Message" className="message-field"></textarea>
        
      </form>
      {/* Reusable Button Component */}
        <div className="send-button-container">
          <button type="submit" className="send-button">Send</button>
        </div>

      {/* Contact Details */}
      <div className="contact-section">
        <div className="contact-item">
          <img src={generalEnquiriesImage} alt="General Enquiries" className="img"/>
          <div>
            <p>General Enquiries</p>
            <a href="mailto:sample@gmail.com" className="contact-link">sample@gmail.com</a>
          </div>
        </div>
        <div className="contact-item">
          <img src={CallUsImage} alt="Call Us" className="icon" />
          <div>
            <p>Call Us</p>
            <a href="tel:+94123456789" className="contact-link">+94 123456789</a>
          </div>
        </div>
        <div className="contact-item">
          <img src={OfficeAddressImage} alt="Office Address" className="icon" />
          <div>
            <p>Office Address</p>
            <p>Sample address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

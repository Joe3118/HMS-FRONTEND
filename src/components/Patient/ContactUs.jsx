import React, { useState } from "react";
import Navbar from "../Shared/Navbar";
import "./ContactUs.css"; 
import Footer from "./Footer";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNo] = useState("");
  const [message, setComment] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNo("");
    setComment("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
  
    const phonePattern  = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
  
 
  
    if (!message.trim()) {
      alert("Please enter a reason for the appointment.");
      return;
    }
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

  
    alert("Your response has been submitted");
    resetForm();
  };

  return (
    <div className="contact-us-section">
      <Navbar />
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info hidden-md">
            <span className="location-title">Locate Us</span>
            <br />
            <span className="location-subtitle">
              HMS COIMBATORE - India
            </span>
            <span className="location-details">
              HMS, Gandhipuram, Coimbatore, Tamil Nadu - India
            </span>
            <br />
            <div className="contact-details">
              <div>
                <span>Telephone</span>
                <span>9894377687</span>
              </div>
              <div>
                <span>Emergency</span>
                <span>+91 8925354207</span>
              </div>
            </div>
            <br />
            <div className="email">
              <span>Email:</span>
              <span>joerovan3118@gmail.com</span>
            </div>
          </div>

          <div className="contact-form">
            <span>Get in touch</span>
            <input
              type="text"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone / Mobile *"
              value={phone}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message *"
              value={message}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUs;
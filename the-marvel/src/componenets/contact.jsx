import React, { useState } from "react";
import "../componenets/contact.css"; 
import logo from "../assets/Logo4.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedln.webp";

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");

  const services = [
    "Apartment Tour",
    "Floor Plan Discussion",
    "Price Inquiry",
    "2BHK/3BHK Model Visit",
    "Booking Assistance",
  ];

  // Replace this with your Google Form's "entry" ID for the service field
  const googleFormServiceEntry = "entry.6";

  const handleNext = () => {
    if (!selectedService) {
      alert("Please select a service first.");
      return;
    }

    // Construct pre-filled Google Form URL
    const googleFormBaseURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdeqjNp3sx4Guo856Sm3tfoj-iCNczGtZu0UHcfbIAckf4kBA/viewform?usp=header";

    const preFilledURL = `${googleFormBaseURL}?${googleFormServiceEntry}=${encodeURIComponent(
      selectedService
    )}`;

    // Redirect user to Google Form
    window.location.href = preFilledURL;
  };

  return (
    <div className="contact-page">
      <div className="top1bar">
        <div className="logo"><img src={logo} alt="Logo" /></div>
        <h1>Booking Details</h1>
        <div className="nav">
          <a href="/">Home</a>
          <a href="/information">Information</a>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <h1>Book Your Appointment</h1>
          <p className="sub-text">
            Schedule a personalized visit to Marvel Apartments. Choose a service below to begin.
          </p>
          <div className="grid">
            {services.map((service) => (
              <div
                key={service}
                className={`service-btn ${selectedService === service ? "active" : ""}`}
                onClick={() => setSelectedService(service)}
              >
                {service}
              </div>
            ))}
          </div>
          <div className="buttons">
              <button
              type="button"
              className="btn btn-back"
              onClick={() => (window.location.href = "/")}
            >
              Back
            </button>
            <button className="btn btn-next" onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>

      <footer className="site-footer1">
        <div className="footer-container1">
          <div className="footer-about1">
            <img src={logo} alt="logo" className="footer-logo small-img" />
            <p>Marvel Apartments — Building with excellence since 2016.</p>
          </div>
          <div className="footer-links1">
            <h4>Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/information">Information</a></li>
            </ul>
          </div>
          <div className="footer-social1">
            <h4>Follow Us</h4>
            <div className="social-icons1">
           <a href="/"><img src={facebook} alt="Facebook" /></a>
           <a href="/"><img src={twitter} alt="Twitter" /></a>
           <a href="/"><img src={instagram} alt="Instagram" /></a>
           <a href="/"><img src={linkedin} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom1">
          <p>© 2025 Marvel Apartments.</p>
        </div>
      </footer>
    </div>
  );
}

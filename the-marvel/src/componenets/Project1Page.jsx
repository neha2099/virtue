import React, { useState } from "react";
import "./Project1Page.css"; // import the CSS

import projectBanner from "../assets/bg.avif";
import floorplan1 from "../assets/floorplan1.png";
import amenityImg1 from "../assets/kids play area.webp";
import amenityImg2 from "../assets/cctv.jpg";
import amenityImg3 from "../assets/ev charging.webp";
import amenityImg4 from "../assets/gym.jpg";
import amenityImg5 from "../assets/car parking.png";

const services = [
  "Apartment Tour",
  "Floor Plan Discussion",
  "Price Inquiry",
  "2BHK/3BHK Model Visit",
  "Booking Assistance",
];

const googleFormServiceEntry = "entry.6";

export default function Project1Page() {
  // ✅ Add state to track selected service
  const [selectedService, setSelectedService] = useState("");

  const handleNext = () => {
    if (!selectedService) {
      alert("Please select a service first.");
      return;
    }

    const googleFormBaseURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdeqjNp3sx4Guo856Sm3tfoj-iCNczGtZu0UHcfbIAckf4kBA/viewform?usp=header";

    const preFilledURL = `${googleFormBaseURL}?${googleFormServiceEntry}=${encodeURIComponent(
      selectedService
    )}`;

    window.location.href = preFilledURL;
  };

  return (
    <div className="project1-page">
      {/* Banner / Hero */}
      <section className="project1-hero">
        <img src={projectBanner} alt="Project 1 Banner" className="hero-img" />
        <div className="hero-overlay">
          <h1>Luxury Flats</h1>
          <p>Premium apartments crafted with elegance, connectivity & modern amenities.</p>
        </div>
      </section>

      {/* Key Info / Highlights */}
      <section className="project1-highlights">
        <div className="highlight">
          <h2>Location</h2>
          <p>Strategically located in Chennai & Bangalore with excellent connectivity.</p>
        </div>
        <div className="highlight">
          <h2>Configurations</h2>
          <p>2‑BHK, 3‑BHK and 4‑BHK premium flats.</p>
        </div>
        <div className="highlight">
          <h2>Amenities</h2>
          <p>EV Charging · Car Parking · Green Spaces · Gym & more.</p>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="project1-floorplans">
        <h2>Floor Plans</h2>
        <div className="floorplan-grid">
          <div className="floorplan-card">
            <img src={floorplan1} alt="Floorplan 1" />
            <p>Type A – 2 BHK</p>
          </div>
        </div>
      </section>

      {/* Amenities */}
<section className="project1-amenities">
  <h2>Amenities</h2>

  <div className="amenities-grid">
    
    <div className="amenity-card">
      <img src={amenityImg1} alt="Kids play area" />
      <p>Kids play area</p>
    </div>

    <div className="amenity-card">
      <img src={amenityImg2} alt="CCTV" />
      <p>CCTV</p>
    </div>

    <div className="amenity-card">
      <img src={amenityImg3} alt="EV Charging" />
      <p>EV Charging</p>
    </div>

    <div className="amenity-card">
      <img src={amenityImg4} alt="Gym" />
      <p>Gym</p>
    </div>

    <div className="amenity-card">
      <img src={amenityImg5} alt="Car Parking" />
      <p>Car Parking</p>
    </div>

  </div>
</section>


      {/* Contact / Enquire */}
      <section className="project1-enquire">
        <h2>Enquire Now</h2>
        <form
          className="enquire-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
        >
          <div className="service-options">
            {services.map((service) => (
              <label key={service}>
                <input
                  type="radio"
                  name="service"
                  value={service}
                  checked={selectedService === service}
                  onChange={(e) => setSelectedService(e.target.value)}
                />
                {service}
              </label>
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
            <button type="submit" className="btn btn-next">
              Next
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

import React from "react";
import "./Project2Page.css"; 

import projectBanner from "../assets/The Marvel.png";
import amenity2Img1 from "../assets/bricks1.webp";
import construction1 from "../assets/construction1.jpeg";
import amenity2Img2 from "../assets/cement1.png";
import amenity2Img3 from "../assets/maufacturing1.jpg";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedln.webp";
import logo4 from "../assets/Logo4.png";
import amenity3Img4 from "../assets/steel1.webp";

export default function Project2Page() {

  return (
    <div className="project2-page">
      {/* Banner */}
      <section className="project2-hero">
        <img src={projectBanner} alt="Project 2 Banner" className="hero-img" />
        <div className="hero-overlay">
          <h1>Construction And Manufacturing</h1>
          <p>Premium apartments crafted with elegance, connectivity & modern amenities.</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="project2-highlights">
        <div className="highlight">
          <h2>Glazing and Metal Works</h2>
          <p>Glazing and Metal Works has technical expertise and markets Aluminum Doors, Window & glazing systems across the country...</p>
        </div>

        <div className="highlight">
          <h2>Configurations</h2>
          <p>Building Materials, Construction method</p>
        </div>

        <div className="highlight">
          <h2>Materials</h2>
          <p>Bricks, Metals, Construction.</p>
        </div>
      </section>

      {/* Construction */}
      <section className="project2-construction">
        <h2>Construction</h2>
        <div className="construction-grid">
          <div className="construction-card">
            <img src={construction1} alt="construction 1" />
            <p>
              This vertical integration allows the company to deliver projects from conceptualization to completion...
            </p>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="project2-amenities">
        <h2>Glazing and Metal Works</h2>

        <div className="amenities2-grid">
          <div className="amenity2-card">
            <img src={amenity2Img1} alt="Bricks" />
            <p>Bricks</p>
          </div>

          <div className="amenity2-card">
            <img src={amenity2Img2} alt="cement" />
            <p>Cement</p>
          </div>

          <div className="amenity2-card">
            <img src={amenity2Img3} alt="Manufacturing" />
            <p>Manufacturing</p>
          </div>
               <div className="amenity2-card">
            <img src={amenity3Img4} alt="steel" />
            <p>Steel</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer1">
        <div className="footer1-grid">
          <div className="footer1-about">
            <img src={logo4} alt="Marvel Logo" />
            <p>
              Marvel Apartments by STELLAR & VIRTUE DEVELOPERS...
            </p>
          </div>

          <div className="footer1-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/information">Information</a></li>
            </ul>
          </div>

          <div className="footer1-contact">
            <h4>Contact Us</h4>
            <p>Email: info@marvelapartments.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          <div className="footer1-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
           <a href="/"><img src={facebook} alt="Facebook" /></a>
           <a href="/"><img src={twitter} alt="Twitter" /></a>
           <a href="/"><img src={instagram} alt="Instagram" /></a>
           <a href="/"><img src={linkedin} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>

        <p className="footer1-bottom">&copy; 2025 Marvel Apartments. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

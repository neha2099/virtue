import React from "react";
import "./information.css";

import logo from "../assets/Logo4.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedln.webp";

export default function Information() {
  return (
    <div className="info-page">
      {/* TOPBAR */}
      <div className="topbar">
        <div className="logo">
          <img src={logo} alt="The Marvel Logo" />
        </div>
        <div className="nav">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      {/* ABOUT / BROCHURE SECTION */}
      <section className="about-section">
        <div className="bg-img"></div>

        <div className="content2">
          <h1>Virtue & Stellar Developers</h1>

          <p>
            Since 2016, we have crafted homes that seamlessly blend luxury, 
            innovation, and comfort. Every project is designed with modern 
            architecture, premium materials, and thoughtful amenities that 
            enhance everyday living.
          </p>

          <h2>Signature Features</h2>

          <ul>
            <li>30 Ultra-Premium Apartments</li>
            <li>60,000 sq. ft. developed on 22,000 sq. ft. land</li>
            <li>Floor-to-ceiling windows for natural lighting</li>
            <li>High-quality mosquito-screened windows</li>
            <li>Smart fingerprint locks for every home</li>
            <li>EV charging points for sustainable living</li>
          </ul>

     <button
  className="btn-primary"
  onClick={() => {
    window.open(process.env.PUBLIC_URL + "/Brochure.pdf", "_blank");
  }}
>
  Download Brochure
</button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-box">
            <h3>Virtue & Stellar Developers</h3>
            <p>Building premium homes with elegance, innovation, and trust since 2016.</p>
          </div>

          <div className="footer-box">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-box">
            <h4>Contact</h4>
            <p>📍 Location: Manapakkam</p>
            <p>📞 Phone: +91 00000 00000</p>
            <p>📧 Email: info@virtueandstellar.com</p>
          </div>

          <div className="footer-box">
            <h4>Follow Us</h4>
            <div className="footer-social-icons">
              <a href="/"><img src={facebook} alt="Facebook" /></a>
              <a href="/"><img src={twitter} alt="Twitter" /></a>
              <a href="/"><img src={instagram} alt="Instagram" /></a>
              <a href="/"><img src={linkedin} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Virtue & Stellar Developers — All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

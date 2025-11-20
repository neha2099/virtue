import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../componenets/home.css";

// Pages (these imports stay for possible internal components usage)
// import Project1Page from "../components/Project1Page";
// import Project2Page from "../components/Project2Page";
// import Contact from "../components/contact";
// import Information from "../components/information";

// Images
import logo4 from "../assets/Logo4.png";
import buildingImg from "../assets/building.png";
import commercialImg from "../assets/commercial.png";
import frontImg from "../assets/Front.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedln.webp";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const mailtoLink = `mailto:info@marvelapartments.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      formData.message
    )}%0A%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;

    setSuccess("Your message is ready to send via your email app!");
    setFormData({ name: "", email: "", message: "" });
  };
    const [selectedPage, setSelectedPage] = useState(""); // Track selected option
  const navigate = useNavigate(); // For programmatic navigation

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedPage) {
      navigate(selectedPage); // Navigate to selected page
    }
  };
  return (
    <div className="home-page">
      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <img src={logo4} alt=" Logo" />
        </div>
        <div className="header-center">
          <h1>VIRTUE DEVELOPERS</h1>
        </div>
        <nav className={`header-nav-dropdown ${showMenu ? "open" : ""}`}>
          <div className="dropdown-toggle" onClick={() => setShowMenu(!showMenu)}>
            Menu
          </div>
          {showMenu && (
            <div className="dropdown-menu">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/information">Information</Link>
            </div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to Marvel Apartments</h1>
          {/* <p className="subtitle">STELLAR & VIRTUE DEVELOPERS</p> */}
          <p>
            At Marvel Apartments, we blend modern architecture with timeless
            elegance. Each home is designed for comfort, style, and
            sustainability.
          </p>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>

      {/* ABOUT / COMPANY */}
      <section className="about-section1">
        <h2>Building with Integrity Since 2016</h2>
        <p>
          Our journey began in 2016 with one simple vision — to build quality
          homes with integrity. Over the years, we expanded into commercial
          spaces, marking a significant milestone in our evolution.
        </p>
        <p>
          Our dedication to excellence, trust, and craftsmanship remains at the
          heart of everything we do.
        </p>
      </section>

      {/* PROJECT GALLERY */}
      <section className="projects-section">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={buildingImg} alt="Luxury Apartments" />
            <div className="project-info">
              <h3>Luxury Apartments</h3>
              <p>
                Spacious 2BHK & 3BHK residences with panoramic views and
                designer interiors.
              </p>
              <Link to="/Contact" className="btn-secondary">Explore More</Link>
            </div>
          </div>
          <div className="project-card">
            <img src={commercialImg} alt="Commercial Complex" />
            <div className="project-info">
              <h3>Commercial Complex</h3>
              <p>
                Premium retail and office spaces with world-class design and
                accessibility.
              </p>
              <Link to="/Contact" className="btn-secondary">Explore More</Link>
            </div>
          </div>
          <div className="project-card">
            <img src={frontImg} alt="Residential Block" />
            <div className="project-info">
              <h3>Residential Block</h3>
              <p>
                Elegant homes with smart layouts, green spaces, high ceilings,
                and modern facilities.
              </p>
              <Link to="/Contact" className="btn-secondary">Explore More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="locations-box">
        <h2>LOCATIONS</h2>
        <p>
          We handpick locations that offer seamless connectivity, unmatched return on investments,
          in a neighborhood that is truly one-of-a-kind.
        </p>
        <h3>SEARCH PROPERTIES</h3>
        <form onSubmit={handleSearch}>
          <select>
            <option value="">Select City</option>
            <option value="city1">Chennai</option>
            <option value="city2">Manapakkam</option>
            <option value="city3">Kanchipuram</option>
            <option value="city4">Coimbatore</option>
            <option value="city5">Thiruvallur</option>
            <option value="city6">Madhurai</option>
            <option value="city7">ECR</option>
            <option value="city8">Ramapuram</option>
            <option value="city9">Perambakkum</option>
            <option value="city10">Manapakkam</option>
          </select>
          <select value={selectedPage}
        onChange={(e) => setSelectedPage(e.target.value)}>
            <option value="">Select Type</option>
            <option value="/Project1Page">Property Details</option>
            <option value="/Project2Page">Manufacturing & Construction</option>
          </select>
           <button type="submit" className="btn-primary">Search</button>
        </form>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-section1">
        {success && <p className="success-msg">{success}</p>}
        <h2>Contact Us</h2>
        <form className="contact-form1" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
          <textarea
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer1">
        <div className="footer1-grid">
          <div className="footer1-about">
            <img src={logo4} alt="Marvel Logo" />
            <p>
              Marvel Apartments by STELLAR & VIRTUE DEVELOPERS. Building quality
              homes & commercial spaces with integrity, style & excellence since
              2016.
            </p>
          </div>
          <div className="footer1-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/information">Information</Link></li>
            </ul>
          </div>
          <div className="footer1-contact">
            <h4>Contact Us</h4>
            <p>Email: info@marvelapartments.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Marvel Street, City, Country</p>
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

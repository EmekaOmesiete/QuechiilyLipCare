import { useState } from "react";
import "../components/AboutStyle.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const About = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="about-container">
      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            QueChilly was created with one mission 
            <strong>
              {" "}
              to give lips the moisture, protection, and natural glow they truly
              deserve.
            </strong>
            We noticed many lip products were either too oily, too heavy, or
            lacked nourishing ingredients.
          </p>
          <p>
            QueChilly blends hydrating butters, lightweight natural oils, and
            cooling plant extracts to create lip balms that refresh, restore
            softness, and keep your lips healthy all day.
          </p>
        </div>

        <div className="about-section">
          <h2>What Makes Us Different?</h2>
          <ul className="features-list">
            <li>
              <strong>All-Natural Ingredients:</strong> safe, gentle, and
              effective.
            </li>
            <li>
              <strong>Long-lasting Hydration:</strong> keeps lips soft for
              hours.
            </li>
            <li>
              <strong>Cooling Refreshing Effect:</strong> our signature “chill”.
            </li>
            <li>
              <strong>No Parabens or Harsh Chemicals</strong>
            </li>
            <li>
              <strong>Perfect for Everyday Use:</strong> smooth, lightweight,
              pocket-friendly.
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple:
            <strong>
              {" "}
              to make lip care enjoyable, natural, and effective for everyone.
            </strong>
            Your lips deserve quality and we deliver it with every swipe.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            We aim for QueChilly to become the leading lip balm brand in Africa
            and beyond known for premium ingredients, modern packaging, and
            cooling hydration that stands out.
          </p>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Experience QueChilly?</h2>
        <p>
          Treat your lips to natural softness, protection, and refreshing chill.
        </p>
         <button onClick={() => setShowPopup(true)}>Order Now</button>
      </section>
            {showPopup && (
        <div className="order-popup-overlay" onClick={() => setShowPopup(false)}>
          <div
            className="order-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            <h3>Order via</h3>

            <div className="order-icons">
              
              <a
                href="https://instagram.com/quechilly"
                target="_blank"
                rel="noopener noreferrer"
                className="order-icon instagram"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
              
              <a
                href="https://wa.me/2348168183525?text=Hi%20👋🏽%20I’d%20like%20to%20place%20an%20order%20for%20QueChilly%20lip%20care%20products.%20Please%20share%20details.%20Thank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="order-icon whatsapp"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

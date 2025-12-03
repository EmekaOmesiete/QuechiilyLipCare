import "../components/AboutStyle.css";

const About = () => {
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
        <button>Shop Now</button>
      </section>
    </div>
  );
};

export default About;

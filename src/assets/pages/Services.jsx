import React from "react";
import "../components/ServiceStyle.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-intro">
        At <strong>QueChilly Essentials</strong>, we are dedicated to offering
        premium lip-care products crafted to nourish, protect, and enhance
        your natural beauty. Each product is formulated with quality
        ingredients designed to keep your lips soft, hydrated, and glowing.
      </p>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-inner">
            <h2>Lip Gloss</h2>
            <p>
              Our moisturizing lip glosses deliver a glossy shine with rich
              textures and beautiful colors like Khara Glow, Wine & Whisper,
              Innocence, and more.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-inner">
            <h2>Lip Balm</h2>
            <p>
              Hydrating and soothing balms perfect for daily lip care. Choose
              from Strawberry, Innocence, Mide Pink, and more.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-inner">
            <h2>Lip Scrub</h2>
            <p>
              Gently exfoliating scrubs that remove dead skin to reveal soft,
              smooth lips. Available in Purple Soft Scrub and Green Soft Scrub.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-inner">
            <h2>Lip Liner</h2>
            <p>
              Smooth, long-lasting liners that shape and define your lips
              effortlessly. Comes in Brown and Black for flawless lip combos.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-inner">
            <h2>Lip Mask</h2>
            <p>
              A deep repair treatment mask designed to revive dry or chapped
              lips overnight for smooth, hydrated results.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-inner">
            <h2>Lip Oil</h2>
            <p>
              Lightweight, moisturizing lip oils that deliver glossy shine and
              hydration all day long.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;

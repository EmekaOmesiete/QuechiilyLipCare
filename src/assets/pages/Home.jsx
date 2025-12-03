import React from "react";
import { NavLink } from "react-router-dom";
import { IoSparklesSharp } from "react-icons/io5";
import { GiLipstick } from "react-icons/gi";
import "../components/HomeStyle.css";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__title"> <IoSparklesSharp /> The A&amp;I Lipstache <IoSparklesSharp /></h1>
      
      <p className="home__description">
        <GiLipstick /> <strong>Welcome to Quechilly Brand Essentials</strong>, your one-stop destination for
        radiant, nourished lips. Our <strong>Lip Care Kit</strong> is thoughtfully
        crafted to bring out your natural beauty while keeping your lips soft,
        hydrated, and irresistibly smooth.
      </p>

      <p className="home__description">
        <IoSparklesSharp /> Introducing <strong>The A&amp;I Lipstache</strong>, a perfect blend of
        style and care. From glossy shines to deep hydration, each product is
        designed to pamper and protect. Explore our range:
       <strong> <em> Lip Gloss, Lip Balm, Lip Liner, Lip Scrub, Lip Oil,</em></strong> and
        <strong><em> Lip Mask</em></strong>, everything you need to keep your lips looking and
        feeling their best.
      </p>

      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "active home__btn" : "home__btn")}
      >
        View Products
      </NavLink>
    </section>
  );
};

export default Home;

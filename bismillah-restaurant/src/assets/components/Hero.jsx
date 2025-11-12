import React from "react";
import "./Hero.css"; // optional, if you have styles

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover the World’s Beauty</h1>
        <p className="hero-subtitle">
          Explore breathtaking destinations and unforgettable experiences.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div class="about-page-container">
      <img
        src="https://images.unsplash.com/photo-1681276159290-29989388a728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        class="about-hero-image"
      />
      <div class="about-page-content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div class="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <a class="link-button" href="/vans">
          Explore our vans
        </a>
      </div>
    </div>
  );
}
export default About;

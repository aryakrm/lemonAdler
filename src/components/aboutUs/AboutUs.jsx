import React from "react";
import "./AboutUs.scss";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div className="AboutUs">
      <motion.div
        initial={{ x: "-100vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="about-left"
      >
        <h1>Who are We?</h1>
        <p>
          LemonAdler Architecture is a premier provider of innovative and
          functional design solutions for buildings, interiors, and other
          structures. Our team of experienced architects and designers use the
          latest technology and software to create detailed plans, renderings,
          and animations that bring our clients' visions to life. We specialize
          in sustainable design, urban planning, and heritage conservation,
          ensuring that our projects not only meet the needs of our clients but
          also have a positive impact on the environment and community.
        </p>
        <img
          className="logo"
          src="https://i.ibb.co/H7DtFmb/1.png"
          alt="LemonAdler-9 Logo"
        />
      </motion.div>
      <motion.div
        initial={{ x: "100vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="about-right"
      >
        <img
          src="https://i.ibb.co/BgtGKsY/2023-01-16-16-57-56.jpg"
          alt="LemonAdler"
        />
      </motion.div>
    </div>
  );
}

export default AboutUs;

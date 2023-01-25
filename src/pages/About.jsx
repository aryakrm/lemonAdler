import React from "react";
import AboutUs from "../components/aboutUs/AboutUs";
import Navbar from "../components/navBar/Navbar";
import "./About.scss";

function About() {
  return (
    <div className="About">
      <Navbar />
      <AboutUs />
    </div>
  );
}

export default About;

import React from "react";
import "./Slide.scss";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import slideImages from "../../store/initSlide";

function Slide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "fade", duration: "2" }}
      className="Slide"
    >
      <Carousel autoplay className="Slide">
        <div>
          <img src={slideImages[0].src} alt="First Slide" />
        </div>
        <div>
          <img src={slideImages[1].src} alt="Second Slide" />
        </div>
        <div>
          <img src={slideImages[2].src} alt="Third Slide" />
        </div>
        <div>
          <img src={slideImages[3].src} alt="Fourth Slide" />
        </div>
      </Carousel>
    </motion.div>
  );
}

export default Slide;

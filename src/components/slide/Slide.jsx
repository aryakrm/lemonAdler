import React from "react";
import "./Slide.scss";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import imageData from "../../store/initImages";

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
          <img
            src={imageData[imageData.length - 1].src}
            alt={imageData[imageData.length - 1].alt}
          />
        </div>
        <div>
          <img
            src={imageData[imageData.length - 2].src}
            alt={imageData[imageData.length - 2].alt}
          />
        </div>
        <div>
          <img
            src={imageData[imageData.length - 3].src}
            alt={imageData[imageData.length - 3].alt}
          />
        </div>
        <div>
          <img
            src={imageData[imageData.length - 5].src}
            alt={imageData[imageData.length - 5].alt}
          />
        </div>
      </Carousel>
    </motion.div>
  );
}

export default Slide;

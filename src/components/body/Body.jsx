import React from "react";
import Card from "../card/Card";
import "./Body.scss";
import imageData from "../../store/initImages";
import { motion } from "framer-motion";

function Body() {
  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ type: "twin", duration: "1" }}
      className="Body"
    >
      {imageData.map(({ id, src, alt }) => {
        return <Card key={id} src={src} alt={alt} />;
      })}
    </motion.div>
  );
}

export default Body;

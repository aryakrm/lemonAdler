import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Intro() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade pause="false">
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="/assets/5.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="/assets/1.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="/assets/2.jpg" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="/assets/3.jpg" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="/assets/4.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Intro;

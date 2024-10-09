import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container text-center m-5">
      <h2 className="fs-2">Learn More</h2>
      <p className="fs-5">
        Ready to take your coding skills to the next level? Learn more about our
        comprehensive programs and join us today!
      </p>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/images/7.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Master the Skills of Tomorrow, Today!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/images/8.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>From Beginner to Pro, We've Got You Covered!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/images/9.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Learn, Code, Succeed with Us!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;

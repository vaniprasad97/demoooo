import React from "react";
import { Carousel } from "react-bootstrap";
import samsungimage from "images/samsungimage.jpg";
import redmiimage from "images/redmiimage.jpg";
import realme from "images/realme.webp"

export default function BootstrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 300, width: 1350 }}
            src={redmiimage}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 300, width: 1350 }}
            src={samsungimage} alt="BigCo Inc"
                        
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 300, width: 1350 }}
            src={realme}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

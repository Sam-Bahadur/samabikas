import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../assets/images/hero1.jpg";
import "./Carousel.scss";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true
  };
  return (
    <div
      className="my-8 cursor-grab h-4/5 md:h-screen"
      style={{ zIndex: "-1" }}
    >
      <Slider {...settings}>
        <div className="relative">
          <img className="h-4/6 md:h-screen w-screen object-cover" src={img} />
          <h1 className="absolute bottom-2 left-1/2 carousel_text font-bold md:text-4xl text-mainblue">
            first caption
          </h1>
        </div>
        <div className="relative">
          <img className="h-4/6 md:h-screen w-screen object-cover" src={img} />
          <h1 className="absolute bottom-2 left-1/2 carousel_text font-bold md:text-4xl text-mainblue">
            second caption
          </h1>
        </div>
      </Slider>
    </div>
  );
}

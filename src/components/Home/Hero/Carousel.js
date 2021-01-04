import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../assets/images/hero1.jpg"
 
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 
  };
  return (
      <div className="my-8">
    <Slider {...settings}>
      <div>
        <img src={img} />
      </div>
      <div>
      <img src={img} />
      </div>
    </Slider>
      </div>
  );
}
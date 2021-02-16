import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from "../../../assets/images/banner/Adolescent girls participating in Gender and Leadership Training.jpg";
import car2 from "../../../assets/images/banner/car2.jpg";
import car3 from "../../../assets/images/banner/Mastamandu decleared as Chhaupadi Free Area .JPG";
import car4 from "../../../assets/images/banner/SAMABIKAS Nepal awarded by With and For Girls in London on March 2020.jpg";
import car5 from "../../../assets/images/banner/Sheetal B.K. from Budakot Achham receiving Award from With and For Girls in London on March 2020.jpg";
import car6 from "../../../assets/images/banner/Young women in gender and leadership training.jpg";
import "./Carousel.scss";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div
      className="my-8 cursor-grab h-4/5 md:h-screen"
      style={{ zIndex: "-1" }}
    >
      <Slider {...settings}>
        <div className="relative">
          <img className="h-4/6 md:h-screen w-screen object-cover" src={car1} />
          <h1 className="absolute bottom-2 left-1/2 carousel_text font-bold md:text-4xl text-white">
            Adolescent girls participating in Gender and Leadership Training
          </h1>
        </div>
        <div className="relative">
          <img className="h-4/6 md:h-screen w-screen object-cover" src={car2} />
          <h1 className="absolute bottom-2 left-1/2 carousel_text font-bold md:text-4xl text-white">
            Gender and Leadership Training
          </h1>
        </div>
        <div className="relative">
          <img className="h-4/6 md:h-screen w-screen object-cover" src={car3} />
          <h1 className="absolute bottom-2 left-1/2 carousel_text font-bold md:text-4xl text-white">
            Mastamandu decleared as Chhaupadi Free Area
          </h1>
        </div>
        <div className="relative">
          <img className="h-4/6 md:h-screen w-screen object-cover" src={car4} />
          <h1 className="absolute bottom-2 left-1/2 carousel_text font-bold md:text-4xl text-white">
            SAMABIKAS Nepal awarded by With and For Girls in London on March
            2020
          </h1>
        </div>
        <div className="relative">
          <img
            className="h-4/6 md:h-screen w-full object-scale-down object-top"
            src={car5}
          />
          <h1 className="absolute bottom-2 left-1/2 carousel_text font-bold md:text-4xl text-mainblue">
            Sheetal B.K. from Budakot Achham receiving Award from With and For
            Girls in London on March 2020
          </h1>
        </div>
        <div className="relative">
          <img className="h-4/6 md:h-screen w-screen object-cover" src={car6} />
          <h1 className="absolute bottom-2 left-1/2 carousel_text font-bold md:text-4xl text-white">
            Young women in gender and leadership training
          </h1>
        </div>
      </Slider>
    </div>
  );
}

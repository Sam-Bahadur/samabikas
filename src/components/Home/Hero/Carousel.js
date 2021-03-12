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
    pauseOnHover: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <div className="my-8 cursor-grab md:h-screen" style={{ zIndex: "-1" }}>
      <Slider {...settings}>
        <div className="relative">
          <img className="h-60 md:h-screen w-screen object-cover" src={car1} />
          <div className="absolute w-full bottom-0 bg-maingreen">
            <h1 className="bottom-0 md:w-max max-w-max mx-auto carousel_text font-bold text-xs md:text-2xl  text-white bg-maingreen">
              Adolescent girls participating in Gender and Leadership Training
            </h1>
          </div>
        </div>
        <div className="relative">
          <img className="h-60 md:h-screen w-screen object-cover" src={car2} />
          <div className="absolute w-full bottom-0 bg-maingreen">
            <h1 className="bottom-0 md:w-max max-w-max mx-auto carousel_text font-bold text-xs md:text-2xl  text-white bg-maingreen">
              Gender and Leadership Training
            </h1>
          </div>
        </div>
        <div className="relative">
          <img className="h-60 md:h-screen w-screen object-cover" src={car3} />
          <div className="absolute w-full bottom-0 bg-maingreen">
            <h1 className="bottom-0 md:w-max max-w-max mx-auto carousel_text font-bold text-xs md:text-2xl  text-white bg-maingreen">
              Mastamandu decleared as Chhaupadi Free Area
            </h1>
          </div>
        </div>
        <div className="relative">
          <img className="h-60 md:h-screen w-screen object-cover" src={car4} />
          <div className="absolute w-full bottom-0 bg-maingreen">
            <h1 className="bottom-0 md:w-max max-w-max mx-auto carousel_text font-bold text-xs md:text-2xl  text-white bg-maingreen">
              SAMABIKAS Nepal awarded by With and For Girls in London on March
              2020
            </h1>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-60 md:h-screen w-full object-scale-down object-top"
            src={car5}
          />
          <div className="absolute w-full bottom-0 bg-maingreen">
            <h1 className="bottom-0 md:w-max max-w-max mx-auto carousel_text font-bold text-xs md:text-2xl  text-white bg-maingreen">
              Sheetal B.K. from Budakot Achham receiving Award from With and For
              Girls in London on March 2020
            </h1>
          </div>
        </div>
        <div className="relative">
          <img className="h-60 md:h-screen w-screen object-cover" src={car6} />
          <div className="absolute w-full bottom-0 bg-maingreen">
            <h1 className="bottom-0 md:w-max max-w-max mx-auto carousel_text font-bold text-xs md:text-2xl  text-white bg-maingreen">
              Young women in gender and leadership training
            </h1>
          </div>
        </div>
      </Slider>
    </div>
  );
}

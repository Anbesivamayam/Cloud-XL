import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
//Photos
import one from "../assets/slider/1.jpg";
import two from "../assets/slider/2.jpg";
import three from "../assets/slider/3.jpg";
import four from "../assets/slider/4.jpg";
import five from "../assets/slider/5.jpg";
import six from "../assets/slider/6.jpg";
import "../index.css";

// React caorusel
// npm install react-slick
// npm install slick-carousel
//  import "slick-carousel/slick/slick.css";
//  import "slick-carousel/slick/slick-theme.css";
//  import Slider from "react-slick";
// Styling of arrows is written in index.css

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div name="gallery" className="w-full my-10">
      <h2 className="text-4xl font-bold text-center tracking-[.02em] ">
        Photo Gallery
      </h2>
      <p className="text-2xl py-6 md:py-8 px-3 text-gray-500 text-center tracking-[.06em] italic">
        "History is a gallery of pictures in which there are few originals and
        many copies".
      </p>
      <div className="relative md:max-w-[1240px] mx-auto">
        <Slider {...settings} className="">
          <div className="px-2">
            <img className="rounded-lg" src={one} alt="" />
          </div>
          <div className="px-2">
            <img className="rounded-lg" src={two} alt="" />
          </div>
          <div className="px-2">
            <img className="rounded-lg" src={three} alt="" />
          </div>
          <div className="px-2">
            <img className="rounded-lg" src={four} alt="" />
          </div>
          <div className="px-2">
            <img className="rounded-lg" src={five} alt="" />
          </div>
          <div className="px-2">
            <img className="rounded-lg" src={six} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

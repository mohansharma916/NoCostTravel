"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroData from "./herodata";
import LocationData from "./loaction";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="relative overflow-hidden ">
        <Slider {...settings}>
          {HeroData.map((slide) => (
            <div
              key={slide.id}
              className="relative h-[75vh] border-b-[5px] border-[#ffe55c]">
              <img
                src={slide.imageUrl}
                alt={`Slide ${slide.id}`}
                className="w-full h-full  max-h-[75vh] bg-contain bg-center"
              />
              <div className="absolute h-[50%] sm:h-[40%] w-full flex flex-col justify-between top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div>
                  <h1 className="text-3xl sm:text-5xl font-bold">
                    {slide.heading}
                  </h1>
                  <p className="mt-2 text-lg sm:text-2xl font-semibold">
                    {slide.subheading}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row mx-auto">
                  <button className="flex items-center px-4 py-2 mb-6 sm:mb-0 sm:mr-4  bg-opacity-50 bg-white backdrop-blur-sm backdrop-filter rounded-md border ">
                    <span>Explore Opportunities</span>
                    <MapPinIcon className="ml-2 w-6" />
                  </button>
                  <button className="flex items-center justify-between  px-4 py-2 bg-opacity-50 bg-white backdrop-blur-sm backdrop-filter rounded-md border ">
                    <span>Join Our Community</span>
                    <ArrowTopRightOnSquareIcon className="ml-2 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="relative z-20 h-14 mt-[-35px] w-[80%] sm:w-[45%] mx-auto flex items-center justify-center rounded-md shadow-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full px-4 rounded-md"
        />
        <MagnifyingGlassIcon className="absolute right-2 cursor-pointer h-10  w-10 p-2 text-white	 rounded-md shadow-md bg-gradient-to-b from-yellow-300 to-yellow-500" />{" "}
        {/* Adjust styling as needed */}
      </div>

      <div className="mx-auto w-[80%] sm:w-[45%] overflow-x-auto">
        <div className="py-2 whitespace-nowrap">
          {LocationData.map((list, index) => (
            <div key={index} className="inline-block">
              <span className="text-white text-xs bg-slate-600 rounded-lg p-1 m-1">
                {list.stateName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;

"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogData from "@/app/blog/blogData";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
        <div className="relative h-[60vh] border-b-[5px] border-[#ffe55c]">
          <img
            src="/images/hero-2.jpeg"
            className="w-full h-full  max-h-[60vh] bg-contain bg-center"
          />
          <div className="absolute h-[50%] sm:h-[40%] w-full flex flex-col justify-between top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold">
                Live Your Own Revolution
              </h1>
              <p className="mt-2 text-lg sm:text-2xl font-semibold">
                Travel With Purpose
              </p>
            </div>
            <div className="flex flex-col sm:flex-row mx-auto">
              <button className="flex items-center px-4 py-2 mb-6 sm:mb-0 sm:mr-4  bg-opacity-50 bg-white backdrop-blur-sm backdrop-filter rounded-md border ">
                <span>Explore Opportunities</span>
                <MapPinIcon className="ml-2 w-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="font-semibold p-10">
          <h1 className="text-2xl 	text-[#2f4858] ">Popular Articles</h1>
          <p className="text-[#2f485899] mt-2 text-lg	">
            Travel with Purpose: Volunteer's experiences across India
          </p>
        </div>
        <div className="flex gap-4 p-4  overflow-x-auto">
          {BlogData.map((item) => (
            <Link href={`/blog/${item.id}`}>
              <div className=" p-3 border-2 bg-white  border-[#FFE55C] min-w-72 w-64 mt-3 sm:mt-0  ">
                <img
                  className="sm:w-64 w-72  rounded-xl sm:h-44 h-60 "
                  src={item.image}
                  alt=""
                />
                <div
                  style={{ color: "#85A0AD" }}
                  className="mt-2 sm:text-xs text-lg">
                  <LocationOnOutlinedIcon style={{ color: "yellow" }} />
                  {item.location}
                </div>
                <div
                  className="sm:mt-1 mt-3 text-base font-semibold"
                  style={{ color: "#2F4858" }}>
                  {item.heading}
                </div>
                <div className="text-sm  h-14" style={{ color: "#85A0AD" }}>
                  {item.description}
                </div>
                <div
                  className="mt-1 text-xs flex items-end "
                  style={{ color: "#2F4858" }}>
                  {item.writtenBy}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="font-semibold p-10">
          <h1 className="text-2xl 	text-[#2f4858] ">Volunteering Tips</h1>
          <p className="text-[#2f485899] mt-2 text-lg	">
            Learn tips to kickstart your journey in the world of voluntourism
          </p>
        </div>
        <div className="flex gap-4 p-4  overflow-x-auto">
          {BlogData.map((item) => (
            <Link href={`/blog/${item.id}`}>
              <div className=" p-3 border-2 bg-white  border-[#FFE55C] min-w-72 w-64 mt-3 sm:mt-0  ">
                <img
                  className="sm:w-64 w-72  rounded-xl sm:h-44 h-60 "
                  src={item.image}
                  alt=""
                />
                <div
                  style={{ color: "#85A0AD" }}
                  className="mt-2 sm:text-xs text-lg">
                  <LocationOnOutlinedIcon style={{ color: "yellow" }} />
                  {item.location}
                </div>
                <div
                  className="sm:mt-1 mt-3 text-base font-semibold"
                  style={{ color: "#2F4858" }}>
                  {item.heading}
                </div>
                <div className="text-sm  h-14" style={{ color: "#85A0AD" }}>
                  {item.description}
                </div>
                <div
                  className="mt-1 text-xs flex items-end "
                  style={{ color: "#2F4858" }}>
                  {item.writtenBy}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;

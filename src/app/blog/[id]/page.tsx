"use client";

import React from "react";
import BlogData from "@/app/blog/blogData";
import { useParams } from "next/navigation";
import { MapPinIcon } from "@heroicons/react/24/outline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const index = () => {
  const { id } = useParams();

  const filterData = BlogData.find((item): any => item.id === id);

  return (
    <>
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
      <div className="sm:p-10 p-5 text-[#2f4858] font-semibold">
        <div>
          <LocationOnOutlinedIcon />
          {filterData?.location}
        </div>
        <div className="text-5xl	mt-5">{filterData?.heading}</div>
        <div className="text-[#2f485899] text-lg mt-5">
          {filterData?.description}
        </div>
        <div className="mt-8 ml-10">{filterData?.postedOn}</div>
        <div>
          <img
            className="w-full h-[60vh] bg-contain bg-center	rounded-2xl mt-5"
            src={filterData?.image}
            alt=""
          />
        </div>
        <div className="sm:p-5 py-10 sm:w-[95%] text-[#3b3b3b] text-xl font-normal	">
          {filterData?.blogDescription}
        </div>
        <div>
          <img src={filterData?.subImages} alt="" />
        </div>
      </div>
    </>
  );
};
export default index;

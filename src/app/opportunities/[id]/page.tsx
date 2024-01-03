"use client";
import React from "react";
import VolunteerOpportunitiesData from "@/app/home/VolunteerOpportunities/volunteerOpportunitiesData";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumbs";
import Link from "next/link";
const index = () => {
  const { id } = useParams();
  const filterData = VolunteerOpportunitiesData.find(
    (item): any => item.id === id
  );
  //   console.log("filterData", filterData);
  return (
    <div className="flex">
      <div className="sm:m-10 m-5">
        <Breadcrumb capitalizeLinks />

        <div className="flex w-full overflow-scroll ">
          {filterData?.images?.map((item) => (
            <>
              <img className="w-72 h-72 mx-2  rounded-2xl" src={item} alt="" />
            </>
          ))}
        </div>
        <p className="sm:text-2xl text-lg text-[#2f4858] mt-10 font-semibold flex justify-between">
          {filterData?.title}
          <button className="bg-yellow-300 text-white font-normal p-2 rounded text-base">
            <ExitToAppIcon /> Apply Now
          </button>
        </p>
        <div className="text-[#212529] text-sm font-medium	mt-5">
          <div className="">
            <div>
              <HomeOutlinedIcon className="h-6 w-6" />
              <span className="ml-3">{filterData?.staytype}</span>
            </div>
          </div>
          <div className="mt-2">
            <div>
              <LocationOnOutlinedIcon className="h-6 w-6" />
              <span className="ml-2"> {filterData?.location}</span>
            </div>
          </div>
        </div>
        <div className="flex text-[#2f4858]  font-semibold mt-5">
          <div>
            <p>Stay At Least</p>
            <p className="bg-slate-200 text-center sm:p-2 rounded-xl mt-2 ">
              {filterData?.StayAtLeast}
            </p>
          </div>
          <div className="ml-10">
            <p> Stay Upto</p>
            <p className="ml-3 bg-slate-200 text-center px-3  sm:p-2 rounded-xl mt-2 ">
              {filterData?.StayUpTo}
            </p>
          </div>
        </div>
        <div className="   mt-5">
          <p className="text-2xl text-[#2f4858] font-semibold">Description</p>
          <p className="text-sm	text-[#252525] font-medium	mt-2 ">
            {filterData?.detail}
          </p>
        </div>
        <p className="text-2xl text-[#2f4858] font-semibold mt-5">
          What you Get
        </p>
        <div className=" w-full gap-4 flex flex-wrap   mt-3">
          {filterData?.WhatyouGet?.map((item) => (
            <div className=" gap-1 ml-2	text-[#252525] font-medium	mt-2 flex  ">
              {item.icon} <span className="">{item.title}</span>
            </div>
          ))}
        </div>
        <p className="text-2xl text-[#2f4858] font-semibold mt-5">
          What you Offer
        </p>
        <div className="gap-4   mt-3 flex">
          {filterData?.WhatyouOffer?.map((item) => (
            <div className=" gap-1	text-[#252525] font-medium	mt-2 flex  ">
              {item.icon} <span className="">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="   mt-5">
          <p className="text-2xl text-[#2f4858] font-semibold">
            About Experience
          </p>
          <p className="text-sm	text-[#252525] font-medium	mt-2 ">
            {filterData?.AboutExperience}
          </p>
        </div>
        <div className="   mt-5">
          <p className="text-2xl text-[#2f4858] font-semibold">
            Know Your Host
          </p>
          <div className="text-[#252525] font-medium	mt-2 ">
            {filterData?.KnowYourHost?.map((item) => (
              <>
                <AccountCircleOutlinedIcon />
                <span className="ml-3 text-[#2f4858]">{item.hostname}</span>
                <p className="mt-3">{item.hostdescription}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;

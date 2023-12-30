import React from "react";
import EastIcon from "@mui/icons-material/East";

const offersData = [
  {
    icon: "/images/airplane.png",
    title: "Volunteer & Explore",
    details:
      "Join the journey to empower भारत & become a part of our community",
  },
  {
    icon: "/images/hotel.png",
    title: "Stay + Meals",
    details: "Trade your skills & feel at home wherever you go",
  },
  {
    icon: "/images/luggage.png",
    title: "Collect Experiences",
    details: "Nourish the soul, reconnect with nature & people",
  },
];

const WhatWeOffer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mx-6 sm:mx-8 border-b-2 border-[#ffe55c] pb-4 sm:px-20">
      <div className="sm:w-1/2">
        <img
          src="/images/Trip.png"
          alt="Offer Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="sm:w-1/2 sm:px-8">
        <h2 className="text-3xl font-bold text-slate-700">What We Offer</h2>
        <p className="text-lg mb-6 text-slate-500">
          A Platform where you can travel using your skills.
        </p>

        {offersData.map((offer, index) => (
          <div key={index} className="flex items-center mb-10">
            <div className="mr-4 bg-white p-2 rounded-lg">
              <img src={offer.icon} alt={offer.title} className="w-12 " />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-700">
                {offer.title}
              </h3>
              <p className="text-md sm:text-lg font-medium text-slate-500">
                {offer.details}
              </p>
            </div>
          </div>
        ))}

        <button className="flex items-center sm:text-lg font-semibold mt-8 cursor-pointer leading-6 font-lato  rounded-md shadow-md p-3 text-white bg-gradient-to-b from-[#ffe55c] to-[#FAD200]">
          Find Volunteering Opportunities
          <EastIcon sx={{ marginLeft: 1 }} />
        </button>
      </div>
    </div>
  );
};

export default WhatWeOffer;

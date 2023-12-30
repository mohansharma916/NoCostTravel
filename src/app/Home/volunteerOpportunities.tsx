import React from "react";
import volunteerOpportunitiesData from "./volunteerOpportunitiesData";
import { MapPinIcon } from "@heroicons/react/24/outline";

const VolunteerOpportunities = () => {
  return (
    <>
      <div className="w-full p-4 flex justify-between sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Travel as a Volunteer
          </h1>
          <h3 className="text-lg font-semibold text-slate-400">
            Discover 100+ Opportunities across भारत
          </h3>
        </div>
        <button className="cursor-pointer h-10 w-20 text-white rounded-md shadow-md bg-gradient-to-b from-yellow-300 to-yellow-500">
          View All
        </button>
      </div>
      <div className="flex  gap-4 p-4  overflow-x-auto">
        {volunteerOpportunitiesData.map((item, index) => (
          <div
            key={index}
            className="relative min-w-72 w-80 h-96 rounded-lg shadow-lg overflow-hidden"
            style={{
              backgroundImage: `url(${item.icon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            {item.need && (
              <div className="absolute top-0 left-0 p-2">
                <button className="flex items-center p-1 bg-white text-xs rounded-md border ">
                  {item.need}
                </button>
              </div>
            )}
            <div className="absolute top-1/2 p-2 text-left text-white w-full">
              <div className="flex text-[#ffe55c] text-xs ">
                <MapPinIcon className="w-4" />
                <span>{item.location}</span>
              </div>
              <p className="text-white font-semibold text-xl	 mt-2">
                {item.title}
              </p>
              <p className="text-white text-sm	">{item.detail}</p>
              <div className="flex mt-2  overflow-x-auto w-full whitespace-nowrap">
                {item.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="w-full text-white text-xs  px-2 py-1 m-1 bg-opacity-50 bg-slate-300 backdrop-blur-sm backdrop-filter rounded-md border">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VolunteerOpportunities;

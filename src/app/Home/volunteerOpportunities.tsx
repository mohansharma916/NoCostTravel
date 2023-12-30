import React from "react";
import volunteerOpportunitiesData from "./volunteerOpportunitiesData";
import { MapPinIcon } from "@heroicons/react/24/outline";

const VolunteerOpportunities = () => {
  return (
    <div className="flex  gap-4 p-4  overflow-x-auto">
      {volunteerOpportunitiesData.map((item, index) => (
        <div
          key={index}
          className="relative w-80 h-96 rounded-lg shadow-lg"
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <div className="flex text-yellow-600 text-2xl font-bold">
              <MapPinIcon className="ml-2 w-6" />
              <span>{item.location}</span>
            </div>
            <p className="text-white mt-2">{item.title}</p>
            <p className="text-white">{item.detail}</p>
            <div className="flex justify-center mt-2">
              {item.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="bg-white bg-opacity-40 rounded-full px-2 py-1 mr-2">
                  <span className="text-white">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VolunteerOpportunities;

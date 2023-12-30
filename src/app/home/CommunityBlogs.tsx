import React from "react";
import BlogData from "./BlogData";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const communityblogs = () => {
  return (
    <>
      <div>
        <p className="flex justify-center text-4xl font-semibold gradient-background leading-[50px]   ">
          Community Blogs
        </p>
      </div>
      <div className="flex flex-wrap  sm:p-5 p-1 justify-around">
        {BlogData.map((item) => (
          <div className=" sm:p-3 p-1 border-2 bg-white  border-[#FFE55C] sm:w-64 w-44 mt-3 sm:mt-0  ">
            <img
              className="sm:w-64 w-44	 rounded-xl sm:h-44 h-24"
              src={item.image}
              alt=""
            />
            <div
              style={{ color: "#85A0AD" }}
              className="mt-1 sm:text-xs text-[10px]"
            >
              <LocationOnOutlinedIcon style={{ color: "yellow" }} />
              {item.location}
            </div>
            <div
              className="mt-1 text-[10px] sm:text-base font-semibold"
              style={{ color: "#2F4858" }}
            >
              {item.heading}
            </div>
            <div
              className="mt-1 sm:text-sm text-xs h-14"
              style={{ color: "#85A0AD" }}
            >
              {item.description}
            </div>
            <div
              className="mt-1 text-xs flex items-end "
              style={{ color: "#2F4858" }}
            >
              {item.writtenBy}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default communityblogs;

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
      <div className="flex  p-5 justify-around">
        {BlogData.map((item) => (
          <div className=" p-3 border-2 bg-white  border-[#FFE55C] w-64  ">
            <img className="w-64 rounded-xl h-44" src={item.image} alt="" />
            <div style={{ color: "#85A0AD" }} className="mt-1 text-xs">
              <LocationOnOutlinedIcon style={{ color: "yellow" }} />
              {item.location}
            </div>
            <div className="mt-1" style={{ color: "#2F4858" }}>
              {item.heading}
            </div>
            <div className="mt-1 text-sm" style={{ color: "#85A0AD" }}>
              {item.description}
            </div>
            <div
              className="mt-1 text-xs flex items-end "
              style={{ color: "#2F4858" }}>
              {item.writtenBy}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default communityblogs;

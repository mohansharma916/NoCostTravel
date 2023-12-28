import React from "react";
import BlogData from "./BlogData";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const communityblogs = () => {
  return (
    <>
      <div>
        <p className="flex justify-center text-4xl gradient-background leading-[50px]		">
          Community Blogs
        </p>
      </div>
      <div className="flex flex-wrap p-5 justify-around">
        {BlogData.map((item) => (
          <div className=" p-3 border-2 bg-white	border-orange-300 w-72 ">
            <img className="w-64 rounded-xl h-44" src={item.image} alt="" />
            <div style={{ color: "#85a0ad" }} className="mt-1 text-xs">
              <LocationOnOutlinedIcon style={{ color: "yellow" }} />
              {item.location}
            </div>
            <div className="mt-1" style={{ color: "#2f4858" }}>
              {item.heading}
            </div>
            <div className="mt-1 text-sm" style={{ color: "#85a0ad" }}>
              {item.description}
            </div>

            <div
              className="mt-1 text-xs flex items-end "
              style={{ color: "#2f4858" }}
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

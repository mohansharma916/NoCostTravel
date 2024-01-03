import React from "react";
import BlogData from "./BlogData";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Link from "next/link";
const communityblogs = () => {
  return (
    <>
      <div>
        <p className="flex justify-center text-4xl font-semibold gradient-background leading-[50px]   ">
          Community Blogs
        </p>
      </div>

      <div className="flex gap-4 p-4  overflow-x-auto">
        {/* flex sm:flex-wrap p-5  justify-around overflow-scroll */}
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
                className="mt-2 sm:text-xs text-lg"
              >
                <LocationOnOutlinedIcon style={{ color: "yellow" }} />
                {item.location}
              </div>
              <div
                className="sm:mt-1 mt-3 text-base font-semibold"
                style={{ color: "#2F4858" }}
              >
                {item.heading}
              </div>
              <div className="text-sm  h-14" style={{ color: "#85A0AD" }}>
                {item.description}
              </div>
              <div
                className="mt-1 text-xs flex items-end "
                style={{ color: "#2F4858" }}
              >
                {item.writtenBy}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default communityblogs;

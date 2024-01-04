import React from "react";
import BlogData from "./BlogData";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Link from "next/link";
const communityblogs = () => {
  return (
    <>
      <div>
        <p className="flex justify-center text-4xl mt-4 font-semibold bg-gradient-to-r from-[#FFE55C] to-[#f37335] bg-clip-text text-transparent  ">
          Community Blogs
        </p>
      </div>

      <div className="flex gap-4 p-4  overflow-x-auto">
        {/* flex sm:flex-wrap p-5  justify-around overflow-scroll */}
        {BlogData.map((item) => (
          <Link href={`/blog/${item.id}`}>
            <div className=" p-3 bg-opacity-50 bg-slate-200 backdrop-blur-md backdrop-filter border  border-slate-100 shadow-md min-w-72 w-64 mt-3 sm:mt-0  rounded-lg ">
              <img
                className="w-72  rounded-lg sm:h-44 h-60 "
                src={item.image}
                alt=""
              />
              <div className="mt-2 text-xs sm:md text-slate-600 flex items-center">
                <LocationOnOutlinedIcon style={{ fontSize: 15 }} />
                {item.location}
              </div>
              <div className="sm:mt-1 mt-3 text-base font-semibold text-slate-800">
                {item.heading}
              </div>
              <div className="text-sm  h-14 text-slate-700">
                {item.description}
              </div>
              <div className="mt-1 text-xs flex items-end font-semibold ">
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

"use client";
import React from "react";
import SimpleSlider from "./SimpleSlider";

const RecentVolunteers = () => {
  return (
    <>
      <div className="flex justify-center pb-10">
        <div className="bg-[url('/images/blog/volunteerbg.png')] bg-cover  w-[95%] h-[620px] rounded-2xl flex justify-center">
          <div className="text-white text-4xl	font-semibold flex flex-col items-center	  mt-2">
            <p>Recent Volunteers</p>
            <SimpleSlider />
          </div>
        </div>
      </div>
    </>
  );
};
export default RecentVolunteers;

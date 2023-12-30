import React from "react";

const MememberCard = () => {
  return (
    <div>
      <div className=" sm:flex  justify-between	mt-10 sm:py-5 sm:px-32 px-3">
        <div className="sm:w-[45%] sm:h-80 sm:py-16 py-5 button-gradient-background rounded-xl flex flex-col items-center ">
          <p className="text-[#2f4858] font-bold text-2xl 	">Become a Host</p>
          <p className="mx-auto w-10/12 text-center text-[#2f4858] sm:mt-10 mt-4 leading-tight font-medium px-2">
            Open your home, open your heart: Become a host and empower change
            through volunteer travel
          </p>
          <button className="sm:mt-10 mt-3 bg-[#2F4858] w-40	h-11	text-white rounded-md	">
            Get Started
          </button>
        </div>
        <div className="sm:w-[45%] card-gradient-background sm:h-80 sm:py-16 sm:mt-0 mt-5 py-5 button-gradient-background rounded-xl flex flex-col items-center ">
          <p className="text-[#FFE55C] font-bold text-2xl 	">
            Become a Volunteer
          </p>
          <p className="mx-auto w-10/12 text-center text-white sm:mt-10 mt-4 leading-tight font-medium px-2">
            Open your home, open your heart: Become a host and empower change
            through volunteer travel
          </p>
          <button className="sm:mt-10 mt-3 bg-[#FFE55C] w-40	h-11	text-[#2F4858] font-medium rounded-md	">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default MememberCard;

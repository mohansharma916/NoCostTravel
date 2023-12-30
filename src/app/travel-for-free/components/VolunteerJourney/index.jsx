import { Button } from "@mui/material";
import Image from "next/image";
import FirstStep from "../Steps/FirstStep";
import SecondStep from "../Steps/SecondStep";
import ThirdStep from "../Steps/ThirdStep";
import FourthStep from "../Steps/FourthStep";

const VolunteerJourney = () => {
  return (
    <>
      <div className="text-black mt-20  px-8">
        <div className="mb-20 text-center">
          <h3 className="text-3xl sm:text-5xl	font-semibold	text-[#2f4858]  mb-4 ">
            Start Your Journey
          </h3>
          <p className="text-[#82909095] sm:text-2xl">
            Here is our guide to help you out with your first Volunteering Yatra
          </p>
        </div>
        <FirstStep />
        <SecondStep />
        <ThirdStep />
        <FourthStep />
      </div>
    </>
  );
};

export default VolunteerJourney;

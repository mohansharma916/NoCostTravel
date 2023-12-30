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
          <h3 className="text-3xl  mb-4 text-semibold">Start Your Journey</h3>
          <p className="text-[#82909095]">
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

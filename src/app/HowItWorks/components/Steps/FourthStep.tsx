import { Button } from "@mui/material";
import Image from "next/image";
const FourthStep = () => {
  return (
    <>
      <div className="mb-10 sm:flex sm:justify-center ">
        <div className="sm:w-2/5 flex justify-center">
          <img
            className="mb-10 sm:w-2/3	 sm:h-full rounded-2xl "
            src="/images/blog/volunteerbg.png"
            alt="Volunteer Bg"
          />
        </div>

        <div className="sm:w-1/2">
          <h3 className="text-2xl sm:text-4xl	text-[#2f4858]  mb-4 font-semibold">
            4. Create a profile, verify your skills, and earn rewards.
          </h3>
          <p className="mb-8 text-[#82909095] sm:text-lg sm:w-4/5		">
            Boost your chances of being selected by hosts by filling out your
            profile with comprehensive details and getting your skillset
            verified.
          </p>
          <p className="text-[#82909095] sm:w-4/5">
            Once your application is accepted by the host, your VolunteerYatra
            begins.
          </p>
          <div className="flex  ">
            <Button className="bg-[#FDE35E] text-white shadow-2xl">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthStep;

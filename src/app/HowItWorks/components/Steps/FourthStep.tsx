import { Button } from "@mui/material";
import Image from "next/image";
const FourthStep = () => {
  return (
    <>
      <div className="mb-10">
        <Image
          className="mb-10"
          src="/images/blog/volunteerbg.png"
          alt="Volunteer Bg"
          width={345}
          height={250}
        />
        <h3 className="text-2xl  mb-4 text-semibold">
          4. Create a profile, verify your skills, and earn rewards.
        </h3>
        <p className="mb-8 text-[#82909095]">
          Boost your chances of being selected by hosts by filling out your
          profile with comprehensive details and getting your skillset verified.
        </p>
        <p className="text-[#82909095]">
          Once your application is accepted by the host, your VolunteerYatra
          begins.
        </p>
        <div className="flex justify-center ">
          <Button className="bg-[#FDE35E] text-white shadow-2xl">
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default FourthStep;

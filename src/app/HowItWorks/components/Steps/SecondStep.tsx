import { Button } from "@mui/material";
import Image from "next/image";
const SecondStep = () => {
  return (
    <>
      <div className="mb-10 sm:flex sm:justify-center ">
        <div className="sm:w-2/5 flex justify-center">
          <img
            className="mb-10 sm:w-2/3	 sm:h-full rounded-2xl "
            src="/images/blog/travel_volunteer.jpg"
            alt="Volunteer Bg"
          />
        </div>

        <div className="sm:w-1/2">
          <h3 className="text-2xl sm:text-4xl	text-[#2f4858]  mb-4 font-semibold">
            2. Discover the experiences that you desire{" "}
          </h3>
          <p className="mb-8 text-[#82909095] sm:text-lg sm:w-4/5		">
            Travel, collaborate, and make a difference in India! Our network of
            hosts offers free accommodation, meals, and other perks in exchange
            for your help with social projects, NGOs, ecovillages, hostels, and
            communities. Immerse yourself in the local culture, practice
            languages, and meet new people while making a positive social
            impact.
          </p>
          <p className="text-[#82909095] sm:w-4/5">
            This is a thrilling opportunity to have an unforgettable experience
            while contributing to a meaningful cause.
          </p>
          <div className="  ">
            <Button className="bg-[#FDE35E] text-white shadow-2xl">
              Browse All Opportuinity
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondStep;

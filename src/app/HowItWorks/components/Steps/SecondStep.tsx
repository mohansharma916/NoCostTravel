import { Button } from "@mui/material";
import Image from "next/image";
const SecondStep = () => {
  return (
    <>
      <div className="mb-10">
        <Image
          className="mb-10"
          src="/images/blog/travel_volunteer.jpg"
          alt="Volunteer Bg"
          width={345}
          height={250}
        />
        <h3 className="text-2xl  mb-4 text-semibold">
          2. Discover the experiences that you desire
        </h3>
        <p className="mb-8 text-[#82909095]">
          Travel, collaborate, and make a difference in India! Our network of
          hosts offers free accommodation, meals, and other perks in exchange
          for your help with social projects, NGOs, ecovillages, hostels, and
          communities. Immerse yourself in the local culture, practice
          languages, and meet new people while making a positive social impact.
        </p>
        <p className="text-[#82909095] mb-10">
          This is a thrilling opportunity to have an unforgettable experience
          while contributing to a meaningful cause.
        </p>

        <div className="flex justify-center ">
          <Button className="bg-[#FDE35E] text-white shadow-2xl">
            Browse All Opportuinity
          </Button>
        </div>
      </div>
    </>
  );
};

export default SecondStep;

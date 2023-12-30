import Image from "next/image";
const FirstStep = () => {
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
            1. How Volunteer Travel Works ?
          </h3>
          <p className="mb-8 text-[#82909095] sm:text-lg sm:w-4/5		">
            VolunteerYatra opportunites are an awesome way to travel and have
            fun! You get to work for a few hours a day or week using your skills
            and talents, and in return, you receive free accommodation and food.
            Imagine living in a new place, learning new skills, and making new
            friends while immersing yourself in a new culture.{" "}
          </p>
          <p className="text-[#82909095] sm:w-4/5">
            You'll have plenty of free time to explore the area and enjoy local
            activities. It's a unique and exciting way to travel that can be
            both affordable and rewarding. So why not give it a try and have an
            adventure of a lifetime!
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstStep;

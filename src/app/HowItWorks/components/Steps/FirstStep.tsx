import Image from "next/image";
const FirstStep = () => {
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
          1. How Volunteer Travel Works ?
        </h3>
        <p className="mb-8 text-[#82909095]">
          VolunteerYatra opportunites are an awesome way to travel and have fun!
          You get to work for a few hours a day or week using your skills and
          talents, and in return, you receive free accommodation and food.
          Imagine living in a new place, learning new skills, and making new
          friends while immersing yourself in a new culture.{" "}
        </p>
        <p className="text-[#82909095]">
          You'll have plenty of free time to explore the area and enjoy local
          activities. It's a unique and exciting way to travel that can be both
          affordable and rewarding. So why not give it a try and have an
          adventure of a lifetime!
        </p>
      </div>
    </>
  );
};

export default FirstStep;

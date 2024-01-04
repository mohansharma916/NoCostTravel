import Image from "next/image";

export const Steps = () => {
  const TravelAffordableData = [
    {
      stepNumber: 1,
      imageIcon:
        "https://f2f12a6676701e3f41b407374b57a1b0.cdn.bubble.io/f1687110810853x603360852280741000/4.svg",
      heading: "Create your Volunteer Profile",
      details:
        "Register as a Volunteer to join our community of conscious & responsible travel volunteers",
    },
    {
      stepNumber: 2,
      imageIcon:
        "https://f2f12a6676701e3f41b407374b57a1b0.cdn.bubble.io/f1687110898576x619604513159287300/3.svg",
      heading: "Become a Community Member & Get your skillset verified",
      details:
        "Choose your membership plan & Schedule a call with Team Volunteer Yatra & earn your Green Badge",
    },
    {
      stepNumber: 3,
      imageIcon:
        "https://f2f12a6676701e3f41b407374b57a1b0.cdn.bubble.io/f1687110918443x693007050958124900/1.svg",
      heading: "Apply for Volunteering Opportunities",
      details:
        "Get access to multiple opportunities across India & explore the depths of Bharat",
    },
    {
      stepNumber: 4,
      imageIcon:
        "https://f2f12a6676701e3f41b407374b57a1b0.cdn.bubble.io/f1687110961549x279764646924267620/2.svg",
      heading: "Travel Affordably",
      details:
        "Create meaningful and sustainable travel experiences that promote economic growth, cultural exchange, and social impact",
    },
  ];

  return (
    <>
      <div className="flex pt-5 overflow-x-auto lg:justify-around lg:px-10">
        {TravelAffordableData.map((data) => (
          <div
            key={data.stepNumber}
            className="flex items-center justify-between gap-3 ml-4 pb-2">
            <div className="bg-[#ffe557] h-8 w-12 rounded-lg flex items-center justify-center">
              <div>{data.stepNumber}</div>
            </div>
            <div>
              <div className="h-64 w-64 mb-8">
                <img
                  alt="Travel Affordably"
                  height={260}
                  width={260}
                  src={data.imageIcon}
                />
              </div>
              <div className="w-full min-h-40">
                <h6 className="text-lg mt-4 font-semibold mb-4 text-[#ffff]">
                  {data.heading}
                </h6>
                <h6 className="text-sm text-[#ffff] text-wrap">
                  {data.details}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

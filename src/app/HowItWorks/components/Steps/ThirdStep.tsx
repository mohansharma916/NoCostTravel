import { Button } from "@mui/material";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
const ThirdStep = () => {
  const waveChangeData = [
    {
      id: 1,
      icon: <CheckCircleIcon color="#28b62c" width={24} height={24} />,
      message: "Register yourself as a Volunteer on our Platform",
    },
    {
      id: 2,
      icon: <CheckCircleIcon color="#28b62c" width={24} height={24} />,
      message: "Count on VY Support before, during, and after your trips",
    },
    {
      id: 3,
      icon: <CheckCircleIcon color="#28b62c" width={24} height={24} />,
      message:
        " Connect with other travelers and learn about their previous volunteering experiences.",
    },
    {
      id: 4,
      icon: <CheckCircleIcon color="#28b62c" width={24} height={24} />,
      message:
        "Connect with other travelers and learn about their previous volunteering experiences.",
    },
  ];
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
          3. Aboard the wave of Change!
        </h3>
        <p className="mb-8 text-[#82909095]">
          Choose a membership plan to travel independently, connect with our
          hosts, and enjoy all the benefits of our community.
        </p>
        <div>
          {waveChangeData.map((data) => (
            <div key={data.id} className="flex gap-8  text-[#82909095]">
              <div> {data.icon}</div>
              <div>{data.message}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center ">
          <Button className="bg-[#FDE35E] text-white shadow-2xl">
            check Out Our Plans
          </Button>
        </div>
      </div>
    </>
  );
};

export default ThirdStep;

"use client";
import Header from "@/components/Header";
import { Button } from "@mui/material";
import Image from "next/image";
import YouTube, { YouTubeProps } from "react-youtube";
import VolunteerJourney from "./components/VolunteerJourney";
import FirstStep from "./components/Steps/FirstStep";

export default function HowItWorks() {
  const opts = {
    height: "290px",
    width: "330px",
    playerVars: {
      autoplay: 1,
    },
  };
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  return (
    <>
      <div>
        <Header />
        <div className="bg-[#ffe77f] p-8">
          {/* <div className="w-[328px] h-[200px]"> */}
          <YouTube
            className="mb-8"
            videoId="gn_EXHi3tXA"
            opts={opts}
            onReady={onPlayerReady}
          />
          {/* </div> */}
          <Image
            className="mb-8"
            width={328}
            height={185}
            alt="logo"
            src="/images/logo.png"
          />
          <div className=" ">
            <p className="text-lg text-[#2f4858] ">
              Join our community for a safe and transformative volunteering
              experience in India. Connect with travelers & welcoming hosts
              across India.{" "}
            </p>
            <div className="flex justify-center">
              <Button className="bg-[#2f4858] text-base text-white rounded-md">
                Get Membership
              </Button>
            </div>
          </div>
        </div>
        <div>
          <VolunteerJourney />
        </div>
      </div>
    </>
  );
}

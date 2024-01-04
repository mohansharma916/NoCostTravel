"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const blogs = [
  {
    image: "/images/airplane.png",
    name: "Deepak",
    location: "Himachal Pradesh",
    message:
      "Hi , I'm a self taught illustrator, graphic designer and an architect by profession.currently working on my 20s to make.",
    tags: ["Musician", "Videographer", "Community Engagement", "+ More"],
  },
  {
    image: "/images/hotel.png",
    name: "Blog 1222",
    location: "Delhi",
    message:
      "Hi , I'm a self taught illustrator, graphic designer and an architect by profession.currently working on my 20s to make.",
    tags: ["Musician", "Videographer", "Community Engagement", "+ More"],
  },
  {
    image: "/images/luggage.png",
    name: "ssdds 1222",
    location: "Uttar Pradesh",
    message:
      "Hi , I'm a self taught illustrator, graphic designer and an architect by profession.currently working on my 20s to make.",
    tags: ["Musician", "Videographer", "Community Engagement", "+ More"],
  },
];

const RecentVolunteers = () => {
  const sliderRef = useRef(null);
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const nextSlide = () => {
    slider.slickNext();
  };

  const prevSlide = () => {
    slider.slickPrev();
  };

  return (
    <div className="relative w-full bg-[url('/images/blog/volunteerbg.png')] bg-cover bg-center p-4">
      <h1 className="text-center text-white text-4xl font-bold">
        Recent Volunteers
      </h1>
      <div className=" mx-auto p-4 ">
        <Slider {...settings} ref={(c) => setSlider(c)}>
          {blogs.map((blog, index) => (
            <div key={index}>
              <div className="flex flex-col items-center justify-center mx-auto">
                <div className="rounded-full overflow-hidden h-32 w-32 border border-slate-300 mb-8">
                  <Image
                    src={blog.image}
                    alt={blog.name}
                    width={300}
                    height={300}
                  />
                </div>

                <div className="bg-slate-300 text-white bg-opacity-30 backdrop-blur  rounded-lg p-2 w-full sm:w-80 border-[0.5px] border-slate-500">
                  <div className="flex items-center">
                    <MapPinIcon className=" w-6" />
                    <p className="ml-2 text-sm">{blog.location}</p>
                  </div>
                  <h2 className="font-semibold mt-2">{blog.name}</h2>

                  <p className="text-sm my-2">{blog.message}</p>
                  <div className="flex mt-2  overflow-x-auto w-full whitespace-nowrap">
                    {blog.tags.map((tag, idx) => (
                      <div
                        key={idx}
                        className="w-full text-white text-xs  px-2 py-1 m-1 bg-opacity-50 bg-slate-300 backdrop-blur-sm backdrop-filter rounded-md border">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-2">
          <button onClick={prevSlide} className="px-4 py-2 mr-2 ">
            <KeyboardArrowLeftIcon
              sx={{
                fontSize: 40,
                color: "white",
                background: "grey",
                borderRadius: "100%",
              }}
            />
          </button>
          <button onClick={nextSlide} className="px-4 py-2  ">
            <KeyboardArrowRightIcon
              sx={{
                fontSize: 40,
                color: "white",
                background: "grey",
                borderRadius: "100%",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentVolunteers;

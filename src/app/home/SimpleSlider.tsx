import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VolunteerData from "./VolunteerData";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    // lazyLoad: true,
    // infinite: true,
    centerMode: true,
    useCSS: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" w-[80vw] ">
      {VolunteerData.map((item) => (
        <div className=" w-full ">
          <Slider className="" {...settings}>
            <div className="mx-auto ">{item.firstVolunteer}</div>
            <div>{item.secondVolunteer}</div>
            <div>{item.thirdVolunteer}</div>
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default SimpleSlider;

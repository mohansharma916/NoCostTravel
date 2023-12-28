import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const VolunteerData = [
  {
    firstVolunteer: (
      <>
        <div className="mt-10 w-96 flex flex-col justify-center">
          <div className="flex justify-center">
            <img
              className="rounded-full h-32 w-32 flex justify-center "
              src="/images/blog/img1.jpeg"
              alt=""
            />
          </div>
          <div className="container  p-5 mt-5 rounded-xl 	">
            <div className="text-xs">
              <LocationOnOutlinedIcon style={{ color: "yellow" }} />
              <span className="ml-1">Chamba,Himachal Pradesh</span>
            </div>
            <div className="text-base	mt-2">Hashmi</div>
            <div className="text-sm mt-3 	">
              My experience as a travel volunteer with Volunteer Yatra
            </div>
          </div>
        </div>
      </>
    ),
    secondVolunteer: (
      <>
        <div className="mt-10 w-96 flex flex-col justify-center">
          <div className="flex justify-center">
            <img
              className="rounded-full h-32 w-32 flex justify-center "
              src="/images/blog/img2.png"
              alt=""
            />
          </div>
          <div className="container  p-5 mt-5 rounded-xl 	">
            <div className="text-xs">
              <LocationOnOutlinedIcon style={{ color: "yellow" }} />
              <span className="ml-1">Chamba,Himachal Pradesh</span>
            </div>
            <div className="text-base	mt-2">Hashmi</div>
            <div className="text-sm mt-3	">
              My experience as a travel volunteer with Volunteer Yatra
            </div>
          </div>
        </div>
      </>
    ),
    thirdVolunteer: (
      <>
        <div className="mt-10 w-96 flex flex-col justify-center">
          <div className="flex justify-center">
            <img
              className="rounded-full h-32 w-32 flex justify-center "
              src="/images/blog/img3.jpg"
              alt=""
            />
          </div>
          <div className="container  p-5 mt-5 rounded-xl 	">
            <div className="text-xs">
              <LocationOnOutlinedIcon style={{ color: "yellow" }} />
              <span className="ml-1">Chamba,Himachal Pradesh</span>
            </div>
            <div className="text-base	mt-2">Hashmi</div>
            <div className="text-sm mt-3	">
              My experience as a travel volunteer with Volunteer Yatra
            </div>
          </div>
        </div>
      </>
    ),
  },
];
export default VolunteerData;

import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MultipleSelectChip from "./MutiSelect";

const StepThreeForm = ({ nextStep, prevStep, formData }: any) => {
  const [languages, setLanguages] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [aadharFile, setAadharFile] = useState(null);

  const handleAadharUpload = (event) => {
    const file = event.target.files[0];
    setAadharFile(file);
  };

  console.log("datata", formData);
  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center mb-4">
        <div className="w-full flex-wrap flex justify-between">
          <label htmlFor="organizationName" className="block mb-1 mt-2 ">
            What languages do you speak?
          </label>
          <MultipleSelectChip />
          <label htmlFor="organizationName" className="block mb-1 mt-5 ">
            Where do you come from?
          </label>
          <div className="w-full flex justify-between">
            <input
              type="text"
              placeholder="Current State"
              id="state"
              className="w-full sm:w-[49%] border border-gray-300 rounded px-3 py-2 mb-4 "
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder="Current City"
              id="city"
              className="w-full sm:w-[49%] border border-gray-300 rounded px-3 py-2 mb-4 "
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="w-[49%] mt-3">
            <label htmlFor="facebook" className="block mb-1">
              <FacebookIcon /> Facebook
            </label>
            <input
              type="text"
              id="facebook"
              placeholder="Facebook Id"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>
          <div className="w-[49%] mt-3">
            <label htmlFor="instagram" className="block mb-1">
              <InstagramIcon /> Instagram
            </label>
            <input
              type="text"
              id="instagram"
              placeholder="Instagram Id"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>

          <div className="w-full mt-3">
            <input
              type="file"
              id="aadhar"
              accept="image/*,.pdf"
              className="hidden"
              onChange={handleAadharUpload}
            />
            <label htmlFor="aadhar" className="w-full">
              <div className="flex items-center justify-center w-full h-24 bg-yellow-50 border-dashed border-2 border-[#ffe55c] rounded px-3 py-2 mb-4 cursor-pointer">
                {aadharFile ? aadharFile?.name : "Upload Aadhar"}
              </div>
            </label>
          </div>
        </div>
      </div>
      <form className="text-center"></form>
    </div>
  );
};

export default StepThreeForm;

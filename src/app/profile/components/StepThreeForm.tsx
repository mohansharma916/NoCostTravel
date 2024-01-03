import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MultipleSelectChip from "./MutiSelect";

const StepThreeForm = ({
  nextStep,
  prevStep,
  formData: initialFormData,
}: any) => {
  const [formData, setFormData] = useState(
    initialFormData || {
      languages: "",
      state: "",
      city: "",
      facebook: "",
      instagram: "",
      aadharFile: "",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAadharUpload = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      aadharFile: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep(formData);
  };

  console.log("formData.aadharFile", formData.aadharFile);
  return (
    <form onSubmit={handleSubmit}>
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
                name="state"
                type="text"
                placeholder="Current State"
                id="state"
                className="w-full sm:w-[49%] border border-gray-300 rounded px-3 py-2 mb-4 "
                value={formData.state}
                onChange={handleInputChange}
              />
              <input
                name="city"
                type="text"
                placeholder="Current City"
                id="city"
                className="w-full sm:w-[49%] border border-gray-300 rounded px-3 py-2 mb-4 "
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-[49%] mt-3">
              <label htmlFor="facebook" className="block mb-1">
                <FacebookIcon /> Facebook
              </label>
              <input
                name="facebook"
                type="text"
                id="facebook"
                placeholder="Facebook Id"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={formData.facebook}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-[49%] mt-3">
              <label htmlFor="instagram" className="block mb-1">
                <InstagramIcon /> Instagram
              </label>
              <input
                name="instagram"
                type="text"
                id="instagram"
                placeholder="Instagram Id"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={formData.instagram}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-full mt-3">
              <input
                name="aadhar"
                type="file"
                id="aadhar"
                accept="image/*,.pdf"
                className="hidden"
                onChange={handleAadharUpload}
              />
              <label htmlFor="aadhar" className="w-full">
                <div className="flex items-center justify-center w-full h-24 bg-yellow-50 border-dashed border-2 border-[#ffe55c] rounded px-3 py-2 mb-4 cursor-pointer">
                  {formData.aadharFile
                    ? formData.aadharFile?.name
                    : "Upload Aadhar"}
                </div>
              </label>
            </div>
          </div>
        </div>
        <form className="text-center"></form>
      </div>
      <div className="my-4 flex justify-end">
        <button
          onClick={prevStep}
          className={`w-32 bg-gradient-to-b from-[#ffe55c] to-[#FAD200] text-white px-4 py-2 rounded mr-2`}>
          Previous
        </button>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-32 bg-gradient-to-b from-[#ffe55c] to-[#FAD200] text-white px-4 py-2 rounded ">
          Next
        </button>
      </div>
    </form>
  );
};

export default StepThreeForm;

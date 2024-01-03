import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const StepOneForm = ({
  nextStep,
  prevStep,
  formData: initialFormData,
}: any) => {
  const [formData, setFormData] = useState(
    initialFormData || {
      fullName: "",
      email: "",
      birthdate: "",
      phoneNumber: "",
      country: "",
      bio: "",
      gender: "",
      profileImage: "",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        profileImage: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fghhjk", formData);
    // nextStep(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center mb-4">
          <div className="w-24 h-24 mb-8 relative rounded-full border border-gray-50">
            <label
              htmlFor="profileImage"
              className="absolute inset-0 cursor-pointer">
              {formData?.profileImage ? (
                <img
                  src={formData?.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full overflow-hidden "
                />
              ) : (
                <img
                  src="/images/user-icon.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full overflow-hidden"
                />
              )}
              <div className="absolute bottom-0 right-0 mr-1 mb-1">
                <AddIcon
                  sx={{
                    fontSize: 24,
                    color: "white",
                    backgroundColor: "grey",
                    borderRadius: "50%",
                    borderColor: "white",
                    borderWidth: 2,
                  }}
                />
              </div>
            </label>
            <input
              type="file"
              id="profileImage"
              className="hidden"
              onChange={handleUploadImage}
            />
          </div>
          <div className="w-full flex-wrap flex justify-between">
            <div className="w-[49%]">
              <label htmlFor="fullName" className="block mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-[49%]">
              <label htmlFor="birthdate" className="block mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="birthdate"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={formData.birthdate}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-[49%]">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-[49%]">
              <label htmlFor="phoneNumber" className="block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-[49%]">
              <label htmlFor="gender" className="block mb-1">
                Gender
              </label>
              <select
                id="gender"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={formData.gender}
                onChange={handleInputChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="trans">Trans</option>
              </select>
            </div>
            <div className="w-[49%]">
              <label htmlFor="country" className="block mb-1">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="bio" className="block mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                rows="4"
                value={formData.bio}
                onChange={handleInputChange}></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-end">
        <button
          disabled={true}
          onClick={prevStep}
          className={`w-32 bg-slate-200" text-white px-4 py-2 rounded mr-2`}>
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

export default StepOneForm;

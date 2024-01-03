import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const StepOneForm = ({ handleSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="w-full mx-auto p-6 bg-slate-300 shadow-lg rounded-lg">
      <div className="w-24 h-24 mb-8 relative rounded-full border border-gray-50 mx-auto">
        {profileImage ? (
          <img
            src={profileImage}
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
        <h3>{fullName}</h3>
      </div>

      <div className="w-full p-6 bg-white rounded-lg">
        <div className="flex flex-col items-center mb-4">
          <div className="w-full flex-wrap flex justify-between">
            <div className="w-[49%]">
              <label htmlFor="fullName" className="block mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="w-[49%]">
              <label htmlFor="gender" className="block mb-1">
                Gender
              </label>
              <select
                id="gender"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={gender}
                onChange={handleGenderChange}>
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
                value={country}
                onChange={(e) => setCountry(e.target.value)}
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
                value={bio}
                onChange={(e) => setBio(e.target.value)}></textarea>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="text-center"></form>
      </div>
    </div>
  );
};

export default StepOneForm;

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const StepTwoForm = ({
  nextStep,
  prevStep,
  formData: initialFormData,
}: any) => {
  const [formData, setFormData] = useState(
    initialFormData || {
      whoAreYou: "",
      organizationName: "",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center mb-4">
          <div className="w-full flex-wrap flex justify-between">
            <div className="w-full">
              <label htmlFor="gender" className="block mb-1">
                Who are you?
              </label>
              <select
                name="whoAreYou"
                id="whoAreYou"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={formData.whoAreYou}
                onChange={handleInputChange}>
                <option value="" disabled>
                  Choose Options
                </option>
                <option value="Startup">Startup</option>
                <option value="Homestay">Homestay</option>
                <option value="Hostel">Hostel</option>
                <option value="Guesthouse">Guesthouse</option>
                <option value="Community">Community</option>
              </select>
            </div>
            <div className="w-full mt-2">
              <label htmlFor="organizationName" className="block mb-1">
                Name of your organization
              </label>
              <input
                name="organizationName"
                type="text"
                placeholder="Enter Organization"
                id="organizationName"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={formData.organizationName}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
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

export default StepTwoForm;

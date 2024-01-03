"use client";
import { useState } from "react";
import ProgressBar from "./components/progressBar";
import StepOneForm from "./components/StepOneForm";
import StepTwoForm from "./components/StepTwoForm";
import StepThreeForm from "./components/StepThreeForm";
import StepLastForm from "./components/StepLastForm";

const steps = [
  {
    step: 1,
    label: "StepOneForm",
    component: StepOneForm,
  },
  {
    step: 2,
    label: "StepTwoForm",
    component: StepTwoForm,
  },
  {
    step: 3,
    label: "StepThreeForm",
    component: StepThreeForm,
  },
  {
    step: 4,
    label: "StepLastForm",
    component: StepLastForm,
  },
];

const Profile = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(0);

  const nextStep = (data: any) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const CurrentStep = steps[step].component;

  console.log("CurrentStep", CurrentStep);
  return (
    <div className="w-full max-w-lg sm:max-w-2xl mx-auto">
      <ProgressBar step={step} />
      <CurrentStep
        nextStep={nextStep}
        prevStep={prevStep}
        formData={formData}
      />

      {/* <div className="my-4 flex justify-end">
        <button
          disabled={step == 1 ? true : false}
          onClick={prevStep}
          className={`w-32 ${
            step === 1
              ? "bg-slate-200"
              : "bg-gradient-to-b from-[#ffe55c] to-[#FAD200]"
          } text-white px-4 py-2 rounded mr-2`}>
          Previous
        </button>

        <button
          onClick={() => nextStep(formData)}
          className="w-32 bg-gradient-to-b from-[#ffe55c] to-[#FAD200] text-white px-4 py-2 rounded ">
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Profile;

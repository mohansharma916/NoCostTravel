"use client";
import { useState } from "react";
import ProgressBar from "./progressBar";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";
import StepThreeForm from "./StepThreeForm";
import StepLastForm from "./StepLastForm";

const steps = [
  {
    label: "StepOneForm",
    component: StepOneForm,
  },
  {
    label: "StepTwoForm",
    component: StepTwoForm,
  },
  {
    label: "StepThreeForm",
    component: StepThreeForm,
  },
  {
    label: "StepLastForm",
    component: StepLastForm,
  },
];

const Stepper = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const nextStep = (data: any) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const CurrentStep = steps[step].component;

  return (
    <div className="w-full max-w-lg sm:max-w-2xl mx-auto">
      <ProgressBar step={step} />
      <CurrentStep
        nextStep={nextStep}
        prevStep={prevStep}
        formData={formData}
      />
      ;
      {/* 
      {step === 1 && (
        <StepOneForm
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
        />
      )}
      {step === 2 && (
        <StepTwoForm
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
        />
      )}
      {step === 3 && (
        <StepThreeForm
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
        />
      )}
      {step === 4 && (
        <StepLastForm
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
        />
      )} */}
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

export default Stepper;

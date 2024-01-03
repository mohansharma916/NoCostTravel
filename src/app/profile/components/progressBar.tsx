import React from "react";

const ProgressBar = ({ step }: any) => {
  const totalSteps = 4;

  const progressPercentage = ((step - 1) / totalSteps) * 100;
  const displayPercentage = Math.round(progressPercentage);

  return (
    <div className="w-full p-1 my-8 bg-white shadow-sm rounded-lg border-[0.1px]">
      <div className="relative h-8  rounded-lg bg-slate-50 text-white text-sm leading-none">
        <div
          className="absolute left-0 top-0 h-full bg-[#ffe55c] rounded-lg text-center text-xs leading-8 text-slate-500 font-bold"
          style={{
            width: `${progressPercentage === 0 ? 5 : progressPercentage}%`,
          }}>
          {displayPercentage === 0 ? "0%" : `${displayPercentage}%`}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

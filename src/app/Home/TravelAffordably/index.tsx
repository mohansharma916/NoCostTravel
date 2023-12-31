import { Steps } from "./Steps";

export const TravelAffordable = () => {
  return (
    <>
      {/* <div className="bg-[#2F4859] sm:bg-red-100 max-w-full  w-full"> */}
      <div className="bg-[#2F4859] max-w-full">
        <div className="text-[#ffff] font-poppins text-2xl flex justify-center pt-6 pb-2 border-b border-slate-400">
          Travel affordably : How?
        </div>
        <Steps />
      </div>
    </>
  );
};

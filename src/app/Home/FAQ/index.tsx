"use client";
import { useRef, useState } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { grey } from "@mui/material/colors";

const FaqsCard = (props: { faqsList: any; idx: any }) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}>
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}>
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const faqsList = [
    {
      q: "What’s the validity of membership?",
      a: "Depending upon the membership plan you choose.Annual Membership: 12 Months, apply to multiple opportunities & travel all year.",
    },
    {
      q: "How many times can I travel?",
      a: "As many times as possible for you within 12 months under Annual Membership",
    },
    {
      q: "What’s the minimum time for a volunteer trip?",
      a: "Starting from 7 days to 6 months depending upon the hosts & their requirements. You’ve to volunteer at least 24 hrs in a Week.",
    },
    {
      q: "What work will I have to do? ",
      a: "We'll have a variety of opportunities that require skills like web development, digital marketing, teaching, content creation etc. and you'll get to learn a lot from hosts and other experts as well..",
    },
  ];

  return (
    <>
      <div className="leading-relaxed  mt-12 sm:mx-auto sm:px-4 md:px-8 ">
        <div className="space-y-3 text-center mt-16 px-5">
          <h1 className="text-2xl sm:text-3xl text-gray-800 font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto sm:text-lg">
            Answered all frequently asked questions, Still confused? feel free
            to contact us.
          </p>
        </div>

        <div className="sm:flex sm:p-14 px-5 mt-4  sm:justify-between ">
          <div className=" max-w-2xl mx-auto sm:w-2/5">
            {faqsList.map((item, idx) => (
              <FaqsCard idx={idx} faqsList={item} />
            ))}
          </div>
          <div className="  sm:w-2/5 max-h-96	border-[#cfcfcf] border-2	 bg-white rounded-2xl flex-col flex items-center mt-5 sm:mt-0 py-3 sm:py-10 mb-5 sm:mb-0 ">
            <ChatBubbleIcon className="text-[#2f4858] h-16 w-16 " />
            <p className="text-[#2f4858] font-bold	sm:text-2xl text-xl sm:mt-5  	">
              Do you have more questions?
            </p>
            <p className="text-[#2f4858] font-semibold sm:mt-5 mt-3 text-center leading-tight">
              We would be happy to help you with whatever questions you have
            </p>
            <button className="button-gradient-background text-white h-12 w-[64%] font-bold rounded-md bg-yellow-300 sm:mt-10 mt-3">
              Ask Us Anything
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

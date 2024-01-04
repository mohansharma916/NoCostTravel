// "use client";
// import React from "react";
// // import { useRouter } from "next/navigation";
// import { useSearchParams } from 'next/navigation'

// import PrivacyPolicy from "./privacy-policy/page";
// import TermsOfServices from "./terms-of-services/page";
// import Contact from "./contact/page";
// import Link from "next/link";

// const Legal = () => {
// //   const router = useRouter();
// const router = useSearchParams()

//     const content = router.query?.content || "";
//     console.log("Content:", content);

//     switch (content) {
//       case "privacy-policy":
//         return <PrivacyPolicy />;
//       case "terms-of-services":
//         return <TermsOfServices />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex p-20">
//       <div className="bg-white border-2 border-[red] p-5">
//         <h1 className="text-2xl">Content</h1>
//         <ul>
//           <li>
//             <Link href="/legal/privacy-policy">Privacy policy</Link>
//           </li>
//           <li>
//             <Link href="/legal/terms-of-services">Terms of Service</Link>
//           </li>
//           <li>
//             <Link href="/legal/refund-and-cancellation">
//               Refund and Cancellation
//             </Link>
//           </li>
//           <li>
//             <Link href="/legal/contact">Contact Us </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="bg-red-600">{getContentComponent()}</div>
//     </div>
//   );
// };

// export default Legal;
"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import PrivacyPolicy from "./privacy-policy/page";
import TermsOfServices from "./terms-of-services/page";
import Contact from "./contact/page";
import RefundAndCancellation from "./refund-and-cancellation/page";
import Link from "next/link";

const Legal = () => {
  const searchParams = useSearchParams();
  const content = searchParams.get("page"); // Use "page" as the key to get the content

  console.log("Content:", content);

  const getContentComponent = () => {
    switch (content) {
      case "privacy-policy":
        return <PrivacyPolicy />;
      case "terms-of-services":
        return <TermsOfServices />;
      case "contact":
        return <Contact />;
      case "refund-and-cancellation":
        return <RefundAndCancellation />;
      default:
        return null;
    }
  };

  return (
    <div className="flex p-10">
      <div className="bg-white border-2 shadow-xl	 w-1/4 p-5 rounded-lg h-96 text-[#2f4858] font-semibold">
        <h1 className="text-3xl flex  ">Content</h1>
        <ul className="mt-4 text-lg ">
          <li>
            <Link href="/legal?page=privacy-policy">
              • <span className="underline">Privacy policy</span>
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/legal?page=terms-of-services">
              • <span className="underline">Terms of Service</span>{" "}
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/legal?page=contact">
              • <span className="underline">Contact Us</span>{" "}
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/legal?page=refund-and-cancellation">
              • <span className="underline">Refund and Cancellation</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-3/4 px-10">{getContentComponent()}</div>
    </div>
  );
};

export default Legal;

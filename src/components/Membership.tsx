import { useState } from "react";
import { IconButton, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";

const MembershipData = [
  {
    category: "Novice",
    title: "Schedule a Trip",
    plan: "One year",
    price: "999",
    icon: "/images/membership/firstplan.svg",
    cardColor: "#E0EAFC",
    cardColor2: "#CFDEF3",
    features: [
      {
        heading: "Volunteer at one place",
        subheading:
          "apply for multiple opportunities & travel to one where you get selected",
      },
      {
        heading: "Certificate of Completion",
        subheading: "receive a volunteering certificate on completion",
      },
      {
        heading: "Access to public community:",
        subheading: "get access to our public communities",
      },
      {
        heading: "VY Support",
        subheading:
          "our team will always be there to provide support during your exchange",
      },
    ],
    button: "Join Us",
  },
  {
    category: "Nomad",
    title: "Join Our Community",
    plan: "Three year",
    price: "2499",
    icon: "/images/membership/secondplan.svg",
    cardColor: "#fceabb",
    cardColor2: "#f8b500",
    features: [
      {
        heading: "Volunteer at multiple places",
        subheading: "Apply for multiple opportunities & travel all year",
      },
      {
        heading: "Certificates of Completion",
        subheading: "receive volunteering certificates on completion",
      },
      {
        heading: "Access to pro community",
        subheading: "get access to our community of hosts & volunteers",
      },
      {
        heading: "VY Support",
        subheading:
          "our team will always be there to provide support during your exchange",
      },
    ],
    button: "Join Us",
  },
  {
    category: "Thrill",
    title: "Join Our Community",
    plan: "Five year",
    price: "3999",
    icon: "/images/membership/thirdplan.svg",
    cardColor: "#9796f0",
    cardColor2: "#7063C0",

    features: [
      {
        heading: "Volunteer at multiple places",
        subheading: "Apply for multiple opportunities & travel all year",
      },
      {
        heading: "Certificates of Completion",
        subheading: "receive volunteering certificates on completion",
      },
      {
        heading: "Access to pro community",
        subheading: "get access to our community of hosts & volunteers",
      },
      {
        heading: "VY Support",
        subheading:
          "our team will always be there to provide support during your exchange",
      },
    ],
    button: "Join Us",
  },
];

const Membership = ({ isOpen, closeModal }: any) => {
  const [formData, setFormData] = useState({
    cuponCode: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <div className="flex items-center justify-center min-h-screen m-auto w-[90%] sm:w-full overflow-y-auto h-[96%] ">
        <div
          className="fixed inset-0 bg-gray-500 opacity-75"
          onClick={closeModal}></div>
        <div className="relative bg-white rounded-lg max-w-screen-lg overflow-y-auto h-[96%]  p-4">
          <IconButton
            aria-label="close"
            onClick={closeModal}
            className="absolute top-0 sm:top-4 right-0 sm:right-2 ">
            <CancelIcon sx={{ color: "grey" }} />
          </IconButton>
          <div className="text-center my-3">
            <h1 className="text-3xl text-slate-700 font-semibold">
              Join Our Community
            </h1>
            <h3 className="text-xl text-slate-600">
              Backpackers & Adventure Travellers
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {MembershipData.map((item) => (
              <div
                className="relative  p-2 sm:p-4 rounded-lg overflow-hidden"
                style={{
                  background: `linear-gradient(90deg,${item.cardColor}, ${item.cardColor2})`,
                }}>
                <img src={item.icon} className="h-72" />
                <div className="flex justify-between items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 ">
                    {item.category}
                  </h2>
                  <div className="bg-[#ffe55c] text-slate-700 rounded-lg py-1 px-2 max-w-fit my-2">
                    {item.plan}
                  </div>
                </div>
                <div className="mb-2">
                  <h5 className="text-3xl text-slate-900 font-semibold">
                    ₹{item.price}
                  </h5>
                  <p className="text-slate-500 text-sm">(+ 18% GST)</p>
                </div>
                <div>
                  <h6 className="text-slate-500 text-xl font-semibold mb-1">
                    Features :
                  </h6>
                  {item.features.map((list) => (
                    <div className="gap-2 flex items-center mb-4">
                      <CheckIcon sx={{ color: "lightgreen" }} />
                      <div>
                        <span className="font-semibold">{list.heading}: </span>
                        <span className="text-slate-500">
                          {list.subheading}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-b from-[#ffe55c] to-[#FAD200] text-white rounded-lg py-2 px-4 my-4 font-semibold min-w-40">
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Membership;

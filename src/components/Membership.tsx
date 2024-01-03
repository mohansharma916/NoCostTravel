import { useState } from "react";
import { IconButton, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";

const MembershipData = [
  {
    category: "pro",
    title: "Join Our Community",
    plan: "one year",
    price: "1999",
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
    category: "basic",
    title: "Schedule a Trip",
    plan: "one Month",
    price: "999",
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
    button: "Plan a Trip",
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
      <div className="flex items-center justify-center min-h-screen m-auto w-[90%] sm:w-full overflow-y-auto max-h-[98%] h-auto sm:h-full">
        <div
          className="fixed inset-0 bg-gray-500 opacity-75"
          onClick={closeModal}></div>
        <div className="relative bg-white rounded-lg max-w-screen-xl overflow-y-auto h-[98%] sm:h-auto p-4">
          <IconButton
            aria-label="close"
            onClick={closeModal}
            className="absolute top-2 right-2 sm:hidden">
            <CancelIcon />
          </IconButton>
          <div className="text-center">
            <h1 className="text-4xl text-slate-700">Choose your Impact</h1>
            <h3 className="text-xl text-slate-600">
              Transform your passion into action
            </h3>
            <h5 className="text-md text-slate-400">
              We believe exploration is a cosmic right
            </h5>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {MembershipData.map((item) => (
              <div className="relative bg-gradient-to-l from-yellow-200  to-yellow-50   p-8 rounded-lg">
                <h2 className="text-xl sm:text-3xl font-semibold text-slate-600 ">
                  {item.title}
                </h2>
                <div className="bg-[#ffe55c] text-slate-600 rounded-lg py-1 px-4 max-w-fit my-4">
                  {item.plan}
                </div>
                <div className="my-3">
                  <h5 className="text-4xl text-slate-700 font-semibold">
                    ₹{item.price}
                  </h5>
                  <p className="text-slate-400">(+ 18% GST)</p>
                </div>

                <div>
                  <h6 className="text-slate-500 text-xl font-semibold mb-2">
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
                {item.category === "pro" && (
                  <form className="space-y-4">
                    <div className="flex gap-3">
                      <input
                        name="cuponCode"
                        type="text"
                        id="cuponCode"
                        className=" rounded-md px-4 py-2 border border-slate-300 text-black"
                        placeholder="Cupon Code"
                        value={formData.cuponCode}
                        onChange={handleInputChange}
                        required
                      />

                      <button
                        type="submit"
                        className="bg-gradient-to-b from-[#ffe55c] to-[#FAD200] text-white rounded-lg py-2 px-4 font-semibold">
                        Apply
                      </button>
                    </div>
                  </form>
                )}

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

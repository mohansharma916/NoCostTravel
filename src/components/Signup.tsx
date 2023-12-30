import { useState } from "react";
import { Modal } from "@mui/material";

const Signup = ({ isOpen, closeModal }: any) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-gray-500 opacity-75"
          onClick={closeModal}></div>
        <div className="relative bg-white p-4 sm:p-0 rounded-lg max-w-4xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="bg-cover bg-center bg-[url('/images/signup.jpeg')] rounded-ss-lg  rounded-se-lg sm:rounded-se-none sm:rounded-l-lg p-8">
              <div className="text-left text-gray-800">
                <div className="p-4">
                  <h1 className="text-3xl font-bold mb-4 text-white">
                    Discover the transformative world of volunteer travel and
                    join a global community of change-makers
                  </h1>
                  <p className="text-md text-white">
                    By dedicating a few hours of your week to assist your host,
                    you will receive accommodation and other perks like meals
                    and access to local activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-l from-yellow-200  to-yellow-50   p-8 rounded-b-lg sm:rounded-r-lg">
              <h2 className="text-4xl font-bold text-slate-600 ">
                Hey,
                <br /> We are glad to have
                <br /> you as a <br />
              </h2>
              <h3 className="mb-4 text-4xl font-bold bg-gradient-to-b from-[#ffc371] to-[#ff5f6d] bg-clip-text text-transparent">
                Member.
              </h3>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md px-4 py-2 border border-slate-300 text-black"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    className="w-full rounded-md px-4 py-2 border border-slate-300 text-black"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full rounded-md px-4 py-2 border border-slate-300 text-black"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-b from-[#ffe55c] to-[#FAD200] text-white rounded-lg py-2 px-4 w-full font-semibold">
                  Sign Up
                </button>
              </form>
              <p className="text-slate-600 text-sm mt-4 text-right">
                Already a member? Log In
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Signup;

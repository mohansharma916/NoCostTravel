import { useState } from "react";
import { IconButton, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const Login = ({ isOpen, closeLoginModal }: any) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Modal open={isOpen} onClose={closeLoginModal}>
      {/* <div className="flex items-center justify-center min-h-screen"> */}
      <div className="flex items-center justify-center min-h-screen m-auto w-[90%] sm:w-full overflow-y-auto max-h-[98%] h-auto sm:h-full ">
        <div
          className="fixed inset-0 bg-gray-500 opacity-75"
          onClick={closeLoginModal}></div>
        <div className="relative bg-white rounded-lg max-w-4xl w-full overflow-y-auto h-[98%] sm:h-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 h-100vh">
            <div className="relative bg-yellow-50  rounded-ss-lg  rounded-se-lg sm:rounded-se-none sm:rounded-l-lg p-8 ">
              <h1 className="text-xl sm:text-3xl font-bold text-slate-600 ">
                Travel & Explore India like never before
              </h1>
              <div className="bg-[url('/images/login.svg')] bg-cover bg-center w-full min-h-52 sm:min-h-80">
                <div className="p-4"></div>
              </div>
            </div>

            <div className="relative bg-gradient-to-l from-yellow-200  to-yellow-50   p-8 rounded-b-lg sm:rounded-r-lg ">
              <IconButton
                aria-label="close"
                onClick={closeLoginModal}
                className="absolute top-2 right-2 sm:hidden">
                <CancelIcon />
              </IconButton>
              <h2 className="text-xl sm:text-4xl font-bold text-slate-600 ">
                Hey,
                <br /> We are glad to have
                <br /> you as a <br />
              </h2>
              <h3 className="mb-4 text-xl sm:text-4xl font-bold bg-gradient-to-b from-[#ffc371] to-[#ff5f6d] bg-clip-text text-transparent">
                Where to next?
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

                <button
                  type="submit"
                  className="bg-gradient-to-b from-[#ffe55c] to-[#FAD200] text-white rounded-lg py-2 px-4 w-full font-semibold">
                  Log In
                </button>
              </form>
              <p className="text-slate-600 text-sm mt-4 text-right">
                If not a member? Join Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;

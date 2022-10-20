import React from "react";
import { MdClose } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "./Navbar";
import loginbg from "../assets/loginbg.avif";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const redirectHome = () => {
    toast("Welcome to Cloud XL.", {
                icon: "🚀",
                style: {
                  borderRadius:"15px",
                  background:"#333",
                  color:"#fff",
                },
              });
    navigate("/");
  };



  return (
    <div
      className="w-full h-screen flex flex-col bg-no-repeat bg-cover justify-center openSans"
      style={{ backgroundImage: `url(${loginbg})` }}
    >
      <div className="relative max-w-[1240px] mx-auto  ">
        <form className="w-full mx-auto rounded-lg bg-gray-900 py-1 px-8 shadow-lg">
          <div className="flex flex-row justify-center ">
            <h5 className="text-2xl text-gray-400 font-normal text-center p-2">
              Sign up to Cloud XL{" "}
            </h5>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label className="mt-2 font-medium">Fullname</label>
            <input
              required
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-1.5  focus:bg-gray-800 focus:outline-none "
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label className="mt-2 font-medium">Email id</label>
            <input
              required
              type="email"
              className="rounded-lg bg-gray-700 mt-2 p-1.5  focus:bg-gray-800 focus:outline-none "
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label className="mt-2 font-medium">Password</label>
            <input
              type="password"
              required
              className="rounded-lg bg-gray-700 mt-2 p-1.5 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label className="mt-2 font-medium">Confirm Password</label>
            <input
              type="password"
              required
              className="rounded-lg bg-gray-700 mt-2 p-1.5  focus:bg-gray-800 focus:outline-none"
            />
          </div>

          <div className="flex justify-center align-center ">
            <button className="rounded-3xl w-full p-2 mt-5 text-base md:text-base font-normal">
              SIGN UP
            </button>
          </div>
          <div className="flex items-center justify-center p-3 ">
            <p className="text-base text-gray-400 flex justify-center ">
              Already have a account ?
            </p>
            <p  className="text-base text-center text-gray-400 p-1 border-b border-b-gray-400  hover:text-white cursor-pointer">
              Sign In
            </p>
          </div>
          <div
            onClick={redirectHome}
            className="flex flex-row items-center justify-center p-3 text-gray-400 hover:text-white rounded-lg cursor-pointer"
          >
            <IoMdArrowRoundBack className="w-6 h-5" />
            <p className="p-1">Go Back</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

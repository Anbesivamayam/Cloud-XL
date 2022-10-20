import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setShowSignin, setShowNav }) => {
  const navigate = useNavigate();
 
  return (
    <div className="w-full h-screen bg-gray-700/60 flex flex-col justify-center openSans ">
      <div className="relative max-w-[1240px] mx-auto ">
        <form className="w-full mx-auto rounded-lg bg-gray-900 py-4 px-10 shadow-lg">
          <div className="flex flex-row justify-center ">
            <h5 className="text-2xl  text-gray-400 font-normal text-center p-2">
              Sign in to Cloud XL{" "}
            </h5>
            <p
              onClick={() => {
                setShowSignin(false);
              }}
              className="text-4xl text-white absolute -top-4 -right-4"
            >
              <AiFillCloseSquare className="rounded-full cursor-pointer" />
            </p>
          </div>
          <div className="flex flex-col text-gray-400 py-2 ">
            <label className="mt-2 font-medium">Email</label>
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
              className="rounded-lg bg-gray-700 mt-2 p-1.5  focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex justify-end text-gray-400 py-2 text-base">
            <p className="cursor-pointer">Forgot Password ?</p>
          </div>
          <div className="flex justify-center align-center ">
            <button className=" w-full rounded-3xl p-2 px-2 my-2 text-base md:text-base font-normal">
              SIGN IN
            </button>
          </div>
          <div className="flex justify-center p-4 mt-2">
            <p className="text-base text-gray-400 tracking-[.03em]">
              New to Cloud XL?{" "}
              <a  href="#" target="blank">
                Sign-up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

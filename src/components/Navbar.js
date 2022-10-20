import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-scroll";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  // It should be set false initially so when we write onclick it changes on hamburger icon
  const [showNav, setShowNav] = useState(false); 
  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  // Popup modal
  const [showSignin, setShowSignin] = useState(false); 

  // Navigation for each Page
  const navigate = useNavigate();
  const SignUpPage = () => {
    navigate("/signUp");
  };

  return (
    <div className="w-screen h-[70px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link to="main" smooth={true} offset={10} duration={500}>
            <h1 className="text-base lg:text-2xl font-bold mr-4 cursor-pointer">
              CLOUD XL
            </h1>
          </Link>
          <ul name="Navbar Components" className="hidden md:flex text-sm md:text-base xl:text-lg">
            <Link to="main" smooth={true} offset={50} duration={500}>
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link to="about" smooth={true} offset={50} duration={500}>
              <li className="cursor-pointer">About</li>
            </Link>
            <Link to="support" smooth={true} offset={50} duration={500}>
              <li className="cursor-pointer">Support</li>
            </Link>
            <Link to="platform" smooth={true} offset={50} duration={500}>
              <li className="cursor-pointer">Platform</li>
            </Link>
            <Link to="pricing" smooth={true} offset={50} duration={500}>
              <li className="cursor-pointer">Pricing</li>
            </Link>
            <Link to="gallery" smooth={true} offset={50} duration={500}>
              <li className="cursor-pointer">Gallery</li>
            </Link>
            <Link to="footer" smooth={true} offset={50} duration={500}>
              <li className="cursor-pointer">Resources</li>
            </Link>
          </ul>
        </div>
        {/* {Sign-in and Signup} */}
        <div className="hidden md:flex pr-4 text-sm md:text-base">
          <button
            onClick={() => {
              setShowSignin(true);
              toast("Sign in to Continue!", {
                icon: "🚀",
                style: {
                  borderRadius:"15px",
                  background:"#333",
                  color:"#fff",
                },
              });
            }}
            className="border-none bg-transparent text-black mr-4 text-sm md:text-base"
          >
            Sign In
          </button>
          <button onClick={SignUpPage} className="px-6 py-2">
            Sign Up
          </button>
        </div>
        {/* {Hamburger} */}
        <div className="md:hidden mr-5" onClick={toggleMenu}>
          {showNav ? (
            <RiCloseFill className="w-[24px] h-[24px] cursor-pointer" />
          ) : (
            <HiMenuAlt3 className="w-[24px] h-[24px] cursor-pointer" />
          )}
        </div>
      </div>
      {/* Mobile - Hamburger */}
      <ul
        className={
          showNav ? "md:hidden bg-zinc-200 w-full px-8 py-1" : "hidden"
        }
      >
        <Link
          to="main"
          onClick={() => setShowNav(false)}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
            Home
          </li>
        </Link>
        <Link
          to="about"
          onClick={() => setShowNav(false)}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
            About
          </li>
        </Link>
        <Link
          to="support"
          onClick={() => setShowNav(false)}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li className="border-b-2 border-zinc-300 cursor-pointer w-full">
            Support
          </li>
        </Link>
        <Link
          to="platform"
          onClick={() => setShowNav(false)}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li className="border-b-2 border-zinc-300 cursor-pointer w-full">
            Platform
          </li>
        </Link>
        <Link
          to="pricing"
          onClick={() => setShowNav(false)}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li className="border-b-2 border-zinc-300 cursor-pointer w-full">
            Pricing
          </li>
        </Link>
        <Link
          to="gallery"
          onClick={() => setShowNav(false)}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li className="border-b-2 border-zinc-300 cursor-pointer w-full">
            Gallery
          </li>
        </Link>
        <Link
          to="footer"
          onClick={() => setShowNav(false)}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
            Resources
          </li>
        </Link>

        <div className="flex flex-col my-4">
          <button
            className="bg-transparent text-indigo-600 px-8 py-3 mb-4"
            onClick={() => {
              setShowSignin(true);
              setShowNav(false);
            }}
          >
            {" "}
            Sign In
          </button>
          <button onClick={SignUpPage} className="px-8 py-3 text-lg">
            Sign up
          </button>
        </div>
      </ul>

      {/* SIgnin Starts */}
      <main className="relative">
        {showSignin ? (
          <SignIn
            setShowSignin={setShowSignin}
            setShowNav={setShowNav}
            className="absolute top-0 right-0 left-0 bottom-0 h-screen"
          />
        ) : null}{" "}
      </main>
      {/* Signin Ends */}
    </div>
  );
};

export default Navbar;

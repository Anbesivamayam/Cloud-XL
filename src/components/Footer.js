import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div name="footer" className="w-full mt-24 bg-slate-900 text-gray-300 py-1 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 text-base md:text-sm">
        <div className="mb-2">
          <h6 className="font-bold uppercase pt-2 ml-2 mb-2">Solutions</h6>
          <ul className="cursor-pointer ">
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Marketing</a></li>
          <li className="flex justify-start items-center" ><span className="text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Analytics</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Commerce</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Cloud</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Sales</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2 ml-2 mb-2">company</h6>
          <ul className="cursor-pointer ">
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">About</a></li>
          <li className="flex justify-start items-center" ><span className="text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Blog</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Jobs</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Press</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Partners</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2 ml-3 mb-2">Legal</h6>
          <ul className="cursor-pointer ">
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">claims</a></li>
          <li className="flex justify-start items-center" ><span className="text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Privacy</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Terms</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Policies</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Conditions</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2 ml-2 mb-2">Support</h6>
          <ul className="cursor-pointer ">
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Pricing</a></li>
          <li className="flex justify-start items-center" ><span className="text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Documentation</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Guides</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">API Status</a></li>
          <li className="flex justify-start items-center"><span className=" text-white mr-1"><IoIosArrowForward /></span>
            <a href="#">Data</a></li>
          </ul>
        </div>
        
        <div className="col-span-2 pt-8 md:pt-2 px-4">
          <p className="font-bold uppercase ">Subscribe to our newsletter</p>
          <p className="py-4 ">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4 "
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 ">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-2">
        <p className="py-3 ">2022 &#169; Panda.LLC. All rights reserved by Arun Prasad V</p>
        <div className="flex gap-4 text-2xl py-2">
          <a href="https://www.facebook.com/" target="_blank">
            {" "}
            <FaFacebook />{" "}
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            {" "}
            <FaInstagram />{" "}
          </a>
          <a href="https://twitter.com/i/flow/login" target="_blank">
            {" "}
            <FaTwitter />
          </a>
          <a href="https://www.twitch.tv/" target="_blank">
            {" "}
            <FaTwitch />{" "}
          </a>
          <a href="https://github.com/" target="_blank">
            {" "}
            <FaGithub />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

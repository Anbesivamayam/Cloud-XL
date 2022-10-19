import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div name="footer" className="w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 ">
        <div className="mb-6">
          <h6 className="font-bold uppercase pt-2 px-2 md:px-1  ">Solutions</h6>
          <ul className="cursor-pointer ">
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul className="cursor-pointer">
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 px-2">Company</h6>
          <ul className="cursor-pointer">
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul className="cursor-pointer">
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase px-4 ">Subscribe to our newsletter</p>
          <p className="py-4 px-4">
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

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Panda,LLC. All rights reserved by Arun Prasad V</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl ">
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

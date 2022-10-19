import React from "react";
import { GiLifeSupport } from "react-icons/gi";
import { SiJsonwebtokens } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full mt-25 openSans">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="supportImg"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl  font-bold py-6 text-left md:text-center uppercase leading-tight">
            Finding the Right Team
          </h3>
          <p className="py-4 text-xl md:text-2xl tracking-[.09em] leading-relaxed md:leading-[2.5rem] ">
            We help millions of organizations empower their employees, serve
            their customers, and build what’s next for their businesses with
            innovative technology created in—and for—the cloud. Our teams are
            dedicated to helping customers apply our technologies to create
            success.
          </p>
        </div>

        <div className="grid grid-col-1 lg:grid-cols-3 relative gap-x-8 gap-y-11 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8 relative">
              <div className="absolute -top-6 left-7.5 flex items-center justify-center bg-indigo-600  p-[14px] text-white rounded-lg">
                <IoIosCall className="w-7 h-7 text-[25px] text-center" />
              </div>
              <h3 className="font-bold text-2xl my-4 text-indigo-600">Sales</h3>
              <p className="text-gray-600 text-xl leading-relaxed md:leading-loose">
                Help customers transform their businesses with Google’s global
                data center and software products, shaping the future of
                technology in the workplace.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 cursor-pointer">
              <p className="flex items-center text-indigo-600 cursor-pointer">
                Contact Us <BsArrowRight className="w-5 ml-2 " />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <div className="bg-indigo-600 w-16 p-4 text-white rounded-lg mt-[-3.5rem]">
                <GiLifeSupport className="text-[25px] text-center w-6 h-6" />
              </div>
              <h3 className="font-bold text-2xl my-4  text-indigo-600">Technical Support</h3>
              <p className="text-gray-600 text-xl leading-relaxed md:leading-loose">
                Use technical experience to oversee all of a program's essential
                activities, including planning, communications, and execution.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600 ">
                Contact Us <BsArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="bg-indigo-600 w-16 p-4 text-white rounded-lg mt-[-3.5rem]">
                <SiJsonwebtokens className="text-[25px] text-center w-6 h-6" />
              </div>

              <h3 className="font-bold text-2xl my-4  text-indigo-600">Cloud Support</h3>
              <p className="text-gray-600 text-xl leading-relaxed md:leading-loose">
                Oversee technical integration, platform adoption, and software
                optimization projects to ensure rapid and accurate resolution of
                technical challenges
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600 ">
                Contact Us <BsArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Support;

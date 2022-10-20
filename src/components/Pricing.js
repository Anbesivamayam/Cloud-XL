import React from "react";
import { FiCheck } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-16 md:my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white px-2 py-8 tracking-[.05em]">
            The Right price for your Cloud Management.
          </h3>
          <p className="text-xl md:text-2xl px-4 ">
          Save money with Cloud XL transparent and innovative approach to pricing. Contact us today to get a quote for your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-6 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-4xl md:text-5xl font-bold py-4 flex">
                $70
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-xl py-4 text-gray-600">
              Power up your buisness with our starter pack.
            </p>
            <div className="text-2xl  text-gray-600">
              <p className="flex py-4 text-lg md:text-2xl">
                <FiCheck className="w-8 mr-5 text-green-600" />
                8 GB Memory
              </p>
              <p className="flex py-4 text-lg md:text-2xl">
                <FiCheck className="w-8 mr-5 text-green-600" />2 Core Processor
              </p>
              <p className="flex py-4 text-lg md:text-2xl">
                <FiCheck className="w-8 mr-5 text-green-600" />
                160 GB SSD Disk 
              </p>
              <p className="flex py-4 text-lg md:text-2xl">
              <FiCheck className="w-8 mr-5 text-green-600" />
                5 TB Transfer*
              </p>
              <p className="flex py-4 text-lg md:text-2xl">
                <AiOutlineClose className="w-8 mr-5 text-red-600" />
                24/7 Tech support
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-6 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Premium
            </span>
            <div>
              <p className="text-4xl md:text-5xl font-bold py-4 flex">
                $140
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-xl py-4 text-slate-500">
               To handle all your Organization cloud needs.
            </p>
            <div className="text-2xl  text-gray-600">
              <p className="flex py-4 text-lg md:text-2xl">
                <FiCheck className="w-8 mr-5 text-green-600" />
                32 GB Memory
              </p>
              <p className="flex py-4">
                <FiCheck className="w-8 mr-5 text-green-600" />8 Core Processor
              </p>
              <p className="flex py-4 text-lg md:text-2xl">
                <FiCheck className="w-8 mr-5 text-green-600" />
                640 GB SSD Disk
              </p>
              <p className="flex py-4 text-lg md:text-2xl">
                <FiCheck className="w-8 mr-5 text-green-600" />
                7 TB Transfer*
              </p>
              <p className="flex py-4 text-lg md:text-2xl">
                <FiCheck className="w-8 mr-5 text-green-600" />
                24/7 Tech support.
              </p>
              <button className="w-full py-4 my-4 text-xl md:text-2xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

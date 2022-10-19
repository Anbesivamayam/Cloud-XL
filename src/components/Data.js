import React from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TbCloudLockOpen } from "react-icons/tb";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";

const Data = () => {
  return (
    <div name="about" className="w-full my-16 md:my-32 openSans">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-[32px] md:text-4xl font-bold leading-tight">
            Data Services
          </h2>
          <p className="text-xl md:text-2xl py-3 md:py-6 px-2 text-gray-600 tracking-[.08em] leading-relaxed md:leading-[2.5rem] ">
          Cloud data management is a way to manage data across cloud platforms, either with or instead of on-premises storage. The cloud is useful as a data storage tier for disaster recovery, backup and long-term archiving. With cloud data management, resources can be purchased as needed.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl ">
            <p className="text-5xl md:text-7xl font-bold text-indigo-600 flex justify-center m-2"><AiOutlineCloudUpload/></p>
            <p className="text-gray-600 mt-2 text-xl">App Security</p>
           
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-5xl md:text-7xl  font-bold text-indigo-600 flex justify-center m-2"><TbCloudLockOpen/></p>
            <p className="text-gray-600 mt-2 text-xl">Cloud data</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-5xl md:text-7xl font-bold text-indigo-600 flex justify-center m-2"><BsFillFileEarmarkArrowUpFill/></p>
            <p className="text-gray-600 mt-2 text-xl">API</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data
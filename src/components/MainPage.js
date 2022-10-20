import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { TbCloudLockOpen } from "react-icons/tb";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import bgImg from "../assets/cyber-bg.png";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [state, setstate] = useState(1);
  const handleOnclick = () => {
    setstate(state + 1);
    console.log(state);
  };
  useEffect(() => {
    fetch("https://last-airbender-api.herokuapp.com/api/v1/characters")
      .then((res) => {
        res.json();
        console.log(res);
      })

      .catch((err) => console.log(err));
  }, [state]);

  return (
    <div
      name="main"
      className="openSans w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center  md:items-start w-full px-4 py-8">
          <p className="text-2xl xl:text-3xl pt-6 mb-1 font-normal">
            Influence the direction of
          </p>
          <h1 className="py-3 text-4xl md:text-6xl mb-1 font-bold">
            Cloud Management
          </h1>
          <p className="text-xl xl:text-3xl mb-1 font-normal">
            This is our Tech{" "}
            <span className=" text-xl xl:text-3xl font-bold">Cloud XL.</span>
          </p>
          <button
            onClick={handleOnclick}
            className="py-3 px-6 w-[150px] md:w-[40%] mb-1 my-4"
          >
            Get Started
          </button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="mainbg" />
        </div>
        {/* <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-white
            rounded-xl text-center shadow-xl"
        >
          <p className="font-normal"> Data Services</p>
          <div className="flex justify-between flex-wrap px-4'">
            <p className="flex px-4 py-2 text-slate-500">
              <AiOutlineCloudUpload className="h-6  text-indigo-600" /> App
              Security{" "}
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              {" "}
              <FaDatabase className="h-6 mr-1 text-indigo-600" />
              Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <TbCloudLockOpen className="h-6 mr-1 text-indigo-600" /> Cloud
              Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <BsFillFileEarmarkArrowUpFill className="h-6 mr-1 text-indigo-600" />{" "}
              API
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainPage;

import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-16 md:my-32 openSans">
      <div className="max-w-[1240px] mx-auto">
        <div className=" text-center">
          <h2 className="text-3xl font-bold leading-tight">
            Trusted by Developers across the world
          </h2>
          <p className="text-xl md:text-2xl  py-3 md:py-6 px-2 text-gray-600 tracking-[.08em] leading-relaxed md:leading-[2.5rem]">
          The demand for Cloud professionals has increased immensely in the world today. Cloud Computing is among the most popular fields in the IT industry since solutions offered based on the cloud are proved to be convenient for businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-4xl md:text-5xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-600 mt-2 text-lg">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-4xl md:text-5xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-600 mt-2 text-lg">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-4xl md:text-5xl font-bold text-indigo-600">100K</p>
            <p className="text-gray-600 mt-2 text-lg">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

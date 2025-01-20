import React from "react";
import footer_top from "../assets/footer-top.png";

const Footertop = () => {
  return (
    <div className="bg-[#ECA76E] flex flex-col lg:flex-row items-center justify-between py-5 lg:py-0">
      {/* Left Side - Image */}
      <div className="w-[40%] mt-0 lg:mt-[-12px]">
        <img className="w-full h-auto object-cover" src={footer_top} alt="" />
      </div>

      {/* Right Side - Content & Button */}
      <div className="w-[60%] flex flex-col lg:flex-row justify-around items-center">
        {/* Text */}
        <div className="text-white text-lg font-semibold">
          <h2 className="my-5 lg:my-0">Looking For The Best <br /> Architecture Services</h2>
        </div>

        {/* Button */}
        <button className="bg-white text-black font-semibold px-6 py-2 rounded-md shadow-md hover:bg-gray-200 transition-all">
          Submit Request
        </button>
      </div>
    </div>
  );
};

export default Footertop;

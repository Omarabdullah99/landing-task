import React from "react";
import one from "../../assets/featured/1.png";
import two from "../../assets/featured/2.png";
import three from "../../assets/featured/3.png";
import four from "../../assets/featured/4.png";
import five from "../../assets/featured/5.png";

const Featured = () => {
  return (
    <div className="featured my-[110px] ">
      <div className="container-sectionn w-[90%] m-auto max-w-[1400px]">
        <h1 className="text-[24px] lg:text-[44px] font-[600] leading-8 lg:leading-[50px] text-center mb-[50px]">Our Featured Project</h1>
        {/* Part 1 */}
        <div className="part1 flex flex-col lg:flex-row items-center justify-around gap-[20px] mb-[24px]">
          <div className="mb-[20px] lg:mb-0">
            <img src={one} alt="" />
          </div>
          <div className="flex flex-col gap-[22px]">
            <img className="w-full" src={two} alt="" />
            <img src={three} alt="" />
          </div>
        </div>
        <div className="part2 flex flex-col lg:flex-row items-center justify-around gap-[20px] overflow-hidden">
            <img src={four} alt="" />
            <img src={five} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Featured;

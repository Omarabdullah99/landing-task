import React from "react";
import one from "../../assets/process/1.png";
import two from "../../assets/process/2.png";
import three from "../../assets/process/3.png";
import arrow_right from "../../assets/arrow-right-process.png";

const Process = () => {
  const processes = [
    {
      image: one,
      title: "Strategy and Planning",
      des: "The lower-numbered purposes are better understood and practiced",
    },
    {
      image: two,
      title: "Market Research",
      des: "The lower-numbered purposes are better understood and practiced",
    },
    {
      image: three,
      title: "Perfect Planning",
      des: "The lower-numbered purposes are better understood and practiced",
    },
  ];
  return (
    <div className="process my-[110px]">
      <div className="container-sectionn w-[90%] m-auto ">
        <h1 className="text-[24px] lg:text-[40px] font-bold leading-8 lg:leading-[50px] mb-[50px]">
          Our Work Process
        </h1>
        <div className="flex flex-col lg:flex-row  gap-5">
          {processes.map((process) => (
            <div
              key={process.title}
              className="text-center p-11 border shadow "
            >
              <img className="m-auto" src={process.image} alt="" />
              <h3 className="text-[24px] font-bold my-4">{process.title}</h3>
              <p className="text-[#000000B2] text-[18px] font-[400] leading-[34px]">
                {process.des}
              </p>
              <button className="text-[#82631C] flex items-center my-[18px]   gap-3 justify-center mx-auto">
                Learn more
                <img className="mt-[6px]" src={arrow_right} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;

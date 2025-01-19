import React from "react";
import exprience_left from "../../assets/experience-left.png";

const About = () => {
  const experienceList = [
    {
      number: 13,
      title: "year of experience",
    },
    {
      number: 267,
      title: "Project Completed",
    },
    {
      number: 40,
      title: "Best Partners",
    },
  ];
  return (
    <div className="about my-[110px] ">
      <div className="container-sectionn w-[90%] m-auto">
        <div className="about-content flex flex-col lg:flex-row items-center justify-between">
          <div className="left-content mb-6 lg:mb-0 lg:w-1/2">
            <img className="h-[460px]" src={exprience_left} alt="" />
          </div>
          <div className="right-content lg:w-1/2">
            <h3 className="text-[#B68053] font-[500] mb-3">About Us</h3>
            <h2 className=" md:text-[24px] leading-8 lg:text-[44px] lg:leading-[65px] mb-14px font-bold">
              We’re Experienced in This <br /> Field{" "}
            </h2>
            <p className="text-[#000000A8] font-[400] leading-7 text-[18px] mb-4 ">
              There are many variations of passages of Lorem Ipsum available, <br />
              but the majority have suffered alteration in some form, by
              injected <br /> humour, or randomised words which{" "}
            </p>
            <div className="experience flex items-center gap-8 mb-[38px]">
              {experienceList.map((experience) => (
                <div>
                  <p className="text-xl font-bold text-[#ECA76E] mb-3">
                    {experience.number}+
                  </p>
                  <p className="text-[12px] md:text-[15px] font-bold">{experience.title}</p>
                </div>
              ))}
            </div>
            <button className="bg-[#ECA76E] rounded-[2px] text-white px-4 py-3">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

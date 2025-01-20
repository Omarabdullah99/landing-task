import React from "react";
import one from "../../assets/blog/1.png";
import two from "../../assets/blog/2.png";
import three from "../../assets/blog/3.png";
import four from "../../assets/blog/4.png";
import { FaShareAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Blog = () => {
  const teams = [
    {
      image: one,
      date: "Oct 15,2023",
      by: "Architecture",
      title: "An introductory For Selecting The Perfect Color Palette",
    },
    {
      image: two,
      date: "Oct 15,2023",
      by: "Architecture",
      title: "Striking The Ideal Equilibrium Between Functionality",
    },
    {
      image: three,
      date: "Oct 15,2023",
      by: "Architecture",
      title: "We Are Designing Spaces That Blend Functianality",
    },
    {
      image: four,
      date: "Oct 15,2023",
      by: "Architecture",
      title: "Innovative Architecture  Design Studio With Experience Of",
    },
  ];
  return (
    <div className="blog my-[110px] bg-[#FCEFE4]  overflow-hidden p-5">
      <div className="container-sectionn w-[90%] m-auto">
        {/* Background Text */}
        <div className="back relative mt-7">
          <div className="absolute inset-0 flex justify-center items-center mb-[30px]">
            <h1 className="text-[#E0E0E0] text-[106px] md:text-[140px] font-bold uppercase opacity-50 tracking-widest">
              Blog
            </h1>
          </div>

          <div className="relative z-10 text-center mt-[60px]">
            <p className="text-[#B68053] font-bold text-[14px]">Our Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Recent Articles
            </h2>
          </div>
        </div>

        <div className="teams grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 mt-[90px]">
          {teams.map((team) => (
            <div key={team.name} className=" flex flex-col justify-center  p-5 ">
              <img className="m-auto" src={team.image} alt="" />

              <div className="date flex justify-center gap-4 lg:justify-between items-center">
                <p className="text-[14px] font-[300] leading-6">{team.date}</p>
                <p className="text-[14px] font-[300] leading-6">
                  By: {team.by}
                </p>
              </div>

              <h3 className="my-[15px] text-[14px] lg:text-[18px] font-bold leading-[24px] text-center lg:text-left">
                {team.title}
              </h3>
              <button className="hover:bg-[#ECA76E] bg-transparent border hover:border-[#ECA76E] hover:text-white border-black rounded-[2px] px-4 py-1 w-[109px] m-auto lg:m-0">
                View All
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import one from "../../assets/team/1.png";
import two from "../../assets/team/2.png";
import three from "../../assets/team/3.png";
import four from "../../assets/team/4.png";
import { FaShareAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const OurTeam = () => {
  const teams = [
    {
      image: one,
      name: "Ronald Richards",
      type: "Web Designer",
    },
    {
      image: two,
      name: "Jerome Bell",
      type: "Ui/UX Designer",
    },
    {
      image: three,
      name: "Darrell Steward",
      type: "Development",
    },
    {
      image: four,
      name: "Joseph Benjami",
      type: "Project manager",
    },
  ];
  return (
    <div className="team my-[110px] ">
      <div className="container-sectionn w-[90%] m-auto">
        {/* Background Text */}
        <div className="back relative">
          <div className="absolute inset-0 flex justify-center items-center mb-[30px]">
            <h1 className="text-[#E0E0E0] text-[140px] font-bold uppercase opacity-50 tracking-widest">
              Team
            </h1>
          </div>

          <div className="relative z-10 text-center mt-[60px]">
            <p className="text-[#B68053] font-bold text-[14px]">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our Expert
            </h2>
          </div>
        </div>

        <div className="teams grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 mt-[90px]">
          {teams.map((team) => (
            <div key={team.name} className="bg-yellow-50 p-5 text-center">
              <div className="img-social relative">
                <img className="m-auto" src={team.image} alt="" />
                <div className="social absolute bottom-[70px] w-full">
                  <div className=" flex items-center justify-evenly">
                    <div className="icon">
                      <FaFacebookF />
                    </div>
                    <div className="icon">
                      <FaTwitter />
                    </div>

                    <div className="icon">
                      <FaShareAlt />
                    </div>

                    <div className="icon">
                      <FaLinkedinIn />
                    </div>

                    <div className="icon">
                      <AiFillInstagram />
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="mt-[15px] text-[24px] font-bold leading-[50px]">
                {team.name}{" "}
              </h3>
              <p className="text-[16px] font-[400] leading-[50px]">
                {team.type}{" "}
              </p>
            </div>
          ))}
         
        </div>
        <div className="flex justify-center mt-[30px]">
            <button className="bg-[#B68053] rounded-[2px] text-white px-8 py-3 m-auto">
              View All
            </button>
          </div>
      </div>
    </div>
  );
};

export default OurTeam;

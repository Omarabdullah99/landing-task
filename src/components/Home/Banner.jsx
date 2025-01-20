import React from "react";
import banner_right from "../../assets/banner-right.png";
import video_banner from "../../assets/video-banner.png";

const Banner = () => {
  return (
    <div className="home-banner-section h-screen flex items-center">
      <div className="container-sectionn w-[90%] m-auto max-w-[1400px]">
        <div className="banner-content flex flex-col lg:flex-row items-center justify-around">
          <div className="left mb-6 lg:mb-0 z-10">
            <h1 className="text-[32px] lg:text-[59px] mb-5 text-white  font-blod leading-10 lg:leading-[86px]">
              Architecture Design <br /> Dream Buildings{" "}
            </h1>
            <p className="text-[16px] text-white leading-6">
              There are many variations of passages of Lorem Ipsum available,
              but the <br /> majority have suffered alteration in some form, by
              injected humour, or <br /> randomised words which
            </p>
            <div className="banner-btn mt-14 flex items-center gap-3">
              <button className="bg-[#ECA76E] rounded-[4px] text-white px-3 py-3">
                Explore Now
              </button>
              <button className="flex items-center  text-[18px] text-white">
                <img src={video_banner} alt="" />
                Watch Video
              </button>
            </div>
          </div>
          <div className="right z-10">
            <img src={banner_right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

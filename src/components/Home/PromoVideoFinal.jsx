import React, { useState } from "react";
import banner_right from "../../assets/banner-right.png";
import video_logo from "../../assets/promo/video-logo.png";
import promo_modal from "../../assets/promo/promo-modal.png";

const PromoVideoFinal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className="promo my-[110px] h-screen flex items-center py-[52px] lg:py-0">
      <div className="container-sectionn w-[90%] m-auto max-w-[1400px]">
        <div className="pormo-content flex flex-col lg:flex-row items-center justify-around">
          <div className="left mb-6 lg:mb-0 z-10">
            <p className="text-[16px] font-[500] text-[#ECA76E] uppercase">
              Promo video
            </p>
            <h1 className="text-[24px] lg:text-[36px] mb-5 text-white  font-blod leading-9 lg:leading-[45px]">
              Ensuring a safe experience <br /> from design to installation
            </h1>
            <p className="text-[15px] font-[400] text-[#FFFFFFB2] leading-6">
              Nurani Interior possesses vast experience in the Interior Design
              industry having a <br /> large technical resource of Interior
              Designers, Architects, Electrical & Civil <br /> Engineers. We are
              also privileged to develop some significant interior projects{" "}
              <br /> since 2010.
            </p>
            <button className="bg-[#ECA76E] rounded-[4px] text-white px-5 py-3 uppercase flex items-center gap-3 mt-[30px]">
              more videos
              <img src={video_logo} alt="" />
            </button>
          </div>
          <div className="right relative z-10">
            {/* Promo Modal Image */}
            <img src={promo_modal} alt="" className="w-full" />

            {/* Centered Circular Div */}
            <div
              className="logo absolute inset-0 flex items-center justify-center"
              onClick={openModal}
            >
              <div className="h-[50px] w-[50px] bg-transparent border border-white rounded-full flex items-center justify-center">
                <img className="w-[24px] h-[24px]" src={video_logo} alt="" />
              </div>
            </div>
          </div>

          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[600px] relative">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold z-50"
                >
                  ✖
                </button>

                {/* YouTube Video */}
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                    src="https://www.youtube.com/embed/xNRJwmlRBNU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromoVideoFinal;

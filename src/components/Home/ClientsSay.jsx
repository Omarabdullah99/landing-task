import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import one from "../../assets/client/1.png";
import two from "../../assets/client/2.png";
import three from "../../assets/client/3.png";

const ClientsSay = () => {
  const data = [
    {
      image: one,
      name: "James Pattinson",
      des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum",
      star: 4,
    },
    {
      image: two,
      name: "Greg Stuart",
      des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum",
      star: 4,
    },
    {
      image: three,
      name: "James Pattinso",
      des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum",
      star: 4,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="client my-[110px]">
      <div className="container-sectionn w-[90%] m-auto max-w-[1400px]">
        <h1 className="text-[24px] lg:text-[42px] font-bold leading-5 lg:leading-6 mb-[60px] text-center"><span className="text-[#ECA76E]">What Clients </span>Are Saying</h1>
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-lg p-6 mx-[10px] flex flex-col items-center justify-between max-h-[390px] max-w-full md:max-w-[98%] border"
              >
                <img
                  src={item.image}
                  className="m-auto max-w-[100px] h-auto"
                  alt={item.name}
                />
                <p className="text-center my-[25px] font-bold text-lg">
                  {item.name}
                </p>
                <p className="text-center text-sm text-gray-600 leading-6">
                  {item.des}
                </p>
                {/* ⭐ Star Rating Section */}
                <div className="flex justify-center my-[30px] space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < item.star ? "text-yellow-500 font-bold text-xl" : "text-gray-400 text-xl"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ClientsSay;

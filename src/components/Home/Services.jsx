import React from "react";
import one from "../../assets/services/1.png";
import two from "../../assets/services/2.png";
import three from "../../assets/services/3.png";
import four from "../../assets/services/4.png";
import five from "../../assets/services/5.png";
import arrow_right from "../../assets/arrow-right.png";
const services = [
  {
    img: one,
    title: "Architecture",
    des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in so",
  },
  {
    img: two,
    title: "Professional Deign",
    des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in so",
  },
  {
    img: three,
    title: "Exterior Design",
    des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in so",
  },
  {
    img: four,
    title: "Interior Design",
    des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in so",
  },
  {
    img: five,
    title: "Perfect Planning",
    des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in so",
  },
];

const Services = () => {
  return (
    <div className="services my-[110px]">
      <div className="w-[90%] m-auto">
        {/* grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* frist paragraph */}
          <div className="col-span-1 flex flex-col  justify-center p-0 md:p-8">
            <h2 className="text-[24px] leading-8 lg:text-[40px] lg:leading-[50px] font-bold mb-4">
              Services <br /> Provided By Us
            </h2>
            <p className="text-[18px] font-[400] leading-7 text-[#101010A8] ">
              There are many variations of passages of <br /> Lorem Ipsum{" "}
            </p>
            <button className="bg-[#ECA76E] rounded-[2px] text-white px-4 py-3 w-[134px] mt-4">
              Learn More
            </button>
          </div>

          {/* Architecture */}
          <div className="col-span-1  p-6   text-center service-card">
            <div className="flex items-center justify-center mb-3">
              <img className="h-[66px] w-[66px]" src={services[0].img} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{services[0].title}</h3>
            <p className=" text-gray-600 mb-4">{services[0].des}</p>
            <button className="text-[#ECA76E] flex items-center   gap-3 justify-center mx-auto">
              Learn more
              <img className="mt-[6px]" src={arrow_right} alt="" />
            </button>
          </div>

          {/* Professional Design */}
          <div className="col-span-1  p-6   text-center service-card">
            <div className="flex items-center justify-center mb-3">
              <img className="h-[66px] w-[66px]" src={services[1].img} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{services[1].title}</h3>
            <p className="text-gray-600 mb-4">{services[1].des}</p>
            <button className="text-[#ECA76E] flex items-center   gap-3 justify-center mx-auto">
              Learn more
              <img className="mt-[6px]" src={arrow_right} alt="" />
            </button>
          </div>

          {/* second raw */}
          <div className="col-span-1  p-6   text-center service-card">
            <div className="flex items-center justify-center mb-3">
              <img className="h-[66px] w-[66px]" src={services[2].img} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{services[2].title}</h3>
            <p className="text-gray-600 mb-4">{services[2].des}</p>
            <button className="text-[#ECA76E] flex items-center   gap-3 justify-center mx-auto">
              Learn more
              <img className="mt-[6px]" src={arrow_right} alt="" />
            </button>
          </div>
          <div className="col-span-1  p-6   text-center service-card">
            <div className="flex items-center justify-center mb-3">
              <img className="h-[66px] w-[66px]" src={services[3].img} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{services[3].title}</h3>
            <p className="text-gray-600 mb-4">{services[3].des}</p>
            <button className="text-[#ECA76E] flex items-center   gap-3 justify-center mx-auto">
              Learn more
              <img className="mt-[6px]" src={arrow_right} alt="" />
            </button>
          </div>
          <div className="col-span-1  p-6   text-center service-card">
            <div className="flex items-center justify-center mb-3">
              <img className="h-[66px] w-[66px]" src={services[4].img} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{services[4].title}</h3>
            <p className="text-gray-600 mb-4">{services[4].des}</p>
            <button className="text-[#ECA76E] flex items-center   gap-3 justify-center mx-auto">
              Learn more
              <img className="mt-[6px]" src={arrow_right} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

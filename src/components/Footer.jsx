import React from "react";
import footer_logo from "../assets/footer-logo.png";
import {
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaLocationArrow,
  FaVoicemail,

} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const first = [
    {
      image: footer_logo,
      des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words 0 Latin ",
    },
  ];

  const catagories = [
    {
      title: "Categries",
      items: ["About Us", "Services", "Portfolio", "Blogs", "Contact Us"],
    },
  ];

  const services = [
    {
      title: "Our Services",
      items: [
        "Interior  Design",
        "Home Remodeling",
        "Architecture  design",
        "Office Renovation",
        "Perfect Planning",
      ],
    },
  ];

  const officeInfo = [
    {
      title: "Offce Information",
      address: [
        "6/5,South Rajarbag,Bashabo,",
        "Sabujbag, Dhaka1214",
        "Bangladesh",
      ],
      phone: " +8801324738600",
      gmail: "Helle@Untitedhaven.com",
    },
  ];
  return (
    <div className="Footer bg-black text-white overflow-hidden">
      
        <div className="footer-contend border-b-2 border-white mb-4">
          <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[35px] p-10">
          <div className="first md:border-r-2 md:border-white">
            {first.map((f) => (
              <div>
                <img src={f.image} alt="" />
                <p className="mb-[10px]">{f.des}</p>
                <p>Follow Us :</p>
                <div className="icons flex gap-4 mt-4">
                  <div className="icon h-[30px] w-[30px] rounded-full bg-white flex items-center justify-center">
                    <FaFacebookF className="text-black " />
                  </div>
                  <div className="icon h-[30px] w-[30px] rounded-full bg-white flex items-center justify-center">
                    <FaTwitter className="text-black " />
                  </div>
                  <div className="icon h-[30px] w-[30px] rounded-full bg-white flex items-center justify-center">
                    <FaLinkedinIn className="text-black " />
                  </div>
                  <div className="icon h-[30px] w-[30px] rounded-full bg-white flex items-center justify-center">
                    <FaInstagram className="text-black " />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="catagories md:border-r-2 md:border-white">
            {catagories.map((catagori) => (
              <div key={catagori.title}>
                <h3 className="mb-[20px]">{catagori.title}</h3>
                <ul>
                  {catagori.items.map((item, index) => (
                    <div key={index} className="flex gap-4 items-center mb-3">
                      <p className="h-[10px] w-[10px] bg-white rounded-full"></p>
                      <li>{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="services md:border-r-2 md:border-white">
            {services.map((catagori) => (
              <div key={catagori.title}>
                <h3 className="mb-[20px]">{catagori.title}</h3>
                <ul>
                  {catagori.items.map((item, index) => (
                    <div key={index} className="flex gap-4 items-center mb-3">
                      <p className="h-[10px] w-[10px] bg-white rounded-full"></p>
                      <li>{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="office-info ">
            {officeInfo.map((office) => (
              <div key={office.title}>
                <h3 className="mb-[20px]">{office.title}</h3>
                <div className="location flex  gap-4">
                  <FaLocationArrow />
                  <div>
                    {office.address.map((add, index) => (
                      <p key={index}>{add}</p>
                    ))}
                  </div>

                </div>
                <div className="phone flex items-center gap-4">
                  <FaPhone />
                  {office.phone}
                </div>
                <div className="email flex items-center gap-4">
                  <MdEmail />
                  {office.gmail}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div className="footer-last p-3 text-center ">
          <p>©Copyright United Haven 2023. All Rights Reserved </p>
        </div>
      
    </div>
  );
};

export default Footer;

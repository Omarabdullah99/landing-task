import React from "react";
import {
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const info = [
    {
      title: "Contact Us",
      items: [
        { icon: <FaPhone />, text: "+8801344738600" },
        { icon: <MdEmail />, text: "Hello@Planmarke.com" },
      ],
    },
    {
      title: "Our Hours",
      items: [
        { text: "We Are Open SAT - THUR" },
        { text: "08:30 - 05:00 (GMT 6+)" },
      ],
    },
    {
      title: "Location",
      items: [{ text: "89/7 Gopibag, Dhaka" }, { text: "1203, Bangladesh" }],
    },
    {
      title: "Social",
      items: [
        {
          icons: [
            <FaFacebookF />,
            <FaTwitter />,
            <FaLinkedinIn />,
            <FaInstagram />,
          ],
        },
      ],
    },
  ];

  return (
    <div className="about my-[110px]">
      <div className="container-sectionn w-[90%] m-auto max-w-[1400px]">
        <div className="contact-content flex flex-col lg:flex-row items-center justify-around gap-[30px]">
          <div className="left">
            <h3 className="text-[40px] font-bold leading-[48px] mb-[40px]">
              Get In <span className="text-[#ECA76E]">Touch</span>
            </h3>
            {/* info card start */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              {info.map((section, sectionIndex) => (
                <div key={sectionIndex} className="section mb-6 shadow p-8 ">
                  <h2 className="text-xl font-bold mb-4 text-[#ECA76E]">{section.title}</h2>
                  <ul className="space-y-2 ">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center space-x-2 "
                      >
                        {item.icon && (
                          <span className="text-lg">{item.icon}</span>
                        )}

                        {/* এখানে icons.map() শুধুমাত্র যদি icons অ্যারে থাকে তাহলেই চলবে */}
                        {Array.isArray(item.icons) && (
                          <div className="flex space-x-3 text-lg">
                            {item.icons.map((icon, index) => (
                              <span key={index}>{icon}</span>
                            ))}
                          </div>
                        )}

                        {item.text && (
                          <span className="text-md">{item.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* info card end */}
          </div>

          <div className="right">
           
              <div className="bg-black text-white p-8 rounded-lg w-full max-w-md shadow-lg">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Got Ideas/We’ve got The Skills <br />
                  Let’s Work Together.
                </h2>
                <p className="text-gray-400 text-sm mt-2">
                  Tell Us More About Yourself
                </p>

                <form className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Your full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-orange-500 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Your Email Id
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-orange-500 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Tell Us About You
                    </label>
                    <textarea
                      placeholder="Write something about you..."
                      className="w-full bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-orange-500 py-2 resize-none"
                      rows="3"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ECA76E] text-white py-2 rounded-md font-semibold"
                  >
                    Lets Get Started
                  </button>
                </form>
              </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

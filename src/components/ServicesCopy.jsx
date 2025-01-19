// src/components/ServicesSection.js
import React from "react";

const services = [
  {
    title: "Architecture",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    icon: "🏛️",
  },
  {
    title: "Professional Design",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    icon: "🎨",
  },
  {
    title: "Exterior Design",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    icon: "🏠",
  },
  {
    title: "Interior Design",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    icon: "🛋️",
  },
  {
    title: "Perfect Planning",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    icon: "📐",
  },
];

const ServicesSection = () => {
    return (
        <div className="container mx-auto p-6">
          {/* গ্রিড লেআউট */}
          <div className="grid grid-cols-3 gap-6">
            {/* শিরোনাম এবং প্যারাগ্রাফ */}
            <div className="col-span-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Services Provided By Us</h2>
              <p>There are many variations of passages of Lorem Ipsum</p>
            </div>
    
            {/* Architecture */}
            <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{services[0].icon}</div>
              <h3 className="text-xl font-semibold mb-2">{services[0].title}</h3>
              <p className="text-gray-600 mb-4">{services[0].description}</p>
              <a href="#" className="text-blue-500 hover:underline">Learn more</a>
            </div>
    
            {/* Professional Design */}
            <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{services[1].icon}</div>
              <h3 className="text-xl font-semibold mb-2">{services[1].title}</h3>
              <p className="text-gray-600 mb-4">{services[1].description}</p>
              <a href="#" className="text-blue-500 hover:underline">Learn more</a>
            </div>
    
            {/* দ্বিতীয় সারি */}
            <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{services[2].icon}</div>
              <h3 className="text-xl font-semibold mb-2">{services[2].title}</h3>
              <p className="text-gray-600 mb-4">{services[2].description}</p>
              <a href="#" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{services[3].icon}</div>
              <h3 className="text-xl font-semibold mb-2">{services[3].title}</h3>
              <p className="text-gray-600 mb-4">{services[3].description}</p>
              <a href="#" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{services[4].icon}</div>
              <h3 className="text-xl font-semibold mb-2">{services[4].title}</h3>
              <p className="text-gray-600 mb-4">{services[4].description}</p>
              <a href="#" className="text-blue-500 hover:underline">Learn more</a>
            </div>
          </div>
        </div>
      );
};

export default ServicesSection;

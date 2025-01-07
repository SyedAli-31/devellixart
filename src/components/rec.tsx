import React from "react";
import {  FaReact, FaJs } from "react-icons/fa";
import "@fontsource/montserrat"; // For Montserrat
import { BsFiletypePhp, BsFiletypeCss } from "react-icons/bs";

const Recent: React.FC = () => {
  return (
    <section className="bg-gray-50 mt-4">
      {/* Top Section */}
      <div className="relative bg-gradient-to-b from-blue-900 via-blue-100 to-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Column: Image */}
          <div className="relative">
            <div className="relative w-full h-auto aspect-square rounded-lg overflow-hidden">
              <div className="clip-custom w-full h-full">
                <img
                  src="/service.png" // Replace with the correct image path
                  alt="Team Collaboration"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div>
            <p
              className="text-red-600 text-[14px] font-extrabold mb-4"
              style={{ fontWeight: 800,fontFamily: "Arial",
                }}
            >
              // EXPERIENCE. EXECUTION. EXCELLENCE.
            </p>
            <h2
              className="text-[34px] text-[#1F1D1D] font-extrabold leading-tight mb-6"
              style={{
                fontFamily: "Arial",
                fontWeight: 800,
              }}
            >
              What We Actually Do
            </h2>

            {/* Icons Section */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="text-red-500 border-2 border-red-500 p-4 rounded-md hover:bg-red-500 hover:text-white transition">
                <BsFiletypePhp size={40} />
              </div>
              <div className="text-red-500 border-2 border-red-500 p-4 rounded-md hover:bg-red-500 hover:text-white transition">
                <FaReact size={40} />
              </div>
              <div className="text-red-500 border-2 border-red-500 p-4 rounded-md hover:bg-red-500 hover:text-white transition">
                <FaJs size={40} />
              </div>
              <div className="text-red-500 border-2 border-red-500 p-4 rounded-md hover:bg-red-500 hover:text-white transition">
                <BsFiletypeCss size={40} />
              </div>
            </div>

            {/* Text Description */}
            <h3 className="text-[20px] font-bold mb-4">2D and 3D Animation</h3>
            <p className="text-[#1F1D1D] text-[16px] font-semibold mb-4">
              Engaging characters and stories. <br /> Immersive 3D Animation:
              Realistic visuals and <br /> environments. <br /> Motion Graphics: Dynamic
              visuals to elevate your <br /> brand.
            </p>

            {/* Learn More Button */}
            <a
              href="#"
              className="inline-block text-red-500 hover:text-white hover:bg-red-500 border-2 border-red-500 px-6 py-2 rounded-lg font-semibold transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recent;

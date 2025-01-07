import React from "react";
import "@fontsource/montserrat"; // For Montserrat
import "@fontsource/nunito-sans"; // For Nunito Sans
import Image from "next/image";

const ChooseUs: React.FC = () => {
  return (
    <div className="relative mx-auto py-8 px-4 sm:px-6 lg:px-12">
      {/* Triangle Background: Visible on desktop only */}
      <div className="absolute inset-0 w-[0] h-0 border-l-[98.7vw] border-b-[50vh] border-t-[25vh] border-t-blue-950 z-0 md:block hidden"></div>
      
      {/* Content Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center mt-12 justify-center md:justify-start">
            <div
              className="bg-blue-700 text-white py-2 px-4 font-bold text-xl sm:text-2xl lg:text-3xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              WHY CHOOSE US?
            </div>
            <div className="w-3 h-10 sm:h-12 bg-yellow-500"></div>
          </div>

          <div className="mt-6 space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4 justify-center md:justify-start">
              <div className="flex-shrink-0">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 9v2a6 6 0 11-12 0V9m3 9h6m-3-3v3m5-16v1a3 3 0 11-6 0V2"
                  />
                </svg>
              </div>
              <p
                className="text-gray-700 text-base sm:text-lg"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Our team consists of experienced designers and <br /> developers with a
                proven track record in delivering <br /> high-quality projects.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4 justify-center md:justify-start">
              <div className="flex-shrink-0">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343-3 3-1.343-3-3-3 3-1.343 3-3-1.343 3-3 3z"
                  />
                </svg>
              </div>
              <p
                className="text-gray-700 text-base sm:text-lg"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Diverse Portfolio: We have successfully completed <br /> numerous
                projects across various industries, showcasing <br /> our versatility and
                expertise.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4 justify-center md:justify-start">
              <div className="flex-shrink-0">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4a1 1 0 011-1h1m0-4h-4m6-2H5a2 2 0 00-2 2v6h16V6a2 2 0 00-2-2zm0 8v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2m0 0H3"
                  />
                </svg>
              </div>
              <p
                className="text-gray-700 text-base sm:text-lg"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                We understand that every business is unique, and <br /> we provide
                customized solutions that align with your <br /> specific needs and
                objectives.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4 justify-center md:justify-start">
              <div className="flex-shrink-0">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12m-3-9a9 9 0 100 18 9 9 0 100-18zm-1 7h4m-4 3h4m-7-7h3"
                  />
                </svg>
              </div>
              <p
                className="text-gray-700 text-base sm:text-lg"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Collaboration: We work closely with you throughout <br /> the project
                lifecycle, ensuring that your vision is realized <br /> and expectations
                are exceeded.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
          <Image
            src={"/chose.jpg"}
            alt="chose"
            width={300}
            height={200}
            className="h-[200px] w-[300px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

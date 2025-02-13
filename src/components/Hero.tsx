import React from "react";


const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        src="/videos/furistic.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay for Text Visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        {/* Left Content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center md:text-left">
          <p className="text-gray-300 text-sm md:text-base">
            \ For Over 8 Years. For Millions of Users
          </p>
          <h1 className="font-bold text-4xl md:text-6xl leading-tight mt-4">
            Empowering Your
            <br />
            Digital Transformation
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            We are 100+ professional software engineers with more than
            <br />
            10 years of experience in delivering superior products.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-100">
            Read More
          </button>
        </div>
      </div>
      
      

      
    </div>
  );
};

export default HeroSection;

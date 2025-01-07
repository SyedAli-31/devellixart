import Image from "next/image";
import React from "react";

const SecRecent: React.FC = () => {
  const services = [
    {
      title: "Graphic Design",
      image: "/graphic.jpeg", // Replace with actual image path
      hoverText: `Striking Interfaces: Beautiful and functional.
User Delight: Smooth, enjoyable experiences.
Interactive Prototypes: Visualize and refine.`,
    },
    {
      title: "2D/3D Models & Animations",
      image: "/model.png", // Replace with actual image path
      hoverText: `Captivating 2D Animation: Engaging characters and stories.
Immersive 3D Animation: Realistic visuals and environments.
Motion Graphics: Dynamic visuals to elevate your brand.`,
    },
    {
      title: "Website Development",
      image: "/web.jpg", // Replace with actual image path
      hoverText: `Custom Creations: Stunning, unique websites.
Seamless Experience: Perfect on every device.
E-Commerce Magic: Powerful online stores.`,
    },
    {
      title: "Mobile Application Development",
      image: "/mobile.png", // Replace with actual image path
      hoverText: `Dynamic Apps: High-performance for iOS & Android.
Engaging Design: Intuitive, user-focused.
Universal Access: Consistent across all platforms.`,
    },
    {
      title: "Software Development",
      image: "/software.jpeg", // Replace with actual image path
      hoverText: `Tailored Tech: Bespoke software solutions.
Smooth Integration: Works with what you have.
Continuous Support: Always up-to-date.`,
    },
    {
      title: "SEO",
      image: "/seo.webp", // Replace with actual image path
      hoverText: `SEO Mastery: Climb search rankings.
Social Media Buzz: Engaging campaigns.
Targeted Ads: Maximize your ROI.`,
    },
  ];

  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        src="/videos/secrec.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[255vh] lg:h-[120vh] object-cover z-0"
      />

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <section className="py-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mb-2">
              We Offer a Wide <br /> Variety of IT Services
            </h2>

            {/* Blue Line */}
            <div className="mx-auto w-[50px] lg:w-[150px] h-1 bg-blue-500 z-10" />

            {/* Red Line */}
            <div className="mx-auto w-[50px] md:w-[80px] h-1 bg-red-500 mt-2 z-10" />
          </div>

          {/* Service Grid */}
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
                style={{
                  height: "312px", // Fixed height for mobile view
                  width: "312px", // Fixed width for mobile view
                }}
              >
                {/* Service Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Title Always Visible */}
                <div className="absolute top-4 left-4 bg-black/50 text-white text-sm md:text-lg font-bold px-3 py-1 rounded-md">
                  {service.title}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:bg-black/70 transition-colors duration-500"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-line mb-4">
                    {service.hoverText}
                  </p>
                  <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecRecent;

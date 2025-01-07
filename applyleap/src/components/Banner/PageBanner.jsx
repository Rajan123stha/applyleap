import React from "react";

export const PageBanner = ({ title, image }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white flex items-center justify-center mb-4"
      style={{
        backgroundImage: `url(${image})`, // Background image
      }}
    >
      {/* Full-height adjustments for different devices */}
      <div className="w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-screen py-12 px-6 md:px-12 lg:px-24 flex items-center justify-center">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </section>
  );
};

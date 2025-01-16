import React from "react";
import Banner from "./../../assets/home-baner.jpg"; // Ensure this is the correct path to your image
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white flex items-center md:pt-10 justify-center mt-16"
      style={{
        backgroundImage: `url(${Banner})`, // Set the background image
      }}
    >
      {/* Ensure proper height for different devices */}
      <div className="w-full min-h-[50vh] md:min-h-[50vh] lg:min-h-[85vh] py-12 px-6 md:px-12 lg:px-24">
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white bg-opacity-20"></div>

        {/* Content */}
        <div className="relative  text-left max-w-6xl mx-auto space-y-6 text-black lg:space-y-10">
          <h1 className="text-lg md:text-3xl lg:text-4xl font-bold ">
            Unlock Your Path to Global Education
          </h1>
          <p className="text-sm md:text-base w-2/3 text-left  lg:w-2/5">
            Get all the information you need to pursue your dreams abroad—
            independently and confidently.
          </p>

          <Button label="Explore" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

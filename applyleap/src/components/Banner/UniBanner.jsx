import React from "react";
import Button from "../Button/Button";
import { BASE_URL } from "../../config";

export const UniBanner = ({ label, image, quote, title }) => {
  const baseUrl = BASE_URL; // Replace with your backend URL
  const imageUrl = `${baseUrl}${image?.url}`;
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white flex items-center md:pt-10 justify-center"
      style={{
        backgroundImage: `url(${imageUrl})`, // Set the background image
      }}
    >
      {/* Ensure proper height for different devices */}
      <div className="w-full min-h-[40vh] md:min-h-[40vh] lg:min-h-[40vh] py-12 px-6 md:px-12 lg:px-24">
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Content */}
        <div className="relative mt-6 text-left max-w-6xl mx-auto space-y-6 text-white lg:space-y-8">
          <h1 className="text-lg md:text-3xl lg:text-4xl font-bold ">
            {title}
          </h1>
          <p className="text-sm md:text-base  text-left md:w-3/5 lg:w-2/5">
            {quote}
          </p>

          <Button label={label} />
        </div>
      </div>
    </section>
  );
};
export default UniBanner;

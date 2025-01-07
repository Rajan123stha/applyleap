import React from "react";

export const ImageBanner = ({ image }) => {
  const baseUrl = "http://127.0.0.1:8000"; // Replace with your backend URL
  const imageUrl = `${baseUrl}${image?.url}`;
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white flex items-center md:pt-10 justify-center mt-16"
      style={{
        backgroundImage: `url(${imageUrl})`, // Set the background image
      }}
    >
      {/* Ensure proper height for different devices */}
      <div className="w-full min-h-[50vh] md:min-h-[50vh] lg:min-h-[85vh] py-12 px-6 md:px-12 lg:px-24"></div>
    </section>
  );
};

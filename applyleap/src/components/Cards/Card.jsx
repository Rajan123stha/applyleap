import React from "react";

export const Card = ({ blog }) => {
  const baseUrl = "http://127.0.0.1:8000"; // Replace with your backend URL

  const generateImageUrl = (image) => {
    const url = image.url;
    return `${baseUrl}${url}`;
  };

  const truncateTitle = (title, maxWords) => {
    const words = title.split(" ");
    if (words.length > maxWords) {
      return `${words.slice(0, maxWords).join(" ")}...`;
    }
    return title;
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <div className="relative w-full">
        <img
          src={generateImageUrl(blog.image)}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-3 pb-2">
        <h3
          className="text-lg text-left font-medium text-gray-800"
          title={blog.title} // Show full title on hover
        >
          {truncateTitle(blog.title, 8)} {/* Show truncated title */}
        </h3>
      </div>

      {/* Writer and Date */}
      <div className="p-3 pt-0 flex justify-between items-center ">
        <p className="font-sm text-gray-500">{blog.writer}</p>
        <p className="font-sm text-gray-400">{blog.date}</p>
      </div>
    </div>
  );
};

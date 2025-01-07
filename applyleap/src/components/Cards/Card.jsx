import React from "react";

export const Card = ({ index, blog }) => {
  return (
    <>
      <div
        key={index}
        className="flex flex-col  bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
      >
        {/* Image Section */}
        <div className="relative w-full">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="p-3 pb-2">
          <h3 className="text-lg text-left font-medium text-gray-800">
            {blog.title}
          </h3>
        </div>

        {/* Writer and Date */}
        <div className="p-3 pt-0 flex justify-between items-center ">
          <p className="font-sm text-gray-500">{blog.writer}</p>
          <p className="font-sm text-gray-400">{blog.date}</p>
        </div>
      </div>
    </>
  );
};

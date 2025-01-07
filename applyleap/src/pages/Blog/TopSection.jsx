import React from "react";
import { ImageBanner } from "../../components/Banner/ImageBanner";
import Image from "../../assets/images/blog.jpg";
import Button from "../../components/Button/Button";

const TopSection = ({ data }) => {
  return (
    <>
      <div className=" container flex flex-col border-b border-gray-200 pb-4 mb-4 mt-12  px-6 md:px-10  mx-auto space-y-6">
        {/* Top Section: Name and Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full">
              <img src={Image} alt="Writer" />
              {/* Placeholder for writer image */}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {data.writer}
              </p>
              <p className="text-xs text-gray-500">Writer</p>
            </div>
          </div>
          <Button label="Follow" />
        </div>

        {/* Bottom Section: Article Title */}
        <h1 className=" text-lg lg:text-2xl font-bold text-gray-900 text-left mt-4">
          {data.title}
        </h1>
      </div>
    </>
  );
};

export default TopSection;

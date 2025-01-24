import React from "react";
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa"; // React Icons for Location and University
// Replace with your actual file paths
import { BASE_URL } from "../../config";

const UniversityCard = (university) => {
  const baseUrl = BASE_URL;
  const generateImageUrl = (image) => {
    const url = image.url;

    return `${baseUrl}${url}`;
  };
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <div className="relative w-full">
        <img
          src={generateImageUrl(university.image)}
          alt={university.name}
          className="w-full h-48 object-cover"
        />
        {/* Ranking Badge */}
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          #{university.ranking} World Ranking
        </div>
      </div>
      {/* University Details */}
      <div className="p-4">
        <div className="flex items-center mb-2">
          {/* University Icon */}
          <FaUniversity className="text-blue-500 text-2xl mr-2" />
          {/* University Name */}
          <h3 className="text-lg font-medium text-gray-800">
            {university.name}
          </h3>
        </div>
        {/* Location */}
        <div className="flex items-center text-sm text-gray-500">
          <FaMapMarkerAlt className="mr-2 text-blue-500" />
          <span>{university.location}</span>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;

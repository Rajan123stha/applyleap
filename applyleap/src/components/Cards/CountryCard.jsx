import React from "react";
import { FaMapMarkerAlt, FaFlag, FaLeaf, FaLandmark } from "react-icons/fa"; // Icons for related logos

const CountryCard = ({ country }) => {
  const baseUrl = "http://127.0.0.1:8000";
  const generateImageUrl = (image) => {
    const url = image.url;

    return `${baseUrl}${url}`;
  };
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <div className="relative w-full">
        <img
          src={generateImageUrl(country.image)}
          alt={country.name}
          className="w-full h-48 object-cover"
        />
        {/* Badge or Icon */}
        <div className="absolute top-4 right-4">
          <FaFlag className="text-red-500 text-3xl" />
        </div>
      </div>
      {/* Country Details */}
      <div className="p-4">
        <div className="flex items-center mb-2">
          {/* Location Icon */}
          <FaMapMarkerAlt className="text-blue-500 text-lg mr-2" />
          {/* Country Name */}
          <h3 className="text-lg font-medium text-gray-800">{country.name}</h3>
        </div>
        {/* Short Description */}
        <p className="text-sm text-gray-600">{country.description}</p>
      </div>
    </div>
  );
};

export default CountryCard;

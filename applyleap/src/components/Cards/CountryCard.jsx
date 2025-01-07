import React from "react";
import { FaMapMarkerAlt, FaFlag, FaLeaf, FaLandmark } from "react-icons/fa"; // Icons for related logos
import AustraliaImage from "../../assets/australia.jpg"; // Replace with your actual file paths
import CanadaImage from "../../assets/canada.jpg";
import UkImage from "../../assets/uk.jpg";
import UsaImage from "../../assets/uk.jpg";
import Button from "../Button/Button";

const countries = [
  {
    name: "Australia",
    image: AustraliaImage,
    description:
      "Known for its high-quality education and beautiful landscapes.",
    icon: <FaFlag className="text-red-500 text-3xl" />, // Related icon for Australia
  },
  {
    name: "Canada",
    image: CanadaImage,
    description: "A hub for international students with top universities.",
    icon: <FaLeaf className="text-red-500 text-3xl" />, // Maple leaf for Canada
  },
  {
    name: "UK",
    image: UkImage,
    description:
      "Rich in history and home to some of the world's best universities.",
    icon: <FaLandmark className="text-red-500 text-3xl" />, // Landmark icon for UK
  },
  {
    name: "USA",
    image: UsaImage,
    description: "Offers a wide range of programs and global opportunities.",
    icon: <FaFlag className="text-red-500 text-3xl" />, // Flag for USA
  },
];

const CountryCard = () => {
  return (
    <div className="container mx-auto px-10 py-4">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-6">
        <h1 className="font-bold text-2xl lg:text-3xl mb-4 lg:mb-0">
          Popular Destinations
        </h1>
        {/* View More Button */}
        <div className="hidden lg:block">
          <Button label="View More" />
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Image Section */}
            <div className="relative w-full">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-48 object-cover"
              />
              {/* Badge or Icon */}
              <div className="absolute top-4 right-4">{country.icon}</div>
            </div>
            {/* Country Details */}
            <div className="p-4">
              <div className="flex items-center mb-2">
                {/* Location Icon */}
                <FaMapMarkerAlt className="text-blue-500 text-lg mr-2" />
                {/* Country Name */}
                <h3 className="text-lg font-medium text-gray-800">
                  {country.name}
                </h3>
              </div>
              {/* Short Description */}
              <p className="text-sm text-gray-600">{country.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button for Small and Medium Devices */}
      <div className="flex justify-center lg:hidden mt-6">
        <Button label="View More" />
      </div>
    </div>
  );
};

export default CountryCard;

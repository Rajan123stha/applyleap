import React from "react";
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa"; // React Icons for Location and University
import AustraliaImage from "../../assets/australia.jpg"; // Replace with your actual file paths
import CanadaImage from "../../assets/canada.jpg";
import UkImage from "../../assets/uk.jpg";
import Button from "../Button/Button";

const universities = [
  {
    name: "University of Melbourne",
    image: AustraliaImage,
    location: "Melbourne, Australia",
    ranking: "#37 World Ranking",
  },
  {
    name: "University of Toronto",
    image: CanadaImage,
    location: "Toronto, Canada",
    ranking: "#18 World Ranking",
  },
  {
    name: "University of Oxford",
    image: UkImage,
    location: "Oxford, United Kingdom",
    ranking: "#1 World Ranking",
  },
  {
    name: "University of California",
    image: UkImage,
    location: "California, USA",
    ranking: "#32 World Ranking",
  },
];

const UniversityCard = () => {
  return (
    <div className="container mx-auto px-10 py-4">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-6">
        <h1 className="font-bold text-2xl lg:text-3xl mb-4 lg:mb-0">
          Popular Universities
        </h1>
        {/* View More Button */}
        <div className="hidden lg:block">
          <Button label="View More" />
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {universities.map((university, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Image Section */}
            <div className="relative w-full">
              <img
                src={university.image}
                alt={university.name}
                className="w-full h-48 object-cover"
              />
              {/* Ranking Badge */}
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {university.ranking}
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
        ))}
      </div>

      {/* View More Button for Small and Medium Devices */}
      <div className="flex justify-center lg:hidden mt-6">
        <Button label="View More" />
      </div>
    </div>
  );
};

export default UniversityCard;

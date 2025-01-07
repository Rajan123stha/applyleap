import React from "react";
import {
  FaSearch,
  FaFileAlt,
  FaUniversity,
  FaPassport,
  FaPlane,
  FaHome,
} from "react-icons/fa"; // Relevant icons for each step
import Research from "../../assets/canada.jpg"; // Replace with your local image

function StudyAbroadPath() {
  const steps = [
    {
      title: "Research",
      description: "Preparing documents, writing SOPs, and applying.",
      image: Research,
      icon: <FaSearch className="text-blue-600 text-2xl" />,
    },
    {
      title: "Application",
      description: "Submit your applications to universities.",
      image: Research,
      icon: <FaFileAlt className="text-green-500 text-2xl" />,
    },
    {
      title: "Acceptance",
      description: "Receive offers from universities.",
      image: Research,
      icon: <FaUniversity className="text-yellow-500 text-2xl" />,
    },
    {
      title: "Visa Process",
      description: "Complete your visa application.",
      image: Research,
      icon: <FaPassport className="text-red-500 text-2xl" />,
    },
    {
      title: "Pre-Departure",
      description: "Plan your travel and prepare for the journey.",
      image: Research,
      icon: <FaPlane className="text-blue-400 text-2xl" />,
    },
    {
      title: "Arrival",
      description: "Settle in and begin your program.",
      image: Research,
      icon: <FaHome className="text-purple-500 text-2xl" />,
    },
  ];

  return (
    <div className="container mx-auto px-10 py-8">
      {/* Heading Section */}
      <h2 className="text-2xl font-bold text-center mb-8">
        Your Path to Studying Abroad
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Step Number */}
            <div className="absolute left-1/2 transform -translate-x-1/2  bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-lg">
              {index + 1}
            </div>
            {/* Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              {/* Icon */}
              {/* Image */}
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              {/* Title */}
              <h3 className="text-lg flex font-bold text-gray-800 mb-2">
                {step.title} <span className="ml-2">{step.icon}</span>
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyAbroadPath;

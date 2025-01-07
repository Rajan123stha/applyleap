import React from "react";
import { FaArrowRight } from "react-icons/fa";
import AIImage from "../../assets/australia.jpg"; // Replace with your actual file paths
import ITImage from "../../assets/canada.jpg";
import BusinessImage from "../../assets/uk.jpg";
import Button from "../Button/Button";

import { AiFillRobot } from "react-icons/ai"; // AI & ML icon
import { FaLaptopCode, FaBusinessTime } from "react-icons/fa"; // IT & Business icons
import { MdDesignServices } from "react-icons/md"; // Design icon

const courses = [
  {
    name: "Artificial Intelligence",
    image: AIImage,
    description: "Explore the future of AI and machine learning.",
    field: "AI & ML",
    duration: "8 Weeks",
    icons: [<AiFillRobot size={24} />, <FaLaptopCode size={24} />],
  },
  {
    name: "Information Technology",
    image: ITImage,
    description: "Learn IT fundamentals and advanced concepts.",
    field: "IT",
    duration: "6 Weeks",
    icons: [<FaLaptopCode size={24} />, <FaBusinessTime size={24} />],
  },
  {
    name: "Business Management",
    image: BusinessImage,
    description: "Master the skills to lead and grow businesses.",
    field: "Management",
    duration: "10 Weeks",
    icons: [<FaBusinessTime size={24} />, <MdDesignServices size={24} />],
  },
  {
    name: "Graphic Design",
    image: ITImage,
    description: "Unleash your creativity with visual design tools.",
    field: "Design",
    duration: "5 Weeks",
    icons: [<MdDesignServices size={24} />, <AiFillRobot size={24} />],
  },
];

const CourseCard = () => {
  return (
    <div className="container mx-auto px-10 py-8">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-6">
        <h1 className="font-bold text-2xl lg:text-3xl mb-4 lg:mb-0">
          Popular Courses
        </h1>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* Image Section */}
            <div className="relative w-full">
              <img
                src={course.image}
                alt={`Image of ${course.name}`}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Course Details */}
            <div className="p-4">
              {/* Title and Field */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.name}
                </h3>
                <span className="text-sm text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
                  {course.field}
                </span>
              </div>

              {/* Course Duration */}
              <p className="text-gray-600 text-sm mb-2">
                <strong>Duration:</strong> {course.duration}
              </p>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4">{course.description}</p>

              {/* Related Logos (React Icons) */}
              <div className="flex space-x-2 text-gray-700">
                {course.icons.map((Icon, idx) => (
                  <div key={idx} className="p-2 bg-gray-100 rounded-full">
                    {Icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;

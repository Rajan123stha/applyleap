import React from "react";
import { AiFillRobot } from "react-icons/ai"; // AI & ML icon
import {
  FaLaptopCode,
  FaBusinessTime,
  FaStethoscope,
  FaPaintBrush,
} from "react-icons/fa"; // IT & Business icons
import { MdDesignServices } from "react-icons/md"; // Design icon
const CourseCard = ({ course }) => {
  const baseUrl = "http://127.0.0.1:8000";
  const generateImageUrl = (image) => {
    const url = image.url;

    return `${baseUrl}${url}`;
  };
  // Function to map fields to icons
  const getFieldIcon = (field) => {
    const fieldIcons = {
      Engineering: <AiFillRobot size={24} />,
      Design: <MdDesignServices size={24} />,
      Robotics: <AiFillRobot size={24} />,
      Medicine: <FaStethoscope size={24} />,
      Arts: <FaPaintBrush size={24} />,
      Management: <FaBusinessTime size={24} />,
      Default: <FaLaptopCode size={24} />, // Default icon for unspecified fields
    };

    return fieldIcons[field] || fieldIcons["Default"];
  };
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <div className="relative w-full">
        <img
          src={generateImageUrl(course.image)}
          alt={`Image of ${course.name}`}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Course Details */}
      <div className="p-4">
        {/* Title and Field */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
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
          <div className="icon">{getFieldIcon(course.field)}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

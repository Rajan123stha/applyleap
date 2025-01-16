import React, { useEffect, useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import AIImage from "../../assets/australia.jpg"; // Replace with your actual file paths
import ITImage from "../../assets/canada.jpg";
import BusinessImage from "../../assets/uk.jpg";

import { AiFillRobot } from "react-icons/ai"; // AI & ML icon
import { FaLaptopCode, FaBusinessTime } from "react-icons/fa"; // IT & Business icons
import { MdDesignServices } from "react-icons/md"; // Design icon
import CourseCard from "../../components/Cards/CourseCard";
import { fetchCourses } from "../../Api";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const CourseSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getDestinations();
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Trim leading/trailing hyphens
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!courses) return <div>No data available</div>;

  return (
    <div className="container mx-auto px-10 py-8">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-6">
        <h1 className="font-bold text-2xl lg:text-3xl mb-4 lg:mb-0">
          Popular Courses
        </h1>
        <div className="hidden lg:block">
          <Link to={`/courses`}>
            <Button label="View More" />
          </Link>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {courses.slice(0, 5).map((course, index) => (
          <Link to={`/courses/${generateSlug(course.name)}`} key={index}>
            <CourseCard course={course} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;

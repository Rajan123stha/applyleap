import React, { useEffect, useState } from "react";
import image from "../../assets/images/courses.webp";

import { fetchCourses } from "../../Api";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { PageBanner } from "../../components/Banner/PageBanner";
import CourseCard from "../../components/Cards/CourseCard";

const CourseIndex = () => {
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
    <>
      <PageBanner title="" image={image} />
      <div className="container mx-auto px-10 py-8">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center py-6">
          <h1 className="font-bold text-2xl lg:text-3xl mb-4 lg:mb-0">
            Courses Available
          </h1>
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
    </>
  );
};

export default CourseIndex;

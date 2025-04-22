import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseBySlug } from "../../Api";
import { CourseDetails } from "./CourseDetails";
import UniBanner from "../../components/Banner/UniBanner";
import FAQ from "../../components/FAQ/FAQ";

const Course = () => {
  const { slug } = useParams();
  const [course, setTCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch the course page based on the slug
        const page = await fetchCourseBySlug(slug);

        if (page) {
          // Fetch detailed data for the destination

          setTCourse(page);
        }
      } catch (err) {
        setError("Failed to load  data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);
  console.log(course);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!course) return <div>No data available</div>;
  return (
    <div>
      <UniBanner
        label="Apply Now"
        image={course.bannerImage}
        quote={course.one_liner}
        title={course.title}
      />
      <CourseDetails course={course} />
      <FAQ faqs={course.faqs} />
    </div>
  );
};

export default Course;

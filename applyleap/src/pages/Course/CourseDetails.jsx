import React from "react";
import image from "../../assets/images/uk.jpg";
import { BASE_URL } from "../../config";

export const CourseDetails = ({ course }) => {
  console.log(course);
  const modules = course.course_details;

  const reviews = course.student_reviews;
  const baseUrl = BASE_URL; // Replace with your backend URL
  const generateImageUrl = (image) => {
    return `${baseUrl}${image}`;
  };

  return (
    <div className="container px-6 md:px-10 mx-auto space-y-6">
      {/* About the Course Section */}
      <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            About the Course
          </h2>
          <div
            className="text-gray-700 "
            dangerouslySetInnerHTML={{ __html: course.introduction }}
          />
        </div>
        <img
          src={image}
          alt="About Course"
          className="mt-6 lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60"
        />
      </section>

      {/* Key Highlights Section */}
      <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Key Highlights
          </h2>
          <div
            className="text-gray-700 "
            dangerouslySetInnerHTML={{ __html: course.key_highlights }}
          />
        </div>
        <img
          src={image}
          alt="Key Highlights"
          className="mt-6 lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60"
        />
      </section>

      {/* Modules Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Course Modules
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Module
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {modules?.map((module, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {module.field}
                  </td>
                  <td
                    className="border border-gray-300 px-4 py-2"
                    dangerouslySetInnerHTML={{ __html: module.description }}
                  ></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Admission Details Section */}
      <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Admission Details
          </h2>
          <div
            className="text-gray-700 "
            dangerouslySetInnerHTML={{ __html: course.admission_details }}
          />
        </div>
        <img
          src={image}
          alt="Admission Details"
          className="mt-6 lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60"
        />
      </section>

      {/* Student Reviews Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Student Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews?.map((review, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition duration-300"
            >
              <img
                src={generateImageUrl(review.image_url)}
                alt={`Reviewer ${review.name}`}
                className="rounded-md shadow-sm mb-4 object-cover h-40 w-full"
              />
              <h3 className="text-xl font-semibold text-blue-800">
                {review.name}
              </h3>
              <p
                className="text-gray-600 mt-2"
                dangerouslySetInnerHTML={{ __html: review.review }}
              />
            </div>
          ))}
        </div>
      </section>
      {/* Career Opportunities Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Career Opportunities
        </h2>
        <div
          className="text-gray-700 "
          dangerouslySetInnerHTML={{ __html: course.career_opportunities }}
        />
      </section>
    </div>
  );
};

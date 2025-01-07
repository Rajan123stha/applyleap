import React from "react";
import image from "../../assets/images/uk.jpg";

export const CourseDetails = () => {
  const modules = [
    {
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
    },
    {
      title: "Data Structures",
      description:
        "Understand essential data structures like arrays, lists, and trees.",
    },
    {
      title: "Web Development",
      description:
        "Explore the fundamentals of front-end and back-end web development.",
    },
  ];

  const reviews = [
    {
      name: "John Doe",
      comment: "This course gave me a great foundation in programming!",
      image_url: image,
    },
    {
      name: "Jane Smith",
      comment: "The modules are well-structured and easy to follow.",
      image_url: image,
    },
    {
      name: "Sam Wilson",
      comment: "A must-take course for anyone starting in tech.",
      image_url: image,
    },
  ];

  return (
    <div className="container px-6 md:px-10 mx-auto space-y-6">
      {/* About the Course Section */}
      <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            About the Course
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This course is designed to provide a comprehensive introduction to
            computer science and programming. Whether you're a complete beginner
            or looking to enhance your skills, this course covers essential
            topics and hands-on projects.
          </p>
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
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Comprehensive curriculum covering core concepts.</li>
            <li>Hands-on projects to build real-world skills.</li>
            <li>Experienced instructors with industry knowledge.</li>
          </ul>
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
              {modules.map((module, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {module.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {module.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <img
            src={image}
            alt="Alumni 1"
            className="rounded-md shadow-sm mb-4 object-cover h-40 w-full"
          />
          <h3 className="text-xl font-semibold text-black">John Doe</h3>
          <p className="text-gray-600">
            A CEO at a leading tech firm, John credits his success to the strong
            foundation and network he built at XYZ University.
          </p>
        </div>
      </section>

      {/* Admission Details Section */}
      <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Admission Details
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To enroll in this course, follow these simple steps:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Check the eligibility criteria on our website.</li>
            <li>Submit your application form along with required documents.</li>
            <li>Pay the registration fee to confirm your spot.</li>
          </ol>
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
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition duration-300"
            >
              <img
                src={review.image_url}
                alt={`Reviewer ${review.name}`}
                className="rounded-md shadow-sm mb-4 object-cover h-40 w-full"
              />
              <h3 className="text-xl font-semibold text-blue-800">
                {review.name}
              </h3>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Career Opportunities Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Career Opportunities
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Completing this course opens up numerous career opportunities in the
          tech industry. Graduates often pursue roles such as:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Software Developer</li>
          <li>Data Analyst</li>
          <li>Web Developer</li>
          <li>IT Consultant</li>
        </ul>
      </section>
    </div>
  );
};

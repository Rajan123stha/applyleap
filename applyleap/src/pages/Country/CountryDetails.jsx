import React, { useEffect, useState } from "react";
import axios from "axios";
import Image1 from "../../assets/images/canada.jpg";
import Logo1 from "../../assets/images/uk.jpg";
import {
  fetchDestinationBySlug,
  fetchDestinationDetails,
  fetchPageById,
} from "../../Api";

export const CountryDetails = ({ destination }) => {
  if (!destination) {
    return <div>Loading...</div>;
  }

  const requirements = destination.detailed_requirements || [];
  const scholarships = destination.scholarships || [];
  const benefits = destination.benefits || [];
  const universities = destination.universities || [];
  const courses = destination.courses || [];
  const costs = destination.cost_details || [];
  console.log(destination);

  return (
    <div>
      <div className="container px-6 md:px-10  mx-auto space-y-6">
        {/* Wrapper with Flexbox */}
        <div
          className="flex flex-col lg:flex-row items-center  my-8 lg:items-start gap-4"
          id="intro"
        >
          {/* Text Section */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">{destination.title}</h2>
            <p className="text-gray-700 text-justify ">
              {destination.short_intro}
            </p>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/3">
            <img
              src={Image1}
              alt="Study in USA"
              className="rounded shadow-md w-full lg:h-48"
            />
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row items-center my-8 lg:items-start gap-4"
          id="why-study"
        >
          {/* Text Section */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">
              Why Study in {destination.title} from Nepal
            </h2>
            <div
              className="text-gray-700 text-justifytext-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: destination.why_study_here }}
            />
          </div>
          {/* Image Section */}
          <div className="lg:w-1/3 mt-6">
            <img
              src={Image1}
              alt="Study in USA"
              className="rounded shadow-md w-full lg:h-48"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto  py-8 container  " id="requirements">
          <h2 className="text-2xl font-bold mb-4">Requirements</h2>
          <p className="text-gray-700 text-justify ">
            To pursue your dreams in the {destination.title}, we provide
            comprehensive guidance on admission requirements. We consider your
            academic transcripts, standardized test scores, English language
            proficiency, letters of recommendation, and personal statement.
          </p>
          <div className="relative mt-6">
            {/* Vertical Line */}
            <div className="absolute  left-4 md:left-10 lg:left-1/2 top-0 bottom-0 w-1.5 bg-gray-300"></div>

            {/* Card Grid */}
            <div className="grid grid-cols-1  gap-12 lg:grid-cols-2 lg:gap-x-16">
              {requirements.map((requirement, index) => (
                <div
                  key={index}
                  className={`relative flex  flex-col items-start ${
                    index % 2 === 0 ? "lg:items-end" : "lg:items-start"
                  }`}
                >
                  {/* Connecting Line */}
                  <div
                    className={`absolute top-1/2 left-4 md:left-11  h-1 bg-gray-300 max-w-24 lg:hidden `}
                    style={{
                      width: "calc(22% - 2.6rem)", // Adjust width dynamically to connect card edge to the vertical line
                    }}
                  ></div>

                  {/* Card */}
                  <div
                    className={` bg-white p-6   ml-12 md:ml-36 lg:mx-20 shadow-md border border-gray-200 rounded-lg w-full max-w-[80%] md:max-w-[70%] lg:max-w-[70%] ${
                      index % 2 === 0 ? "lg:ml-auto card" : "lg:mr-auto cards"
                    }`}
                  >
                    <h3 className="text-lg font-semibold mb-4">
                      {requirement.heading}
                    </h3>
                    <div
                      className="text-gray-700 text-justify"
                      dangerouslySetInnerHTML={{ __html: requirement.content }}
                    />
                    {/* <p className="text-gray-700 text-justify">
                      {requirement.content}
                    </p> */}

                    {/* <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                      {requirement.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto py-8 " id="courses">
          <div className="">
            <h2 className="text-2xl font-bold mb-4">Course & University</h2>
            <h4 className="font-old text-xl mb-4 ">
              Popular courses to study in {destination.title}
            </h4>
            <p className="text-gray-700 text-justify ">
              {destination.title} has a wide range of universities and colleges
              offering various courses. The country is home to some of the best
              universities in the world.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {courses.map((course, index) => (
                <li key={index}>{course.name}</li>
              ))}
            </ul>
            <h4 className="font-old text-xl mb-4 mt-6 ">
              Popular University to study in {destination.title}
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {universities.map((uni, index) => (
                <li key={index}>{uni.name}</li>
              ))}
            </ul>
            {/* {<div className="flex gap-6 overflow-x-auto scrollbar-hide">
              {universities.map((uni) => (
                <div
                  key={uni.id}
                  className="relative flex-shrink-0  border rounded-lg p-4 flex items-center justify-center shadow-md group"
                >
                 
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="max-h-16 object-contain"
                  />

                  
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center text-center justify-center text-white text-sm sm:text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    {uni.name}
                  </div>
                </div>
              ))}
            </div>} */}
          </div>
        </div>

        <div className="mt-6" id="cost">
          <h2 className="text-2xl font-bold mb-4">
            Cost of Studying in {destination.title}
          </h2>
          <p className="text-gray-700 mb-4 text-justify">
            Choosing to pursue a degree in {destination.title} is no small
            decision, and it's important for students to understand the{" "}
            <a href="#" className="text-blue-500 underline hover:text-blue-600">
              full costs associated with studying here
            </a>
            . From tuition fees to living expenses, textbooks, and more, here is
            an overview of what one can expect when calculating the expense of
            gaining a higher education in {destination.title}:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-600 border-b">
                    Expenses
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600 border-b">
                    Estimated Cost Range (AUD)
                  </th>
                </tr>
              </thead>
              <tbody>
                {costs.map((cost, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border-b text-gray-700">
                      {cost.expense}
                    </td>
                    <td className="px-4 py-2 border-b text-gray-700 whitespace-pre-line">
                      {cost.cost_range}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8 mt-8 py-8 text-justify" id="scholarship">
          <h2 className="text-2xl font-bold mb-4">
            Scholarships to Study in {destination.title}
          </h2>
          <p className="text-gray-700 mb-4 text-justify">
            For Nepalese students considering higher education in{" "}
            {destination.title}, it is of the utmost importance to assess the
            financial components associated with this decision. Along with
            tuition fees and living expenses, various other costs, such as
            textbooks, must be taken into account. Fortunately, there are
            numerous scholarships to provide financial aid for Nepalese
            students. Here is a list of scholarship in {destination.title}:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {scholarships.map((scholarship, index) => (
              <li key={index}>
                <a
                  href={scholarship.link}
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  {scholarship.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits Section */}
        <div id="benefits">
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>
          <p className="text-gray-700 mb-4 text-justify">
            Studying in the {destination.title} offers a dynamic and enriching
            academic experience, attracting students from across the globe
            seeking world-class education and unparalleled opportunities. Here
            are the top benefits of studying in the {destination.title} from
            Nepal:
          </p>
          <ul className="space-y-6 text-justify">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-gray-700">
                <h3 className="font-bold text-lg mb-2">{benefit.heading}</h3>

                <div
                  className="text-gray-700 text-justify"
                  dangerouslySetInnerHTML={{ __html: benefit.content }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CountryDetails;

import React from "react";
import Button from "../../components/Button/Button";
import ScholarshipCard from "../../components/Cards/ScholarshipCard";
import image from "../../assets/images/uk.jpg";

export const ScholarshipDetails = ({ scholarship }) => {
  const scholars = scholarship.scholarship_details;

  return (
    <>
      <div className="container px-6 md:px-10 mx-auto space-y-6">
        {/* Introduction Section */}
        <h1 className="text-3xl font-bold  mb-2 mt-4">{scholarship.country}</h1>
        <div
          className="flex flex-col lg:flex-row items-center py-8 my-8 lg:items-start gap-4"
          id="about"
        >
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">
              Scholarship in {scholarship.country}
            </h2>
            <div
              className="text-gray-700 text-justify space-y-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: scholarship.about }}
            />
          </div>
          <div className="lg:w-1/3">
            <iframe
              className="rounded shadow-md w-full lg:h-48"
              src="https://www.youtube.com/embed/4bnbUjLxGig"
              title="How to study abroad for free? | Fully Funded Scholarships 2023"
              frameBorder="0" // Correct camelCase
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" // Correct camelCase
              allowFullScreen // Correct camelCase
            ></iframe>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row items-center py-8 my-8 lg:items-start gap-4"
          id="why"
        >
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">
              Types of Scholarships in {scholarship.country}
            </h2>
            <div
              className="text-gray-700 text-justify space-y-4 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: scholarship.types_of_scholarship,
              }}
            />
          </div>
          <div className="lg:w-1/3">
            <img
              src={image}
              alt="Why Scholarships"
              className="rounded shadow-md w-full lg:h-48"
            />
          </div>
        </div>

        {/* Types of Scholarships */}
        <div className="py-8">
          <h2 className="text-2xl font-bold mb-6">Scholarships</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholars.map((scholar, index) => (
              <ScholarshipCard
                key={index}
                provider={scholar.provider_type}
                grant={scholar.grant}
                deadline={scholar.deadline}
                title={scholar.title}
                criteria={scholar.criteria}
              />
            ))}
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="py-8" id="apply">
          <h2 className="text-2xl font-bold mb-4">
            How to Apply for Scholarships?
          </h2>
          <p
            className="text-gray-700 text-justify space-y-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: scholarship.how_to_apply }}
          />
        </div>

        <div className="py-8" id="apply">
          <h2 className="text-2xl font-bold mb-4">Addtional Tips</h2>
          <p
            className="text-gray-700 text-justify space-y-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: scholarship.tips }}
          />
        </div>
      </div>
    </>
  );
};

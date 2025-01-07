import React from "react";

const KeyInformation = ({ university }) => {
  const info = {
    rank: "78",
    location: "Bournemouth, England",
    established: "1884",
    internationalStudents: "10.4%",
    famousCourses: "Fine Art, Film Production, Animation",
    internationalFees: "£18,950-19,950",
  };

  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-8 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Key Information
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-gray-300 pt-6">
        <div className="flex flex-col items-center">
          <h3 className="text-gray-600 font-medium text-lg">Rank</h3>
          <p className="text-gray-800 text-xl md:text-2xl font-bold mt-2">
            {university.rank}
          </p>
        </div>
        <div className="flex flex-col items-center border-l border-gray-300 pl-6">
          <h3 className="text-gray-600 font-medium text-lg">Location</h3>
          <p className="text-gray-800 text-xl md:text-2xl font-bold mt-2">
            {university.location}
          </p>
        </div>
        <div className="flex flex-col items-center border-l border-gray-300 pl-6">
          <h3 className="text-gray-600 font-medium text-lg">Established</h3>
          <p className="text-gray-800 text-xl md:text-2xl font-bold mt-2">
            {university.established_year}
          </p>
        </div>
        <div className="flex flex-col items-center border-t border-gray-300 pt-6 sm:border-none">
          <h3 className="text-gray-600 font-medium text-lg">
            International Students%
          </h3>
          <p className="text-gray-800 text-xl md:text-2xl font-bold mt-2">
            {university.international_students_percentage}
          </p>
        </div>
        <div className="flex flex-col items-center border-l border-gray-300 pl-6 border-t sm:border-none">
          <h3 className="text-gray-600 font-medium text-lg">Famous Courses</h3>
          <p className="text-gray-800 text-center text-xl md:text-2xl font-bold mt-2">
            {university.famous_courses}
          </p>
        </div>
        <div className="flex flex-col items-center border-l border-gray-300 pl-6 border-t sm:border-none">
          <h3 className="text-gray-600 font-medium text-lg">
            International Fees
          </h3>
          <p className="text-gray-800 text-xl md:text-2xl font-bold mt-2">
            {university.fee_range}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyInformation;

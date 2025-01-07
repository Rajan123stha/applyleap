import React from "react";

const ScholarshipCard = () => {
  return (
    <div className="border border-gray-400 rounded-xl shadow-md p-4 w-80 bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-gray-600 px-2 py-1 border border-gray-400 rounded-full">
          Independent Provider
        </span>
        <div className="text-xs text-gray-600">
          <span>Deadline</span>
          <br />
          <strong className="text-black">26 March 2025</strong>
        </div>
      </div>

      {/* Grant Section */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-black">2500 CAD</h2>
        <p className="text-sm font-semibold text-black mt-1">
          Vanier Canada Graduate Scholarships
        </p>
        <p className="text-xs text-gray-500 mt-1">Any University</p>
      </div>

      {/* Criteria Section */}
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-800">Criteria</h3>
        <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-700">
          <span className="px-2 py-1 border border-gray-300 rounded-full">
            Doctoral students
          </span>
          <span className="px-2 py-1 border border-gray-300 rounded-full">
            Engineering
          </span>
          <span className="px-2 py-1 border border-gray-300 rounded-full">
            Humanities
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;

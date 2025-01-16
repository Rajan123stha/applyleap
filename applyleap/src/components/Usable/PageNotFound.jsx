// PageNotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-700 mt-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-2xl font-medium">Oops! Page Not Found</p>
      <p className="mt-2 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        Go Back Home
      </button>
      <div className="mt-4 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-40 h-40 text-gray-400"
        >
          <path d="M9 9l6 6m0-6l-6 6" />
          <circle cx="12" cy="12" r="8" />
        </svg>
      </div>
    </div>
  );
};

export default PageNotFound;

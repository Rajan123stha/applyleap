// Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-transparent border-t-blue-500 border-b-purple-500 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-pink-500 border-b-blue-500 rounded-full animate-spin-reverse"></div>
      </div>
      <p className="mt-6 text-xl font-semibold text-purple-600">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;

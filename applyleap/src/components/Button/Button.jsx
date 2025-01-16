import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, background = "blue-500" }) => {
  return (
    <button
      type="button"
      // title="This is Button"
      className={`text-lg lg:text-xl  hover:bg-blue-600 text-black px-2 py-2 md:px-5 lg:px-6 rounded-md font-medium transition-all shadow-lg shadow-gray-500 border border-black hover:border-black-600 bg-${background}`}
    >
      {label}
    </button>
  );
};
export default Button;

import React, { useState, useEffect } from "react";

const Sidebar = ({ currentSection, onSectionClick, data }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const headings = data.sections.map((section) => section.heading);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const mainContent = document.getElementById("main-content");
      const otherComponent = document.getElementById("faq");

      if (!mainContent || !otherComponent) return;

      const mainContentRect = mainContent.getBoundingClientRect();
      const otherComponentRect = otherComponent.getBoundingClientRect();

      // Stop stickiness when otherComponent enters the viewport
      setIsSticky(
        mainContentRect.top <= 0 &&
          otherComponentRect.top > window.innerHeight + 500
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="" id="sidebar">
      {/* Mobile view with dropdown */}
      <div className=" mx-auto z-50 bg-white md:hidden border-b shadow-sm">
        <button
          className="w-full text-left text-xl font-bold py-2 px-6 border-b"
          onClick={handleDropdownToggle}
        >
          In this story
          <span className="float-right">{isDropdownOpen ? "▲" : "▼"}</span>
        </button>
        {isDropdownOpen && (
          <ul className="p-4 space-y-2 bg-gray-100">
            {headings.map((section) => (
              <li
                key={section}
                className={`cursor-pointer font-light text-sm relative pl-6 py-0${
                  currentSection === section ? "text-blue-500" : "text-gray-700"
                }`}
                onClick={() => onSectionClick(section)}
              >
                <div
                  className={`absolute left-0 top-0 h-full w-1 ml-2 ${
                    currentSection === section ? "bg-blue-500" : "bg-black"
                  }`}
                />
                <a
                  href={`#${section.toLowerCase().replace(/ /g, "-")}`}
                  className=""
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop view */}
      <div
        className={`  px-0 md:px-0  mx-0 space-y-6 hidden md:block w-80  ${
          isSticky ? "fixed top-16" : " "
        }`}
      >
        <div className="p-2 pr-4">
          <h3 className="text-xl font-bold mb-1">In this story</h3>
          <ul className="space-y-2 py-4 border-r ">
            {headings.map((section) => (
              <li
                key={section}
                className={`cursor-pointer  relative font-medium text-sm pl-4 ${
                  currentSection === section ? "text-blue-500" : "text-gray-700"
                }`}
                onClick={() => onSectionClick(section)}
              >
                <div
                  className={`absolute left-0 top-0 h-full w-1 ${
                    currentSection === section ? "bg-blue-500" : "bg-black"
                  }`}
                />
                <a
                  href={`#${section.toLowerCase().replace(/ /g, "-")}`}
                  className=""
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

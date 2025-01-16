import React from "react";

const QuickLinks = ({ links }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 90; // Adjust this value based on your header's height or desired margin
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <nav className="sticky top-16 z-10 bg-white shadow-md">
      <ul
        className="flex space-x-4 px-4 py-2 overflow-x-auto text-sm sm:text-base 
        justify-start md:pl-8 md:space-x-6 lg:space-x-6 lg:pl-16 scrollbar-hide whitespace-nowrap"
      >
        {links.map((link) => (
          <li
            key={link.id}
            className="text-gray-900 cursor-pointer hover:text-blue-500"
            onClick={() => scrollToSection(link.id)}
          >
            {link.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default QuickLinks;

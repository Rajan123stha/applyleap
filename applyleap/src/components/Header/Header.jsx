import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // Pages where the navbar should not be fixed
  const nonFixedRoutes = [];

  // Determine if the current route is in the non-fixed list
  const isNonFixed = nonFixedRoutes.includes(location.pathname);

  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggleconst [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggle

  // Handles opening dropdown on hover
  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  // Handles closing dropdown when mouse leaves
  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };
  const handleDropdownToggle = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null); // Close if the same menu is clicked again
    } else {
      setOpenDropdown(menu); // Open the specific menu
    }
  };
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav
      className={`bg-gray-200  w-full z-10 ${
        isNonFixed ? "sticky" : "fixed top-0"
      }`}
    >
      <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <div className="text-2xl font-bold ">Applyleap</div>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {["Guide", "Destination", "Test Preparation"].map((menu, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-800 hover:text-gray-600 text-lg font-semibold flex items-center space-x-1">
                  <span>{menu}</span>
                  <RiArrowDropDownLine size={30} />
                </button>
                {openDropdown === menu && (
                  <div className="absolute top-full left-0 w-60 bg-white shadow-md  z-20 rounded-lg">
                    <ul className="p-6 space-y-2 font-medium ">
                      {menu === "Guide" && (
                        <>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              Application Guide
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              Visa Guide
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              Schlorship Guide
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              Document Preparation Guide
                            </a>
                          </li>
                        </>
                      )}
                      {menu === "Destination" && (
                        <>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              Study in Australia
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              Study in Canada
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              Study in New Zealand
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              Study in New France
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              Study in New UK
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              Study in New USA
                            </a>
                          </li>
                        </>
                      )}
                      {menu === "Test Preparation" && (
                        <>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              IELTS
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              TOEFL
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              GRE
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block text-gray-800 hover:text-gray-600"
                            >
                              SAT
                            </a>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* Regular Nav Items */}
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 text-lg font-semibold"
            >
              Scholarship
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 text-lg font-semibold"
            >
              Course
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 text-lg font-semibold"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 text-lg font-semibold"
            >
              Events
            </a>
          </div>
          {/* Hamburger Menu for Mobile and Medium Screens */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <span className="text-2xl">&times;</span>
              ) : (
                <span className="text-2xl">&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-200 shadow-lg absolute top-16 left-0 w-full z-20">
          <ul className="flex flex-col p-8 space-y-4 text-lg font-medium">
            {["Guide", "Destination", "Test Preparation"].map((menu, index) => (
              <li key={index}>
                <button
                  className="text-gray-800 hover:text-gray-600 flex items-center space-x-1 w-full text-left"
                  onClick={() => handleDropdownToggle(menu)}
                >
                  <span>{menu}</span>
                  <RiArrowDropDownLine />
                </button>
                {openDropdown === menu && (
                  <ul className="p-6 space-y-2 font-medium ">
                    {menu === "Guide" && (
                      <>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            Application Guide
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            Visa Guide
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            Schlorship Guide
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            Document Preparation Guide
                          </a>
                        </li>
                      </>
                    )}
                    {menu === "Destination" && (
                      <>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            Study in Australia
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            Study in Canada
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            Study in New Zealand
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            Study in New France
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            Study in New UK
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            Study in New USA
                          </a>
                        </li>
                      </>
                    )}
                    {menu === "Test Preparation" && (
                      <>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            IELTS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            TOEFL
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            GRE
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block text-gray-800 hover:text-gray-600"
                          >
                            SAT
                          </a>
                        </li>
                      </>
                    )}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Scholarship
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Course
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Events
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

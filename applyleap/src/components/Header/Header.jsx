import React, { useEffect, useState } from "react";
import {
  RiArrowDropDownLine,
  RiMenuLine,
  RiCloseLine,
  RiSearchLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { fetchDestination } from "../../Api";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [destination, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const getDestinations = async () => {
      console.log("connn");
      try {
        const response = await fetchDestination();
        console.log("con:", response);
        const titles = response.map((data) => data.title);
        setDestinations(titles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setLoading(false);
      }
    };

    getDestinations();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const tests = ["IELTS", "TOEFL", "GRE", "SAT"];
  const guides = [
    "Application Guide",
    "Visa Guide",
    "Scholarship Guide",
    "Document Preparation Guide",
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <header className="bg-black text-white fixed top-0 z-50 w-full">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 h-16">
          {/* Hamburger Icon and Partial Menu */}
          <div className="flex items-center space-x-6">
            {/* Hamburger Icon */}
            <button className="text-white" onClick={toggleSidebar}>
              <RiMenuLine size={24} />
            </button>

            {/* Menu Items Next to Hamburger */}
            <div className="hidden lg:flex space-x-6">
              <Link
                to="/countries"
                className="hover:text-gray-300 text-lg font-semibold"
              >
                Destination
              </Link>
              <Link
                to="/universities"
                className="hover:text-gray-300 text-lg font-semibold"
              >
                Universities
              </Link>
              <Link
                to="/courses"
                className="hover:text-gray-300 text-lg font-semibold"
              >
                Courses
              </Link>
              <Link
                to="/scholarship/canada-scholarship"
                className="hover:text-gray-300 text-lg font-semibold"
              >
                Scholarship
              </Link>
            </div>
          </div>

          {/* Logo and Search Icon */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <Link to="/" className="text-white">
                ApplyLeap
              </Link>
            </div>

            {/* Search Icon */}
            <button className="text-white" onClick={toggleSearch}>
              <RiSearchLine size={24} />
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div
          className="fixed top-16 left-0 bg-blue-500 h-1 z-30"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="bg-white text-black w-full px-4 py-2 shadow-md">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Search..."
            />
          </div>
        )}

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-75"
              onClick={toggleSidebar}
            ></div>
            {/* Sidebar */}
            <div className="bg-white text-black w-64 h-full fixed left-0 top-0 z-50 shadow-lg">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={toggleSidebar}>
                  <RiCloseLine size={24} />
                </button>
              </div>
              <ul className="pl-6 pt-4 pr-4 space-y-6 font-medium">
                <li>
                  <button
                    className="flex items-center justify-between w-full hover:text-blue-500"
                    onClick={() => handleDropdownToggle("Guide")}
                  >
                    Guide
                    <RiArrowDropDownLine size={26} />
                  </button>
                  {openDropdown === "Guide" && (
                    <ul className="pl-3 space-y-3">
                      {guides.map((guide, idx) => (
                        <li key={idx}>
                          <Link
                            to={`/${guide.toLowerCase().replace(/\s+/g, "-")}`}
                            className="hover:text-blue-500 text-sm font-normal"
                          >
                            {guide}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <button
                    className="flex items-center justify-between w-full hover:text-blue-500"
                    onClick={() => handleDropdownToggle("Destination")}
                  >
                    Destination
                    <RiArrowDropDownLine size={26} />
                  </button>
                  {openDropdown === "Destination" && (
                    <ul className="pl-3 space-y-3">
                      {destination.map((country, idx) => (
                        <li key={idx}>
                          <Link
                            to={`/countries/${country.toLowerCase()}`}
                            className="hover:text-blue-500 text-sm font-normal"
                          >
                            Study in {country}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    className="flex items-center justify-between w-full hover:text-blue-500"
                    onClick={() => handleDropdownToggle("Test Preparation")}
                  >
                    Test Preparation
                    <RiArrowDropDownLine size={26} />
                  </button>
                  {openDropdown === "Test Preparation" && (
                    <ul className="pl-3 space-y-3">
                      {tests.map((test, idx) => (
                        <li key={idx}>
                          <Link
                            to={`/test/${test.toLowerCase()}`}
                            className="hover:text-blue-500 text-sm font-normal"
                          >
                            {test}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/universities" className="hover:text-blue-500">
                    Universities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/scholarship/canada-scholarship"
                    className="hover:text-blue-500"
                  >
                    Scholarship
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="hover:text-blue-500">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-blue-500">
                    Course
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-blue-500">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

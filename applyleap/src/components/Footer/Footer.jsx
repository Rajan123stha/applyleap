import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="sticky  bg-gray-100 w-full py-2 mt-4">
      <div id="footer" className="container px-10 mx-auto">
        {/* First Section: Applyleap Logo and Subscribe to Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          {/* Left Section: Applyleap Logo */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-semibold text-gray-800">Applyleap</h2>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaFacebook size={25} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaLinkedin size={25} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaInstagram size={25} />
              </a>
            </div>
          </div>

          {/* Right Section: Newsletter Subscription */}
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <p className="mt-2 text-lg font-medium text-gray-700">
              Subscribe to News Letter
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none w-full"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Second Section: Quick Links, Useful Links, Destinations */}
        <div className="flex flex-col md:flex-row mb-2">
          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Course
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-semibold text-gray-800">Useful Links</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/3">
            <h3 className="font-semibold text-gray-800">Destinations</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  UK
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  USA
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Canada
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Australia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

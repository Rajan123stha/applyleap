import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setError("Email is required.");
      setSuccess("");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    // If email is valid
    setError("");
    setSuccess("You have successfully subscribed!");
    // Handle the subscription logic here (e.g., API call)
    console.log("Subscribed email:", email);
  };
  return (
    <footer className="bg-gray-100 py-4 ">
      <div id="footer" className="container mx-auto px-10">
        {/* First Section: Applyleap Logo and Subscribe to Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-semibold text-gray-800">Applyleap</h2>
            <div className="flex space-x-4 mt-4">
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                <FaFacebook size={25} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                <FaLinkedin size={25} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                <FaInstagram size={25} />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <p className="text-lg font-medium text-gray-700">
              Subscribe to Newsletter
            </p>
            <div className="flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none w-full"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </div>
            {/* Error or success message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {success && (
              <p className="text-green-500 text-sm mt-2">{success}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3">
            <h3 className="font-semibold text-gray-800">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/courses"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Course
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-600 hover:text-gray-800">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/universities"
                  className="text-gray-600 hover:text-gray-800"
                >
                  University
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="font-semibold text-gray-800">Useful Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="font-semibold text-gray-800">Destinations</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/countries/uk"
                  className="text-gray-600 hover:text-gray-800"
                >
                  UK
                </Link>
              </li>
              <li>
                <Link
                  to="/countries/usa"
                  className="text-gray-600 hover:text-gray-800"
                >
                  USA
                </Link>
              </li>
              <li>
                <Link
                  to="/countries/canada"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Canada
                </Link>
              </li>
              <li>
                <Link
                  to="/countries/australia"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Australia
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

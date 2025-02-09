import React, { useState } from "react";
import Image from "../../assets/images/daniel.jpeg"; // Blog image
import Button from "../../components/Button/Button";
import { CiShare2 } from "react-icons/ci";
import { Helmet } from "react-helmet";
const TopSection = ({ data }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleShare = (platform) => {
    const shareUrl = window.location.href; // URL of the blog post
    const title = data.title; // Blog title
    const imageUrl = data.image; // Blog image URL (from `data` prop)

    let url = "";

    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      default:
        break;
    }

    if (url) {
      window.open(url, "_blank"); // Open the share URL in a new tab
    }

    setShowDropdown(false); // Close the dropdown
  };

  return (
    <>
      <div className="container flex flex-col   pb-4 mb-4 mt-16 px-6 md:px-12 mx-auto space-y-6">
        <h1 className="text-lg lg:text-3xl font-bold text-gray-900 text-left mt-8 mb-4 ">
          {data.title}
        </h1>
        <p className="text-sm text-gray-500 mb">May 12, 2024</p>
        {/* Top Section: Writer Information */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full">
              <img
                src={Image}
                alt="Writer"
                className="w-14 h-12 rounded-full"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {data.writer}
              </p>
              <p className="text-sm text-gray-500">Writer</p>
            </div>
          </div>
          {/* Share Button with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2"
            >
              <CiShare2 />
              Share
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <button
                  onClick={() => handleShare("facebook")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Share on Facebook
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Share on Twitter
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Share on LinkedIn
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section: Blog Title */}
      </div>
    </>
  );
};

export default TopSection;

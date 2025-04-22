import React, { useState } from "react";
import { useEffect } from "react";
import Image from "../../assets/images/daniel.jpeg"; // Blog image
import Button from "../../components/Button/Button";
import { CiShare2 } from "react-icons/ci";
import { Helmet } from "react-helmet";
import { ImageBanner } from "../../components/Banner/ImageBanner";
import { BASE_URL } from "../../config";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaRedditAlien,
  FaPinterestP,
} from "react-icons/fa";
import { fetchImageById } from "../../Api";
const TopSection = ({ data }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [wImage, setWImage] = useState(null); // State to store the image URL

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const baseUrl = BASE_URL; // Replace with your backend URL
  // useEffect(() => {
  //   const getImage = async () => {
  //     if (data?.writerImage && typeof data.writerImage === "string") {
  //       console.log("writerImage", data.writerImage);
  //       const image = await fetchImageById(data.writerImage);
  //       setWImage(image); // Store in state
  //     }
  //   };

  //   getImage();
  // }, [data.writerImage]); // Dependency array to run effect when writerImage changes
  const imageUrl = `${baseUrl}${data.writerImage?.url}`; // Construct the image URL
  console.log("image", data);

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
  console.log("imageUrl1", imageUrl);

  const date = new Date(data.updatedAt); // Use the provided date or a default one

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="container max-w-5xl mx-auto px-6 md:px-12 mt-10 text-gray-900 space-y">
        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-semibold mt-6 mb-4 leading-snug">
          {data.title}
        </h1>
        <p className="text-base text-gray-600 mt-6">
          Last Updated: <span className="font-bold ">{formattedDate}</span>
        </p>
        <p className="text-base text-gray-600 ">
          Reviewed By: <span className="font-bold"> {data.reviewedBy}</span>
        </p>
        <p className="text-base text-gray-600">
          Fact Checked By:
          <span className="font-bold">{data.factCheckedBy}</span>
        </p>
        {/* Author Section */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center space-x-6">
            <img
              src={imageUrl}
              alt="Writer"
              className="w-16 h-16 rounded-full border border-gray-300"
            />
            <div>
              <p className="text-lg font-bold text-gray-900">{data.writer}</p>
              <p className="text-base lg:text-sm text-gray-600">
                {data.writerPosition ? data.writerPosition : "Writer"}
              </p>
            </div>
          </div>
          {/* Share Button */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-4 text-gray-700 text-lg"
            >
              <CiShare2 className="text-sm lg:text-xl" />{" "}
              <span className="text-sm lg:text-xl -ml-2">Share</span>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-4 w-42 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <button
                  onClick={() => handleShare("facebook")}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaFacebookF className="mr-2" /> Facebook
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaTwitter className="mr-2" /> Twitter
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaLinkedinIn className="mr-2" /> LinkedIn
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaWhatsapp className="mr-2" /> WhatsApp
                </button>
                <button
                  onClick={() => handleShare("email")}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaEnvelope className="mr-2" /> Email
                </button>
                <button
                  onClick={() => handleShare("pinterest")}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaPinterestP className="mr-2" /> Pinterest
                </button>
                <button
                  onClick={() => handleShare("reddit")}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaRedditAlien className="mr-2" /> Reddit
                </button>
              </div>
            )}
          </div>
        </div>
        <ImageBanner image={data.bannerImage} />
      </div>
    </>
  );
};

export default TopSection;

import React, { useState, useEffect } from "react";
import { Card } from "../Cards/Card";
import AustraliaImage from "../../assets/australia.jpg";

const RelatedBlogs = () => {
  const blogs = [
    {
      title:
        "10 Essential Tips for Making the Most of Your Study Abroad Experience",
      image: AustraliaImage,
      writer: "Hari Bhattrai",
      date: "13th June 2022",
    },
    {
      title:
        "The Ultimate Guide to Studying Abroad: Everything You Need to Know",
      image: AustraliaImage,
      writer: "John Doe",
      date: "12th August 2021",
    },
    {
      title: "How to Prepare for Your Study Abroad Adventure",
      image: AustraliaImage,
      writer: "Mark Henry",
      date: "1st May 2023",
    },
    {
      title:
        "10 Essential Tips for Making the Most of Your Study Abroad Experience",
      image: AustraliaImage,
      writer: "John Cena",
      date: "29th January 2021",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(1); // Default to 1 blog for small screens

  // Update the number of visible blogs based on screen size
  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setVisibleCount(3); // Large screens: 3 blogs
    } else if (width >= 768) {
      setVisibleCount(2); // Medium screens: 2 blogs
    } else {
      setVisibleCount(1); // Small screens: 1 blog
    }
  };

  useEffect(() => {
    // Set initial visible count and update on resize
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount); // Cleanup listener on component unmount
    };
  }, []);

  // Limit the displayed blogs to the number visible for the current screen size
  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <div className="container px-6 md:px-10 py-8  mx-auto mt-6 mb-18">
      <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {visibleBlogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;

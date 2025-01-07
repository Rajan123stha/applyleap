import React from "react";
import AustraliaImage from "../../assets/australia.jpg"; // Replace with your actual file paths
import CanadaImage from "../../assets/canada.jpg";
import UkImage from "../../assets/uk.jpg";
import Button from "../Button/Button";
import { Card } from "./Card";

const blogs = [
  {
    title:
      "10 Essential Tips for Making the Most of Your Study Abroad Experience",
    image: AustraliaImage,
    writer: "Hari Bhattrai",
    date: "13th June 2022",
  },
  {
    title: "The Ultimate Guide to Studying Abroad: Everything You Need to Know",
    image: CanadaImage,
    writer: "John Doe",
    date: "12th August 2021",
  },
  {
    title: "The Ultimate Guide to Studying Abroad: Everything You Need to Know",
    image: UkImage,
    writer: "Mark Henry",
    date: "1st May 2023",
  },
  {
    title:
      "10 Essential Tips for Making the Most of Your Study Abroad Experience",
    image: UkImage,
    writer: "John Cena",
    date: "29th January 2021",
  },
];

const BlogCard = () => {
  return (
    <div className="container mx-auto px-10 py-4">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-6">
        <h1 className="font-bold text-2xl lg:text-3xl mb-4 lg:mb-0">
          Popular Blogs
        </h1>
        {/* View More Button */}
        <div className="hidden lg:block">
          <Button label="Read More" />
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))}
      </div>

      {/* View More Button for Small and Medium Devices */}
      <div className="flex justify-center lg:hidden mt-6">
        <Button label="Read More" />
      </div>
    </div>
  );
};

export default BlogCard;

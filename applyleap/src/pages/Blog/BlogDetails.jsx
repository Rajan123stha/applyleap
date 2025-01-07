import React from "react";
import BlogSection from "./BlogSection";
import image from "../../assets/images/canada.jpg";
import { ImageBanner } from "../../components/Banner/ImageBanner";
import Image from "../../assets/images/blog.jpg";

const BlogDetails = () => {
  const categories = [
    {
      id: 1,
      name: "Abroad Study",
      blogs: [
        {
          id: 1,
          title: "10 Essential Tips for Studying Abroad",
          image: image,
          writer: "John Doe",
          date: "July 28, 2024",
        },
        {
          id: 2,
          title: "How to Adjust to a New Culture",
          image: image,
          writer: "Jane Smith",
          date: "July 27, 2024",
        },
      ],
    },
    {
      id: 2,
      name: "Scholarships",
      blogs: [
        {
          id: 3,
          title: "Top 5 Scholarships to Apply for in 2024",
          image: image,
          writer: "Alice Johnson",
          date: "July 26, 2024",
        },
      ],
    },
    {
      id: 3,
      name: "Test Preparations",
      blogs: [
        {
          id: 4,
          title: "How to Ace the GRE in 3 Months",
          image: image,
          writer: "Mark Lee",
          date: "July 25, 2024",
        },
      ],
    },
  ];

  return (
    <div>
      <ImageBanner image={Image} />
      <BlogSection categories={categories} />
    </div>
  );
};
export default BlogDetails;

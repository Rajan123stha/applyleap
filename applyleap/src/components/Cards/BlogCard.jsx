import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Card } from "./Card";
import { fetchBlogs } from "../../Api";

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]); // State to store blog details
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogData = await fetchBlogs(); // Fetch blogs from API
        console.log(blogData);
        setBlogs(blogData.slice(0, 3)); // ✅ Keep only the latest 3 blogs
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Trim leading/trailing hyphens
  };

  return (
    <div className="container mx-auto px-10 py-4">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-6">
        <h1 className="font-bold text-2xl lg:text-3xl mb-4 lg:mb-0">
          Popular Blogs
        </h1>
        {/* View More Button */}
        <div className="hidden lg:block">
          <Link to="/blogs">
            <Button label="Read More" />
          </Link>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog, index) => (
          <Link to={`/blogs/${generateSlug(blog.title)}`} key={index}>
            <Card blog={blog} />
          </Link>
        ))}
      </div>

      {/* View More Button for Small and Medium Devices */}
      <div className="flex justify-center lg:hidden mt-6">
        <Link to="/blogs">
          <Button label="Read More" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

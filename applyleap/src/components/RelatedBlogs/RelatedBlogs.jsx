import React, { useState, useEffect } from "react";
import { Card } from "../Cards/Card";
import { Link } from "react-router-dom";
import AustraliaImage from "../../assets/australia.jpg";
//import { fetchBlogsByCategory } from "../../Api";
import { fetchBlogs } from "../../Api";

const RelatedBlogs = ({ category }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRelatedBlogs = async () => {
      try {
        // Replace this with dynamic category selection
        const blogs = await fetchBlogs(category);
        setRelatedBlogs(blogs);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getRelatedBlogs();
  }, []);

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
  const visibleBlogs = relatedBlogs.slice(0, visibleCount);
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Trim leading/trailing hyphens
  };

  return (
    <div className="container px-6 md:px-10 py-8  mx-auto mt-6 mb-18">
      <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {visibleBlogs.map((blog, index) => (
          <Link to={`/blogs/${generateSlug(blog.title)}`} key={index}>
            <Card index={index} blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;

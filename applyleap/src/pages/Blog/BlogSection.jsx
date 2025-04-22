import React, { useState } from "react";
import { Card } from "../../components/Cards/Card";
import { Link } from "react-router-dom";

const BlogSection = ({ categories }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Trim leading/trailing hyphens
  };

  const toggleViewMore = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <div className="container px-6 md:px-10 mx-auto space-y-6 mt-4">
      {categories.map((category) => {
        const isExpanded = expandedCategories[category.id];
        const blogsToShow = isExpanded
          ? category.blogs
          : category.blogs.slice(0, 5);
        const showViewMore = category.blogs.length > 5 && !isExpanded;

        return (
          <div key={category.id} className="my-8">
            {/* Category Heading */}
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
              {category.name}
            </h2>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogsToShow.map((blog, index) => (
                <Link to={`/blogs/${generateSlug(blog.title)}`} key={index}>
                  <Card index={index} blog={blog} />
                </Link>
              ))}

              {/* View More Button (Right-aligned in grid) */}
              {showViewMore && (
                <div className="flex justify-start items-center">
                  <button
                    onClick={() => toggleViewMore(category.id)}
                    className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600"
                  >
                    View More
                  </button>
                </div>
              )}
            </div>

            {/* Show Less Button when expanded */}
            {isExpanded && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => toggleViewMore(category.id)}
                  className="bg-gray-300 text-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-400"
                >
                  Show Less
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BlogSection;

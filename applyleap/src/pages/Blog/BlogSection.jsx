import React from "react";
import { Card } from "../../components/Cards/Card";
import { Link } from "react-router-dom";
// Import your Card component

const BlogSection = ({ categories }) => {
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Trim leading/trailing hyphens
  };

  return (
    <div className="container px-6 md:px-10  mx-auto space-y-6 mt-4">
      {categories.map((category) => (
        <div key={category.id} className="  my-8">
          {/* Category Heading */}
          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            {category.name}
          </h2>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {category.blogs.map((blog, index) => (
              <Link to={`/blogs/${generateSlug(blog.title)}`} key={index}>
                <Card index={index} blog={blog} />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;

import React from "react";
import { Card } from "../../components/Cards/Card";
// Import your Card component

const BlogSection = ({ categories }) => {
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
              <Card key={index} index={index} blog={blog} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;

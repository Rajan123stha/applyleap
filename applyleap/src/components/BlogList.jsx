import React, { useState, useEffect } from "react";
import { fetchPages } from "./api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchPages()
      .then((data) => setBlogs(data.items))
      .catch((error) => console.error("Error fetching pages:", error));
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

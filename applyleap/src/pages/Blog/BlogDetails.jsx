import React, { useEffect, useState } from "react";
import BlogSection from "./BlogSection";
import image from "../../assets/images/canada.jpg";
import { ImageBanner } from "../../components/Banner/ImageBanner";
import Image from "../../assets/images/blog.jpg";
import { PageBanner } from "../../components/Banner/PageBanner";
import { fetchBlogs } from "../../Api";
const BlogDetails = () => {
  const [blogs, setBlogs] = useState([]); // State to store blog details
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogData = await fetchBlogs(); // Call the fetchBlogs function
        setBlogs(blogData); // Update the state with fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  if (loading) {
    return <p>Loading blogs...</p>; // Show a loading message while fetching
  }
  console.log(blogs);

  const categories = blogs.reduce((acc, blog) => {
    const { category, id, title, image, writer, date } = blog;

    // Find if the category already exists in the accumulator
    let existingCategory = acc.find((cat) => cat.name === category);

    if (existingCategory) {
      existingCategory.blogs.push({
        id,
        title,
        image,
        writer,
        date,
      });
    } else {
      acc.push({
        id: acc.length + 1,
        name: category,
        blogs: [
          {
            id,
            title,
            image,
            writer,
            date,
          },
        ],
      });
    }
    return acc;
  }, []);
  console.log(categories);

  return (
    <div>
      <PageBanner title="" image={Image} />
      <BlogSection categories={categories} />
    </div>
  );
};
export default BlogDetails;

import React, { useEffect, useState } from "react";
import axios from "axios";

import { ImageBanner } from "../../components/Banner/ImageBanner";
import image from "../../assets/images/blog.jpg";
import { BlogDetails } from "./BlogDetails";
import BlogWithSidebar from "./BlogPage";
export const Blogs = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v2/pages/5")
      .then((response) => {
        const articlePages = response.data.items; // Wagtail API returns an array of items
        setArticles(articlePages);
      })
      .catch((error) => {
        console.error("There was an error fetching the articles!", error);
      });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>By: {article.meta.author}</p>
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
          {article.header_image && (
            <img src={article.header_image} alt={article.title} />
          )}
        </div>
      ))}
    </div>
  );
};

// src/components/RedirectHandler.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRedirects = async () => {
      const response = await fetch("https://yourdomain.com/api/v2/pages/");
      const pages = await response.json();

      // Find the page with redirects
      const redirectsPage = pages.find((page) => page.slug === "redirects"); // Modify this slug to match your page

      if (redirectsPage) {
        const redirects = redirectsPage.redirects;

        // Get the current path of the page
        const currentPath = window.location.pathname;

        // Find the matching redirect
        const redirect = redirects.find(
          (redirect) => redirect.old_path === currentPath
        );

        if (redirect) {
          // Redirect the user to the new path
          navigate(redirect.new_path, { replace: true });
        }
      }
    };

    fetchRedirects();
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default RedirectHandler;

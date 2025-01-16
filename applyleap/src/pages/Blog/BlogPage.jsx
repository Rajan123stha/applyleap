import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Image from "../../assets/images/blog.jpg";
import { fetchDestinationBySlug, fetchDestinationDetails } from "../../Api";

import TopSection from "./TopSection";
import { ImageBanner } from "../../components/Banner/ImageBanner";
import FAQ from "../../components/FAQ/FAQ";
import RelatedBlogs from "../../components/RelatedBlogs/RelatedBlogs";
import ScrollToTop from "../../components/Button/ScrollToTop";

const BlogWithSidebar = () => {
  // const sections = [
  //   "Gemini Era",
  //   "Multimodality and long context",
  //   "AI agents",
  //   "Breaking new ground",
  // ];
  const [currentSection, setCurrentSection] = useState(null);
  const { slug } = useParams();
  const [blogPage, setBlogPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  const dataCache = useRef({});

  useEffect(() => {
    const getData = async () => {
      if (dataCache.current[slug]) {
        setBlogPage(dataCache.current[slug]);
        setLoading(false);
        return;
      }

      try {
        const page = await fetchDestinationBySlug(slug);

        if (page && page.meta.detail_url) {
          const details = await fetchDestinationDetails(page.meta.detail_url);
          dataCache.current[slug] = details; // Cache data
          setBlogPage(details);
        }
      } catch (err) {
        console.error("Error fetching destination data:", err);
        setError("Failed to load destination data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);
  console.log(blogPage);
  // const handleScroll = () => {

  //   const sectionOffsets = sections.map((section) => {
  //     const element = document.getElementById(section.replace(/ /g, "-"));
  //     return { section, offset: element.offsetTop };
  //   });

  //   const scrollPosition = window.scrollY + window.innerHeight / 2;

  //   for (let i = sectionOffsets.length - 1; i >= 0; i--) {
  //     if (scrollPosition >= sectionOffsets[i].offset) {
  //       setCurrentSection(sectionOffsets[i].section);
  //       break;
  //     }
  //   }
  // };
  useEffect(() => {
    if (blogPage) {
      // Set sections when blogPage data is available
      setSections(blogPage.sections.map((section) => section.heading));
    }
  }, [blogPage]);

  const handleScroll = () => {
    const sectionOffsets = sections
      .map((section) => {
        const element = document.getElementById(
          section.replace(/ /g, "-").toLowerCase()
        );
        if (element) {
          return { section, offset: element.offsetTop };
        }
        return null;
      })
      .filter(Boolean); // Remove null values if any sections are missing

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionOffsets[i].offset) {
        setCurrentSection(sectionOffsets[i].section);
        return;
      }
    }

    // Fallback: If no section matches, set the first section
    setCurrentSection(sections[0]);
  };

  console.log("current", currentSection);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]); // Re-run when `sections` is updated

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!blogPage) return <div>No data available</div>;

  return (
    <div>
      <ImageBanner image={blogPage.banner_image} />
      <TopSection data={blogPage} />
      <div className="md:flex lg:flex">
        {/* Sidebar */}
        <div className="w-full lg:w-72  md:block sticky top-14">
          <Sidebar
            currentSection={currentSection}
            onSectionClick={setCurrentSection}
            data={blogPage}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-16 " id="main-content">
          <MainContent currentSection={currentSection} data={blogPage} />
        </div>
      </div>
      <FAQ faqs={blogPage.faqs} />
      <RelatedBlogs category={blogPage.category} />
      <ScrollToTop />
    </div>
  );
};

export default BlogWithSidebar;

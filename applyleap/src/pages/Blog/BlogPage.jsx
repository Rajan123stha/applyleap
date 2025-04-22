import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

import { fetchBlogBySlug } from "../../Api";

import TopSection from "./TopSection";
import { ImageBanner } from "../../components/Banner/ImageBanner";
import FAQ from "../../components/FAQ/FAQ";
import RelatedBlogs from "../../components/RelatedBlogs/RelatedBlogs";
import ScrollToTop from "../../components/Button/ScrollToTop";
import GoogleAd from "../../components/Usable/GoogleAd";
import AdComponent from "../../components/Usable/AdComponent";

const BlogWithSidebar = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const { slug } = useParams();
  const [blogPage, setBlogPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  const dataCache = useRef({});

  useEffect(() => {
    const getData = async () => {
      console.log(slug);
      if (dataCache.current[slug]) {
        setBlogPage(dataCache.current[slug]);
        setLoading(false);
        return;
      }
      console.log(slug);

      try {
        // Fetch the blog page based on the slug
        const page = await fetchBlogBySlug(slug);

        if (page) {
          // Cache the blog data
          dataCache.current[slug] = page;
          // Set the event data after fetching
          setBlogPage(page);
        } else {
          setError("Event not found.");
        }
      } catch (err) {
        setError("Failed to load event data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);

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

  const { id } = useParams(); // Get the dynamic 'id' from the URL

  // useEffect(() => {
  //   setLoading(true); // Set loading state when new fetch is triggered
  //   fetch(`http://localhost:3000/api/blogs/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBlogPage(data); // Set the blog data to state
  //       setLoading(false); // Set loading to false once data is fetched
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setError("Failed to fetch blog");
  //       setLoading(false);
  //     });
  // }, [id]); // Re-run the effect whenever the 'id' changes

  useEffect(() => {
    if (blogPage) {
      // Extract `heading` from the new `sections` format
      setSections(blogPage.sections.map((section) => section.heading));
    }
  }, [blogPage]);

  const handleScroll = () => {
    const sectionOffsets = sections
      .map((section) => {
        // Create an ID-friendly format for headings
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

  useEffect(() => {
    if (sections.length > 0) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [sections]);

  console.log(blogPage);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!blogPage) return <div>No data available</div>;

  return (
    <div className="">
      <TopSection data={blogPage} />

      <div className="container max-w-6xl md:flex lg:flex items-start justify-center mx-auto mt-12">
        <div className="w-full lg:w-72 md:block sticky top-16">
          <Sidebar
            currentSection={currentSection}
            onSectionClick={setCurrentSection}
            data={blogPage}
          />
        </div>

        <div className="flex-1 flex md:ml-4" id="main-content">
          {/* Main Content */}
          <MainContent currentSection={currentSection} data={blogPage} />

          {/* Google Ads (Right Side) */}
          {/* <div className="hidden lg:flex flex-col space-y-6 ml-6">
            <GoogleAd />
          </div> */}
        </div>
      </div>
      <div className="container max-w-5xl flex items-start justify-center mx-auto">
        <FAQ faqs={blogPage.faqs} />
      </div>
      {/* <AdComponent adSlot="8590201806" uniqueId="ad-1" fluid={true} /> */}
      {/* <RelatedBlogs category={blogPage.category} /> */}
      <ScrollToTop />
    </div>
  );
};

export default BlogWithSidebar;

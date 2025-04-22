import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTestBySlug } from "../../Api";
import Banner from "../../components/Banner/Banner";
import Image from "../../assets/images/ielts.jpg";
import QuickLinks from "../../components/QuickLink";
import TestDetails from "./TestDetails";
import RelatedBlogs from "../../components/RelatedBlogs/RelatedBlogs";
import FAQ from "../../components/FAQ/FAQ";
import ScrollToTop from "../../components/Button/ScrollToTop";

export const Test = () => {
  const { slug } = useParams();
  const [tests, setTests] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch the destination page based on the slug
        const page = await fetchTestBySlug(slug);
        console.log(page); // Log the fetched data for debugging

        if (page) {
          // Set the tests data after fetching
          setTests(page);
        } else {
          setError("Tests not found.");
        }
      } catch (err) {
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!tests) return <div>No data available</div>;
  const links = [
    { id: "about", label: "About" },
    { id: "why", label: "Why" },
    { id: "types", label: "Types/Format" },
    { id: "guide", label: "Guide" },
    { id: "cost", label: "Cost" },
    { id: "comparison", label: "Comparison" },
    { id: "faq", label: "FAQ" },
  ];
  return (
    <div>
      <Banner label="Book Test" image={tests.banner_image} />
      <QuickLinks links={links} />
      <TestDetails tests={tests} />
      <RelatedBlogs />
      <FAQ faqs={tests.faqs} />
      <ScrollToTop />
    </div>
  );
};

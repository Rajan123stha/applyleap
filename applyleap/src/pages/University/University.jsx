import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDestinationBySlug, fetchDestinationDetails } from "../../Api";
import UniBanner from "../../components/Banner/UniBanner";
import image from "../../assets/images/australia.jpg";
import KeyInformation from "./keyInfo";
import { UniversityDetails } from "./UniversityDetails";
import RelatedBlogs from "../../components/RelatedBlogs/RelatedBlogs";
import FAQ from "../../components/FAQ/FAQ";
import ScrollToTop from "../../components/Button/ScrollToTop";

const University = () => {
  const { slug } = useParams();
  const [university, setTUniversity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch the destination page based on the slug
        const page = await fetchDestinationBySlug(slug);

        if (page && page.meta.detail_url) {
          // Fetch detailed data for the destination
          const details = await fetchDestinationDetails(page.meta.detail_url);
          setTUniversity(details);
        }
      } catch (err) {
        setError("Failed to load  data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);
  console.log(university);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!university) return <div>No data available</div>;
  const faqs = {
    0: {
      question: "What is the process for applying to study in Australia? -",
      answer:
        '<p data-block-key="kzcn5">You need to follow these…nts, apply for a visa, and plan your journey.</p>',
    },

    1: {
      question: "What are the top universities in Australia? -",
      answer:
        '<p data-block-key="kzcn5">The top universities in Australia are…sity of Melbourne, and the University of Sydney.</p>',
    },
  };
  return (
    <div>
      <UniBanner
        label="Apply Now"
        image={university.banner_image}
        quote={university.quote}
        title={university.title}
      />
      <KeyInformation university={university} />
      <UniversityDetails university={university} />
      <RelatedBlogs />
      <FAQ faqs={university.faqs} />
      <ScrollToTop />
    </div>
  );
};
export default University;

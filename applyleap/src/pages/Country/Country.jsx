import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDestinationBySlug } from "../../Api";
import QuickLinks from "../../components/QuickLink";
import CountryDetails from "./CountryDetails";
import FAQ from "../../components/FAQ/FAQ";
import RelatedBlogs from "../../components/RelatedBlogs/RelatedBlogs";
import CountryBanner from "../../components/Banner/CountryBanner";
import Banner from "../../assets/images/canada.jpg";
import ScrollToTop from "../../components/Button/ScrollToTop";
import AdComponent from "../../components/Usable/AdComponent";

const Country = () => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch the destination page based on the slug
        const page = await fetchDestinationBySlug(slug);
        console.log(page); // Log the fetched data for debugging

        if (page) {
          // Set the destination data after fetching
          setDestination(page);
        } else {
          setError("Destination not found.");
        }
      } catch (err) {
        setError("Failed to load destination data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!destination) return <div>No data available</div>;

  const links = [
    { id: "intro", label: "Introduction" },
    { id: "why-study", label: "Why Study in here" },
    { id: "requirements", label: "Requirements" },
    { id: "courses", label: "Course & University" },
    { id: "cost", label: "Cost" },
    { id: "scholarship", label: "Scholarship" },
    { id: "benefits", label: "Benefits" },
    { id: "faq", label: "FAQ" },
  ];
  return (
    <div>
      <CountryBanner
        label="Explore"
        image={destination.bannerImage}
        heading={destination.title}
        quote={destination.quote}
      />
      <QuickLinks links={links} />
      {/* <AdComponent adSlot="5578602066" uniqueId="ad-1" fluid={true} /> */}
      <CountryDetails destination={destination} />
      <FAQ faqs={destination.faqs} />
      <RelatedBlogs category="Study Abroad" />

      <ScrollToTop />
    </div>
  );
};
export default Country;

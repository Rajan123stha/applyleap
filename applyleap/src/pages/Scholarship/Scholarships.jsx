import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDestinationBySlug, fetchDestinationDetails } from "../../Api";
import { ImageBanner } from "../../components/Banner/ImageBanner";
import Banner from "../../assets/images/schlorship.jpg";
import Button from "../../components/Button/Button";
import { ScholarshipDetails } from "./ScholarshipDetails";
import { ScholarshipCountry } from "./ScholarshipCountry";
import { PageBanner } from "../../components/Banner/PageBanner";
import RelatedBlogs from "../../components/RelatedBlogs/RelatedBlogs";

export const Scholarships = () => {
  const { slug } = useParams();
  const [scholarship, setScholarship] = useState(null);
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
          setScholarship(details);
        }
      } catch (err) {
        setError("Failed to load destination data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);
  console.log(scholarship);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!scholarship) return <div>No data available</div>;
  return (
    <>
      <PageBanner image={Banner} title="" />
      <ScholarshipCountry />
      <ScholarshipDetails scholarship={scholarship} />
      <RelatedBlogs category="Scholarship" />
    </>
  );
};

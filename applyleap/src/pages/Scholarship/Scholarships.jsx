import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchScholarshipBySlug } from "../../Api";
import { ImageBanner } from "../../components/Banner/ImageBanner";
import Banner from "../../assets/images/schlorship.jpg";
import Button from "../../components/Button/Button";
import { ScholarshipDetails } from "./ScholarshipDetails";
import { ScholarshipCountry } from "./ScholarshipCountry";
import { PageBanner } from "../../components/Banner/PageBanner";
import RelatedBlogs from "../../components/RelatedBlogs/RelatedBlogs";

export const Scholarships = () => {
  const { slug = "canada-scholarship" } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch the scholarship page based on the slug
        const page = await fetchScholarshipBySlug(slug);
        console.log(page); // Log the fetched data for debugging

        if (page) {
          // Set the scholarship data after fetching
          setScholarship(page);
        } else {
          setError("Scholarship not found.");
        }
      } catch (err) {
        setError("Failed to load scholarship data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);

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

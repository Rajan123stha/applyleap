import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchScholarshipBySlug } from "../../Api";
import Banner from "../../assets/images/schlorship.jpg";
import { ScholarshipDetails } from "./ScholarshipDetails";
import { ScholarshipCountry } from "./ScholarshipCountry";
import { PageBanner } from "../../components/Banner/PageBanner";
import RelatedBlogs from "../../components/RelatedBlogs/RelatedBlogs";

export const ScholarshipPage = () => {
  return (
    <>
      <PageBanner image={Banner} title="" />
      <ScholarshipCountry />
      <RelatedBlogs category="Scholarship" />
    </>
  );
};

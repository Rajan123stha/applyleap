import React from "react";
import { ImageBanner } from "../../components/Banner/ImageBanner";
import Banner from "../../assets/images/schlorship.jpg";
import Button from "../../components/Button/Button";
import { ScholarshipDetails } from "./ScholarshipDetails";
import { ScholarshipCountry } from "./ScholarshipCountry";
import { PageBanner } from "../../components/Banner/PageBanner";

export const Scholarships = () => {
  return (
    <>
      <PageBanner image={Banner} title="" />
      <ScholarshipCountry />
      <ScholarshipDetails />
    </>
  );
};

import React from "react";
import HeroSection from "../../components/Banner/HeroSection";
import CountryCard from "../../components/Cards/CountryCard";
import CourseCard from "../../components/Cards/CourseCard";
import UniversityCard from "../../components/Cards/UniversityCard";
import BlogCard from "../../components/Cards/BlogCard";
import ScrollToTop from "../../components/Button/ScrollToTop";
import StudyAbroadPath from "./StudyAbroadPath";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <div>
      <HeroSection />
      <CountryCard />
      <CourseCard />
      <StudyAbroadPath />
      <UniversityCard />
      <BlogCard />
      <ScrollToTop />
    </div>
  );
}

export default Home;

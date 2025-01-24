import { useParams } from "react-router-dom";
import HeroSection from "../../components/Banner/HeroSection";
import CountryCard from "../../components/Cards/CountryCard";
import CourseCard from "../../components/Cards/CourseCard";
import UniversityCard from "../../components/Cards/UniversityCard";
import BlogCard from "../../components/Cards/BlogCard";
import ScrollToTop from "../../components/Button/ScrollToTop";
import StudyAbroadPath from "./StudyAbroadPath";
import Header from "../../components/Header/Header";
import React, { useEffect, useState } from "react";

import { fetchDestinations } from "../../Api";
import CountrySection from "./CountrySection";
import CourseSection from "./CourseSection";
import UniversitySection from "./UniversitySection";
function Home() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const data = await fetchDestinations();
        setDestinations(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getDestinations();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!destinations) return <div>No data available</div>;

  return (
    <div>
      <HeroSection />
      <CountrySection countries={destinations} />
      <CourseSection />
      <StudyAbroadPath />
      <UniversitySection />
      <BlogCard />
      <ScrollToTop />
    </div>
  );
}

export default Home;

import React from "react";
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa"; // React Icons for Location and University
import AustraliaImage from "../../assets/australia.jpg"; // Replace with your actual file paths
import CanadaImage from "../../assets/canada.jpg";
import UkImage from "../../assets/uk.jpg";
import Button from "../../components/Button/Button";
import UniversityCard from "../../components/Cards/UniversityCard";
import { useEffect, useState } from "react";
import { fetchUniversityDetail } from "../../Api";
import { Link } from "react-router-dom";

const UniversitySection = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const data = await fetchUniversityDetail();
        setUniversities(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getDestinations();
  }, []);
  console.log(universities);
  //to generate slug for link
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Trim leading/trailing hyphens
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!universities) return <div>No data available</div>;
  return (
    <div className="container mx-auto px-10 py-4">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-6">
        <h1 className="font-bold text-2xl lg:text-3xl mb-4 lg:mb-0">
          Popular Universities
        </h1>
        {/* View More Button */}
        <div className="hidden lg:block">
          <Link to={`/universities`}>
            <Button label="View More" />
          </Link>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {universities.slice(0, 5).map((university, index) => (
          <Link
            to={`/universities/${generateSlug(university.name)}`}
            key={index}
          >
            <UniversityCard {...university} />
          </Link>
        ))}
      </div>

      {/* View More Button for Small and Medium Devices */}
      <div className="flex justify-center lg:hidden mt-6">
        <Link to="/universities">
          <Button label="View More" />
        </Link>
      </div>
    </div>
  );
};

export default UniversitySection;

import React from "react";
import { FaMapMarkerAlt, FaFlag, FaLeaf, FaLandmark } from "react-icons/fa"; // Icons for related logos
import Button from "../../components/Button/Button";
import CountryCard from "../../components/Cards/CountryCard";
import { Link } from "react-router-dom";

const CountrySection = ({ countries }) => {
  return (
    <div className="container mx-auto px-10 py-4">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-6">
        <h1 className="font-bold text-2xl lg:text-3xl mb-4 lg:mb-0">
          Popular Destinations
        </h1>
        {/* View More Button */}
        <div className="hidden lg:block">
          <Link to="/countries">
            <Button label="View More" />
          </Link>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {countries.slice(0, 5).map((country, index) => (
          <Link to={`/countries/${country.name.toLowerCase()}`} key={index}>
            <CountryCard country={country} />
          </Link>
        ))}
      </div>

      {/* View More Button for Small and Medium Devices */}
      <div className="flex justify-center lg:hidden mt-6">
        <Link to="/countries">
          <Button label="View More" />
        </Link>
      </div>
    </div>
  );
};

export default CountrySection;

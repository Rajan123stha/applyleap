import React, { useEffect, useState } from "react";

import { fetchDestinations } from "../../Api";
import { PageBanner } from "../../components/Banner/PageBanner";
import Banner from "../../assets/images/destination.webp";
import { Link } from "react-router-dom";
import CountryCard from "../../components/Cards/CountryCard";

export const CountryIndex = () => {
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
      <PageBanner title="" image={Banner} />
      <div className="container mx-auto px-10 py-4">
        {/* Heading Section */}

        <h1 className="font-bold text-2xl lg:text-3xl mb-4 ">
          Destinations For Students
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {destinations.map((country, index) => (
            <Link to={`/countries/${country.name.toLowerCase()}`} key={index}>
              <CountryCard country={country} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

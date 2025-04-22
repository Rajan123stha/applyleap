import React, { useEffect, useState } from "react";
import { fetchUniversities } from "../../Api";
import UniversityCard from "../../components/Cards/UniversityCard";
import { PageBanner } from "../../components/Banner/PageBanner";
import Banner from "../../assets/images/uni.webp";
import { fetchUniversityDetail, fetchDestination } from "../../Api";
import { Link } from "react-router-dom";

export const UniversityIndex = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("");

  // Temp states for filters
  const [tempDestination, setTempDestination] = useState("");
  const [tempTuitionFee, setTempTuitionFee] = useState({ min: "", max: "" });
  const [tempInternationalPercentage, setTempInternationalPercentage] =
    useState("");

  const [filterDestination, setFilterDestination] = useState("");
  const [tuitionFeeRange, setTuitionFeeRange] = useState({ min: "", max: "" });
  const [internationalPercentage, setInternationalPercentage] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    const getUniversities = async () => {
      try {
        const data = await fetchUniversityDetail();
        setUniversities(data);
        setFilteredUniversities(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getUniversities();
  }, []);

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const response = await fetchDestination();
        setDestinations(response.map((data) => data.title));
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    getDestinations();
  }, []);

  // Apply sorting immediately
  useEffect(() => {
    let sortedUniversities = [...filteredUniversities];
    if (sortOption === "lowToHigh") {
      sortedUniversities.sort((a, b) => a.ranking - b.ranking);
    } else if (sortOption === "highToLow") {
      sortedUniversities.sort((a, b) => b.ranking - a.ranking);
    }
    setFilteredUniversities(sortedUniversities);
  }, [sortOption]);

  // Function to apply filters when the user clicks "Apply Filters"
  const applyFilters = () => {
    let filtered = universities;

    if (tempDestination) {
      filtered = filtered.filter(
        (university) => university.location === tempDestination
      );
    }

    if (tempTuitionFee.min || tempTuitionFee.max) {
      const userMin = parseFloat(tempTuitionFee.min) || 0;
      const userMax = parseFloat(tempTuitionFee.max) || Infinity;

      filtered = filtered.filter((university) => {
        const [universityMin, universityMax] = university.tuitionFee
          .split("-")
          .map(Number);

        return userMin <= universityMax && userMax >= universityMin;
      });
    }

    if (tempInternationalPercentage) {
      const percentage = parseFloat(tempInternationalPercentage);
      filtered = filtered.filter(
        (university) => university.internationalStudents >= percentage
      );
    }

    setFilterDestination(tempDestination);
    setTuitionFeeRange(tempTuitionFee);
    setInternationalPercentage(tempInternationalPercentage);
    setFilteredUniversities(filtered);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!universities.length) return <div>No data available</div>;

  const generateSlug = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  return (
    <div>
      <PageBanner title="" image={Banner} />
      <div className="container mx-auto px-4 py-4">
        {/* Filter Button for Small Devices */}
        <div className="block lg:hidden mb-4">
          <button
            onClick={() => setFilterVisible(!filterVisible)}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg"
          >
            {filterVisible ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div
            className={`${
              filterVisible ? "block" : "hidden"
            } lg:block bg-gray-100 p-4 rounded-lg lg:w-1/4 max-h-screen overflow-y-auto`}
          >
            <h2 className="font-semibold text-lg mb-4">Filters</h2>

            <div className="mb-6">
              <label className="block font-medium mb-2">Sort by Ranking</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg "
              >
                <option value="">Select</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-2">
                Filter by Destination
              </label>
              <select
                value={tempDestination}
                onChange={(e) => setTempDestination(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">All Destinations</option>
                {destinations.map((destination, index) => (
                  <option key={index} value={destination}>
                    {destination} [
                    {
                      universities.filter((u) => u.location === destination)
                        .length
                    }
                    ]
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-2">
                Tuition Fee Range (USD)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={tempTuitionFee.min}
                  onChange={(e) =>
                    setTempTuitionFee({
                      ...tempTuitionFee,
                      min: e.target.value,
                    })
                  }
                  className="w-1/2 px-3 py-2 border rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={tempTuitionFee.max}
                  onChange={(e) =>
                    setTempTuitionFee({
                      ...tempTuitionFee,
                      max: e.target.value,
                    })
                  }
                  className="w-1/2 px-3 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-2">
                Minimum International Student %
              </label>
              <input
                type="number"
                placeholder="e.g. 20"
                value={tempInternationalPercentage}
                onChange={(e) => setTempInternationalPercentage(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            {/* Apply Filters Button */}
            <button
              onClick={applyFilters}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold mt-4"
            >
              Apply Filters
            </button>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <h1 className="font-bold text-2xl lg:text-3xl mb-4">
              Universities
            </h1>
            {filteredUniversities.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredUniversities.map((university, index) => (
                  <Link
                    to={`/universities/${generateSlug(university.name)}`}
                    key={index}
                  >
                    <UniversityCard key={index} {...university} />
                  </Link>
                ))}
              </div>
            ) : (
              <p>No universities match the selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

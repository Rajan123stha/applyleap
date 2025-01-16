import React, { useEffect, useState } from "react";
import { fetchUniversity } from "../../Api";
import UniversityCard from "../../components/Cards/UniversityCard";
import { PageBanner } from "../../components/Banner/PageBanner";
import Banner from "../../assets/images/uni.webp";
import { fetchDestination } from "../../Api";
import { Link } from "react-router-dom";

export const UniversityIndex = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState(""); // Sorting state
  const [filterDestination, setFilterDestination] = useState(""); // Destination filter
  const [tuitionFeeRange, setTuitionFeeRange] = useState({ min: "", max: "" }); // Fee range
  const [internationalPercentage, setInternationalPercentage] = useState(""); // International students %
  const [filterVisible, setFilterVisible] = useState(false); // Filter section visibility for small devices

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const data = await fetchUniversity();
        setUniversities(data);
        setFilteredUniversities(data); // Initialize filtered data
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getDestinations();
  }, []);

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const response = await fetchDestination();
        const titles = response.map((data) => data.title);
        setDestinations(titles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setLoading(false);
      }
    };

    getDestinations();
  }, []);

  useEffect(() => {
    let sortedUniversities = [...filteredUniversities];
    if (sortOption === "lowToHigh") {
      sortedUniversities.sort((a, b) => a.rank - b.rank);
    } else if (sortOption === "highToLow") {
      sortedUniversities.sort((a, b) => b.rank - a.rank);
    }
    setFilteredUniversities(sortedUniversities);
  }, [sortOption]);

  useEffect(() => {
    let filtered = universities;

    if (filterDestination) {
      filtered = filtered.filter(
        (university) => university.location === filterDestination
      );
    }

    if (tuitionFeeRange.min || tuitionFeeRange.max) {
      const userMin = parseFloat(tuitionFeeRange.min) || 0;
      const userMax = parseFloat(tuitionFeeRange.max) || Infinity;

      filtered = filtered.filter((university) => {
        const [universityMin, universityMax] = university.tuitionFee
          .split("-")
          .map(Number);

        return (
          userMin <= universityMax && userMax >= universityMin // Overlap condition
        );
      });
    }

    if (internationalPercentage) {
      const percentage = parseFloat(internationalPercentage);
      filtered = filtered.filter(
        (university) => university.internationalStudents >= percentage
      );
    }

    setFilteredUniversities(filtered);
  }, [
    filterDestination,
    tuitionFeeRange,
    internationalPercentage,
    universities,
  ]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!universities.length) return <div>No data available</div>;

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Trim leading/trailing hyphens
  };

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
                value={filterDestination}
                onChange={(e) => setFilterDestination(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">All Destinations</option>
                {destinations.map((destination, index) => (
                  <option key={index} value={destination}>
                    {destination} [
                    {
                      universities.filter((u) => u.location === destination)
                        .length
                    }{" "}
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
                  value={tuitionFeeRange.min}
                  onChange={(e) =>
                    setTuitionFeeRange({
                      ...tuitionFeeRange,
                      min: e.target.value,
                    })
                  }
                  className="w-1/2 px-3 py-2 border rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={tuitionFeeRange.max}
                  onChange={(e) =>
                    setTuitionFeeRange({
                      ...tuitionFeeRange,
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
                value={internationalPercentage}
                onChange={(e) => setInternationalPercentage(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <h1 className="font-bold text-2xl lg:text-3xl mb-4">
              Universities
            </h1>
            <p className="text-gray-600 mb-4">
              Here is the list of all the universities Nepali students can apply
              for abroad study:
            </p>
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

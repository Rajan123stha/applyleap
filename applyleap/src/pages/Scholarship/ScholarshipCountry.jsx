import React from "react";
import Button from "../../components/Button/Button";

export const ScholarshipCountry = () => {
  const countries = [
    { name: "Australia", code: "AU", continent: "Oceania" },
    { name: "Canada", code: "CA", continent: "North America" },
    { name: "China", code: "CN", continent: "Asia" },
    { name: "France", code: "FR", continent: "Europe" },
    { name: "Germany", code: "DE", continent: "Europe" },
    { name: "UK", code: "GB", continent: "Europe" },
    { name: "USA", code: "US", continent: "North America" },
  ];
  return (
    <div className="container mx-auto px-8 py-8">
      {/* Heading Section */}

      <h1 className="font-bold text-2xl lg:text-3xl mb-4 ">Scholarship</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-10">
        {countries.map((country, index) => (
          <Button key={index} label={country.name} background="white" />
        ))}
      </div>
    </div>
  );
};

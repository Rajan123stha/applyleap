import React from "react";
import image from "../../assets/images/australia.jpg";
import placement from "../../assets/images/placement.png";
import { Link } from "react-router-dom";

export const UniversityDetails = ({ university }) => {
  const costs = university.tuition_fees;
  const alumnis = university.alumni_success_stories;
  const baseUrl = "http://127.0.0.1:8000"; // Replace with your backend URL
  const generateImageUrl = (image) => {
    console.log(image);

    return `${baseUrl}${image}`;
  };
  const images = [
    "https://www.timeshighereducation.com/student/sites/default/files/harvard-university-campus.jpg", // Replace with your image URLs
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuXRnQ3CpVnxNhQMdK1BBwcNzf39PdPC_Og&s",
    "https://www.timeshighereducation.com/student/sites/default/files/harvard-university-campus.jpg", // Replace with your image URLs
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuXRnQ3CpVnxNhQMdK1BBwcNzf39PdPC_Og&s",
    "https://www.timeshighereducation.com/student/sites/default/files/harvard-university-campus.jpg", // Replace with your image URLs
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuXRnQ3CpVnxNhQMdK1BBwcNzf39PdPC_Og&s",
  ];

  return (
    <div className="container px-6 md:px-10  mx-auto space-y-6">
      {/* About Section */}
      <section
        className="flex flex-col lg:flex-row  lg:space-x-6 py-8"
        id="about"
      >
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-black mb-4">
            About the University
          </h2>

          <div
            className="text-gray-700 "
            dangerouslySetInnerHTML={{ __html: university.introduction }}
          />
        </div>
        <img
          src={image}
          alt="About University"
          className="mt-6 lg:w-1/3 rounded-lg p-4  h-45 lg:h-60"
        />
      </section>

      {/* Why This University Section */}
      <section className="flex flex-col lg:flex-row  lg:space-x-6">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-black mb-4">
            Why Choose This University?
          </h2>
          <p className="text-gray-700">
            Here are some reasons why {university.title} is the right choice for
            you:
          </p>
          <div
            className="text-gray-700 pl-6  leading-relaxed list-disc"
            dangerouslySetInnerHTML={{ __html: university.why_choose_uni }}
          />
        </div>

        <img
          src={image}
          alt="Why This University"
          className=" mt-6 lg:w-1/3 rounded-lg p-4 h-45 lg:h-60"
        />
      </section>

      {/* Tuition and Fees Section */}
      <section className=" lg:space-x-6" id="courses-fee">
        <div className="">
          <h2 className="text-3xl font-bold text-black mb-4">
            Tuition and Fees
          </h2>
          <p className="text-gray-700 mb-4">
            The estimated cost of attendance varies by program. Below is a
            breakdown of tuition fees for the most popular programs:
          </p>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Program
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Tuition Fee (Per Year)
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {costs.map((cost, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {cost.program}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      ${cost.fee_per_year}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {cost.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Admission Details Section */}
      <section
        className="flex flex-col lg:flex-row  lg:space-x-6 py-8"
        id="admision"
      >
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-black mb-4">
            Admission Details
          </h2>
          <div
            className="text-gray-700 pl-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: university.admission_details }}
          />

          {/* <p className="text-gray-700">
            The application process is simple and straightforward:
          </p>
          <ol className="list-decimal pl-6 text-gray-700">
            <li>Check the eligibility criteria.</li>
            <li>
              Prepare your documents, including transcripts and test scores.
            </li>
            <li>Submit your application through our online portal.</li>
            <li>Wait for the admission decision.</li>
          </ol> */}
        </div>
        <img
          src={image}
          alt="Admission Details"
          className="mt-6 lg:mt-0 lg:w-1/3 rounded-lg p-4 h-45 lg:h-60"
        />
      </section>
      {/* Placement Information Section */}
      <section
        className="flex flex-col lg:flex-row  lg:space-x-6 py-8"
        id="placement"
      >
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-black mb-4">
            Placement Information
          </h2>

          <div
            className="text-gray-700 pl-6 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: university.academic_information,
            }}
          />
        </div>
        <img
          src={placement}
          alt="Academic Information"
          className="mt-6 lg:mt-0 lg:w-1/3 rounded-lg h-45 lg:h-60"
        />
      </section>
      {/* Alumni Success Stories */}
      <section id="review">
        <h2 className="text-3xl font-bold text-black mb-6  mt-8">
          Alumni Success Stories
        </h2>

        {/* Individual Alumni Story */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {alumnis.map((alumnus, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              {console.log(generateImageUrl(alumnus.image_url))}
              <img
                src={generateImageUrl(alumnus.image_url)}
                alt={`Alumnus ${alumnus.name}`}
                className="rounded-md shadow-sm mb-4 object-cover h-40 w-full"
              />
              <h3 className="text-xl font-semibold text-black">
                {alumnus.name}
              </h3>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: alumnus.details }}
              ></p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-10" id="scholarship">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Types of Scholarships
            </h2>
            <p className="text-gray-600 mt-2">
              Explore a variety of scholarships tailored to your needs and
              goals.{" "}
              <Link
                to={`/scholarship/${university.location.toLowerCase()}-scholarship`}
                className="font-semibold text-blue-600"
              >
                Click here
              </Link>{" "}
              for detailed overview.
            </p>
          </div>

          {/* Scholarship List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Merit-Based Scholarships
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Academic Excellence Scholarships</li>
                <li>Sports Scholarships</li>
                <li>Extracurricular Achievement Scholarships</li>
                <li>Leadership Scholarships</li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Need-Based Scholarships
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Low-Income Family Scholarships</li>
                <li>Single Parent Assistance Scholarships</li>
                <li>Special Disability Scholarships</li>
                <li>Emergency Financial Aid Programs</li>
              </ul>
            </div>
          </div>

          {/* Additional Scholarship Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                International Scholarships
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Study Abroad Scholarships</li>
                <li>Country-Specific Scholarships</li>
                <li>International Exchange Programs</li>
                <li>Language Proficiency Scholarships</li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Special Category Scholarships
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Minority Group Scholarships</li>
                <li>Women Empowerment Scholarships</li>
                <li>Military and Veteran Scholarships</li>
                <li>Artistic Talent Scholarships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10" id="gallery">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Gallery
            </h2>
            <p className="text-gray-600 mt-2">
              Take a look at some of our amazing moments.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

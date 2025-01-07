import React from "react";
import image from "../../assets/images/australia.jpg";

export const UniversityDetails = ({ university }) => {
  const costs = university.tuition_fees;
  const alumnis = university.alumni_success_stories;
  const baseUrl = "http://127.0.0.1:8000"; // Replace with your backend URL
  const generateImageUrl = (image) => {
    console.log(image);

    return `${baseUrl}${image}`;
  };
  return (
    <div className="container px-6 md:px-10  mx-auto space-y-6">
      {/* About Section */}
      <section className="flex flex-col lg:flex-row  lg:space-x-6 py-8">
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

      {/* Academic Information Section */}
      <section className="flex flex-col lg:flex-row  lg:space-x-6 py-8">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-black mb-4">
            Academic Information
          </h2>

          <div
            className="text-gray-700 pl-6 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: university.academic_information,
            }}
          />
        </div>
        <img
          src={image}
          alt="Academic Information"
          className="mt-6 lg:mt-0 lg:w-1/3 rounded-lg h-45 lg:h-60"
        />
      </section>

      {/* Admission Details Section */}
      <section className="flex flex-col lg:flex-row  lg:space-x-6">
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

      {/* Tuition and Fees Section */}
      <section className=" lg:space-x-6">
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

      {/* Alumni Success Stories */}
      <section>
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

      {/* Research Opportunities */}
      {/* <section className="rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-black mb-4">
          Research Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-gray-700">
            XYZ University is home to cutting-edge research facilities and
            collaborative opportunities. Students work on groundbreaking
            projects in areas like AI, renewable energy, and healthcare
            innovations. Our faculty are leaders in their fields, mentoring
            students to excel in their research ambitions.
          </p>
          <img
            src={image}
            alt="Research Opportunities"
            className="rounded-lg shadow-md object-cover h-64 w-full"
          />
        </div>
      </section> */}
    </div>
  );
};

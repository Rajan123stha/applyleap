import React from "react";
import Image1 from "../../assets/images/uk.jpg"; // Add an image for the visa guide section
import { PageBanner } from "../../components/Banner/PageBanner";

const VisaGuide = () => {
  return (
    <>
      <PageBanner title="Student Visa Guide" image={Image1} />
      <div className="container px-6 md:px-10 mx-auto space-y-6">
        {/* Visa Guide Header */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Student Visa Guide
          </h2>
          <p className="text-lg text-gray-600">
            A comprehensive guide to help students navigate the visa application
            process for studying abroad.
          </p>
        </div>

        {/* Visa Process Section */}
        <div className="flex flex-col lg:flex-row items-center py-8 lg:items-start gap-4">
          {/* Text Section */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">
              Steps to Apply for a Student Visa
            </h2>
            <div className="text-gray-700 text-justify text-sm leading-relaxed">
              <ul className="space-y-4">
                <li>
                  <strong>Step 1:</strong> Choose the right study program and
                  institution.
                </li>
                <li>
                  <strong>Step 2:</strong> Prepare all required documents
                  including your passport, acceptance letter, financial proof,
                  etc.
                </li>
                <li>
                  <strong>Step 3:</strong> Apply for the student visa at the
                  embassy or consulate.
                </li>
                <li>
                  <strong>Step 4:</strong> Attend the visa interview and provide
                  all necessary details.
                </li>
                <li>
                  <strong>Step 5:</strong> Wait for the visa approval and
                  prepare for departure.
                </li>
              </ul>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/3 mt-6">
            <img
              src={Image1}
              alt="Visa Process"
              className="rounded shadow-md w-full lg:h-48"
            />
          </div>
        </div>

        {/* Document Checklist Section */}
        <div className="flex flex-col lg:flex-row items-center py-8 lg:items-start gap-4">
          {/* Text Section */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Required Documents</h2>
            <div className="text-gray-700 text-justify text-sm leading-relaxed">
              <ul className="space-y-4">
                <li>Valid passport with at least 6 months of validity.</li>
                <li>Acceptance letter from the university or college.</li>
                <li>
                  Proof of financial ability to pay tuition fees and living
                  expenses.
                </li>
                <li>Medical examination reports (if applicable).</li>
                <li>Visa application form (usually available online).</li>
                <li>
                  Passport-sized photos as per the specific embassy
                  requirements.
                </li>
              </ul>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/3 mt-6">
            <img
              src={Image1}
              alt="Document Checklist"
              className="rounded shadow-md w-full lg:h-48"
            />
          </div>
        </div>

        {/* Visa Interview Tips Section */}
        <div className="flex flex-col lg:flex-row items-center py-8 lg:items-start gap-4">
          {/* Text Section */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Visa Interview Tips</h2>
            <div className="text-gray-700 text-justify text-sm leading-relaxed">
              <ul className="space-y-4">
                <li>Be confident and honest while answering questions.</li>
                <li>Ensure that all your documents are ready and organized.</li>
                <li>
                  Prepare for questions regarding your study plans and future
                  goals.
                </li>
                <li>
                  Show proof of your financial capability to support your
                  education.
                </li>
                <li>Stay calm and respectful during the interview process.</li>
              </ul>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/3 mt-6">
            <img
              src={Image1}
              alt="Visa Interview"
              className="rounded shadow-md w-full lg:h-48"
            />
          </div>
        </div>

        {/* Visa Fees Section */}
        <div className="py-8" id="cost">
          <h2 className="text-2xl font-bold mb-4">Visa Application Costs</h2>
          <p className="text-gray-700 mb-4 text-justify">
            The cost of applying for a student visa varies depending on the
            country you're applying to. Below are some general fees:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-600 border-b">
                    Country
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600 border-b">
                    Visa Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b text-gray-700">USA</td>
                  <td className="px-4 py-2 border-b text-gray-700">USD 160</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-gray-700">Canada</td>
                  <td className="px-4 py-2 border-b text-gray-700">CAD 150</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-gray-700">
                    Australia
                  </td>
                  <td className="px-4 py-2 border-b text-gray-700">AUD 620</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-gray-700">UK</td>
                  <td className="px-4 py-2 border-b text-gray-700">GBP 348</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Visa Processing Time Section */}
        <div className="py-8">
          <h2 className="text-2xl font-bold mb-4">Visa Processing Time</h2>
          <p className="text-gray-700 mb-4 text-justify">
            The processing time for a student visa varies by country. On
            average, it can take anywhere from a few weeks to a few months. Here
            are some typical processing times:
          </p>
          <ul className="space-y-4">
            <li>USA: 3-5 weeks</li>
            <li>Canada: 4-6 weeks</li>
            <li>Australia: 2-4 weeks</li>
            <li>UK: 2-3 weeks</li>
          </ul>
        </div>

        {/* Conclusion Section */}
        <div className="py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Good Luck on Your Visa Application!
          </h2>
          <p className="text-gray-600">
            Follow the steps carefully, and we wish you success with your
            student visa application. Remember to check the embassy’s website
            for any specific requirements.
          </p>
        </div>
      </div>
    </>
  );
};

export default VisaGuide;

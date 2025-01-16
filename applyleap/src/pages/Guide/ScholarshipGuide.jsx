import React from "react";
import scholarshipImage from "../../assets/images/guide.jpg";
import { PageBanner } from "../../components/Banner/PageBanner";

export const ScholarshipGuide = () => {
  return (
    <>
      <PageBanner title="Scholarship Guide" image={scholarshipImage} />
      <div className="container px-6 md:px-10 mx-auto space-y-10">
        {/* Header Section */}
        <section className="py-10 px-4 bg-green-50 text-center rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-green-800 mb-4">
            Scholarship Guide
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Your ultimate guide to finding and applying for scholarships to fund
            your study abroad dreams.
          </p>
        </section>

        {/* Why Scholarships Are Important */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-10 px-4 items-center shadow-md">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Why Scholarships Are Important
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Scholarships can significantly reduce the financial burden of
              studying abroad. They not only cover tuition fees but can also
              help with living expenses, travel costs, and more, making
              education accessible to everyone.
            </p>
          </div>
          <img
            src={scholarshipImage}
            alt="Scholarship Opportunities"
            className="mt-6 lg:w-1/3 rounded-xl shadow-lg h-60"
          />
        </section>

        {/* Types of Scholarships */}
        <section className="py-10 px-4 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Types of Scholarships
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>
              <strong>Merit-Based Scholarships:</strong> Awarded to students
              with outstanding academic or extracurricular achievements.
            </li>
            <li>
              <strong>Need-Based Scholarships:</strong> For students who
              demonstrate financial need.
            </li>
            <li>
              <strong>Program-Specific Scholarships:</strong> Offered by
              specific programs or departments for eligible students.
            </li>
            <li>
              <strong>Country-Specific Scholarships:</strong> Provided by
              governments or organizations for students from particular
              countries.
            </li>
            <li>
              <strong>Sports Scholarships:</strong> For students excelling in
              athletics.
            </li>
            <li>
              <strong>Research Scholarships:</strong> For students involved in
              research projects.
            </li>
          </ul>
        </section>

        {/* How to Find Scholarships */}
        <section className="py-10 px-4 shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            How to Find Scholarships
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li>
              Research online using scholarship search engines and official
              websites.
            </li>
            <li>
              Check with your university or program for available scholarships.
            </li>
            <li>Explore government and private organization scholarships.</li>
            <li>Reach out to alumni or current students for guidance.</li>
          </ol>
        </section>

        {/* Application Tips */}
        <section className="py-10 px-4 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Tips for Applying
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Start your search early to avoid missing deadlines.</li>
            <li>Read the eligibility criteria carefully before applying.</li>
            <li>
              Prepare a strong Statement of Purpose (SOP) highlighting your
              achievements and goals.
            </li>
            <li>
              Gather all required documents, including transcripts, test scores,
              and recommendation letters.
            </li>
            <li>Customize your application for each scholarship.</li>
          </ul>
        </section>

        {/* Common Mistakes to Avoid */}
        <section className="py-10 px-4 shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Common Mistakes to Avoid
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Missing application deadlines.</li>
            <li>Providing incomplete or incorrect information.</li>
            <li>Not tailoring your application to the specific scholarship.</li>
            <li>Overlooking smaller or less well-known scholarships.</li>
          </ul>
        </section>

        {/* Useful Resources */}
        <section className="py-10 px-4 bg-green-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Useful Resources
          </h2>
          <p className="text-gray-700 mb-4">
            Here are some platforms to help you discover scholarships:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>
              <a
                href="https://www.scholarships.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Scholarships.com
              </a>
            </li>
            <li>
              <a
                href="https://www.fastweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Fastweb
              </a>
            </li>
            <li>
              <a
                href="https://www.chegg.com/scholarships"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Chegg Scholarships
              </a>
            </li>
            <li>
              <a
                href="https://www.opportunitydesk.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Opportunity Desk
              </a>
            </li>
          </ul>
        </section>

        {/* Closing Section */}
        <section className="py-10 px-4 text-center bg-green-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Final Thoughts
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Scholarships can make studying abroad more affordable and
            accessible. By following this guide, you can increase your chances
            of securing the financial support you need. Best of luck in your
            scholarship journey!
          </p>
        </section>
      </div>
    </>
  );
};

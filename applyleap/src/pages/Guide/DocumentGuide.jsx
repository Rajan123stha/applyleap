import React from "react";
import documentImage from "../../assets/images/uk.jpg";
import { PageBanner } from "../../components/Banner/PageBanner";

export const DocumentPreparationGuide = () => {
  return (
    <>
      <PageBanner title="Document Preparation Guide" image={documentImage} />
      <div className="container px-6 md:px-10 mx-auto space-y-10">
        {/* Header Section */}
        <section className="py-8 px-4  bg-blue-50 text-center rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
            Document Preparation Guide
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            A comprehensive guide to help you gather and organize the essential
            documents required for studying abroad.
          </p>
        </section>

        {/* Why Document Preparation Matters */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8 px-4  items-center">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Why Document Preparation Matters
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Proper documentation is a crucial step in your study abroad
              journey. Ensuring that you have all the necessary documents
              prepared and organized can save you from delays and unnecessary
              stress during the application process.
            </p>
          </div>
          <img
            src={documentImage}
            alt="Document Preparation"
            className="mt-6 lg:w-1/3 rounded-xl shadow-lg h-60"
          />
        </section>

        {/* List of Required Documents */}
        <section className="py-8 px-4  bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            List of Required Documents
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Passport with a valid expiration date.</li>
            <li>Academic transcripts and certificates.</li>
            <li>Language proficiency test scores (e.g., IELTS, TOEFL).</li>
            <li>Statement of Purpose (SOP) or Personal Statement.</li>
            <li>Letter(s) of Recommendation from professors or employers.</li>
            <li>
              Proof of financial support (e.g., bank statements, scholarship
              letters).
            </li>
            <li>
              Health and medical certificates, including vaccination records.
            </li>
            <li>Visa application forms and supporting documents.</li>
          </ul>
        </section>

        {/* Tips for Document Preparation */}
        <section className="py-8 px-4 shadow-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Tips for Document Preparation
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li>Start early to avoid last-minute stress.</li>
            <li>
              Ensure all documents are in English or accompanied by certified
              translations.
            </li>
            <li>
              Keep multiple copies of each document, both physical and digital.
            </li>
            <li>
              Organize your documents in a folder or binder for easy access.
            </li>
            <li>
              Double-check the specific requirements of your chosen universities
              or countries.
            </li>
            <li>
              Get documents notarized if required by your destination country.
            </li>
          </ol>
        </section>

        {/* Common Mistakes to Avoid */}
        <section className="py-8 px-4  bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Common Mistakes to Avoid
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Submitting incomplete or outdated documents.</li>
            <li>
              Failing to verify the specific document requirements of your
              program.
            </li>
            <li>Ignoring deadlines for document submission.</li>
            <li>Not keeping backup copies of your documents.</li>
          </ul>
        </section>

        {/* Useful Resources */}
        <section className="py-8 px-4 shadow-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Useful Resources
          </h2>
          <p className="text-gray-700 mb-4">
            Here are some resources to help you with document preparation:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>
              <a
                href="https://travel.state.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                U.S. Department of State - Passport Services
              </a>
            </li>
            <li>
              <a
                href="https://www.ielts.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                IELTS Official Website
              </a>
            </li>
            <li>
              <a
                href="https://www.toefl.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                TOEFL Official Website
              </a>
            </li>
            <li>
              <a
                href="https://www.who.int"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                World Health Organization - Vaccination Guidelines
              </a>
            </li>
          </ul>
        </section>

        {/* Closing Section */}
        <section className="py-8 px-4  text-center bg-blue-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Final Thoughts
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Document preparation is a vital step in your study abroad journey.
            By following this guide, you'll be well-prepared to meet the
            requirements and deadlines of your chosen programs. Good luck!
          </p>
        </section>
      </div>
    </>
  );
};

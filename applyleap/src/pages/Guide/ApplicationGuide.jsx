import React from "react";
import image from "../../assets/images/uk.jpg";
import { PageBanner } from "../../components/Banner/PageBanner";

export const ApplicationGuide = () => {
  return (
    <>
      <PageBanner title="Application Guide" image={image} />
      <div className="container px-6 md:px-10 mx-auto space-y-8">
        {/* Header Section */}
        <section className="py-8 text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Application Guide
          </h1>
          <p className="text-gray-700 text-lg">
            Your step-by-step guide to applying for an abroad study program.
          </p>
        </section>

        {/* Step 1: Research Programs */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <img
            src={image}
            alt="Research Programs"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60 mb-6 lg:mb-0"
          />
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 1: Research Programs
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Begin by identifying your academic and career goals. Explore
              various universities and programs that align with your
              aspirations. Consider factors like program curriculum, location,
              tuition fees, and ranking.
            </p>
          </div>
        </section>

        {/* Step 2: Check Eligibility */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 2: Check Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Review the eligibility criteria for your chosen programs. Ensure
              you meet the academic requirements, language proficiency scores,
              and any other prerequisites specified by the university.
            </p>
          </div>
          <img
            src={image}
            alt="Check Eligibility"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60"
          />
        </section>

        {/* Step 3: Gather Documents */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <img
            src={image}
            alt="Gather Documents"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60 mb-6 lg:mb-0"
          />
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 3: Gather Documents
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Prepare all necessary documents, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Academic transcripts</li>
              <li>Language test scores (e.g., TOEFL, IELTS)</li>
              <li>Statement of Purpose (SOP)</li>
              <li>Letters of recommendation</li>
              <li>Passport copy</li>
            </ul>
          </div>
        </section>

        {/* Step 4: Submit Application */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 4: Submit Application
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Complete the online application form on the university's website.
              Upload the required documents and pay the application fee.
              Double-check all the information before submitting.
            </p>
          </div>
          <img
            src={image}
            alt="Submit Application"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60"
          />
        </section>

        {/* Step 5: Track Application Status */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <img
            src={image}
            alt="Track Application"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60 mb-6 lg:mb-0"
          />
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 5: Track Application Status
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Keep an eye on your email for updates from the university. Some
              institutions provide an online portal where you can track the
              status of your application.
            </p>
          </div>
        </section>

        {/* Step 6: Acceptance and Visa Process */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 6: Acceptance and Visa Process
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Once you receive an offer letter, accept it within the stipulated
              time. Start your visa application process by gathering the
              required documents and attending a visa interview if necessary.
            </p>
          </div>
          <img
            src={image}
            alt="Visa Process"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60"
          />
        </section>

        {/* Tips for a Successful Application */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Tips for a Successful Application
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Start early and adhere to deadlines.</li>
            <li>Ensure your documents are accurate and up-to-date.</li>
            <li>Write a compelling Statement of Purpose (SOP).</li>
            <li>Seek guidance from mentors or education consultants.</li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>What is the application fee for most universities?</li>
            <li>How long does the application process take?</li>
            <li>Can I apply to multiple universities at the same time?</li>
            <li>What should I include in my Statement of Purpose?</li>
          </ul>
        </section>
      </div>
      <div className="container px-6 md:px-10 mx-auto space-y-8">
        {/* Header Section */}
        <section className="py-8 text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Application Guide
          </h1>
          <p className="text-gray-700 text-lg">
            Your step-by-step guide to applying for an abroad study program.
          </p>
        </section>

        {/* Step 1: Research Programs */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <img
            src={image}
            alt="Research Programs"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60 mb-6 lg:mb-0"
          />
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 1: Research Programs
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Begin by identifying your academic and career goals. Explore
              various universities and programs that align with your
              aspirations. Consider factors like program curriculum, location,
              tuition fees, and ranking.
            </p>
          </div>
        </section>

        {/* Step 2: Check Eligibility */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 2: Check Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Review the eligibility criteria for your chosen programs. Ensure
              you meet the academic requirements, language proficiency scores,
              and any other prerequisites specified by the university.
            </p>
          </div>
          <img
            src={image}
            alt="Check Eligibility"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60"
          />
        </section>

        {/* Step 3: Gather Documents */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <img
            src={image}
            alt="Gather Documents"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60 mb-6 lg:mb-0"
          />
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 3: Gather Documents
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Prepare all necessary documents, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Academic transcripts</li>
              <li>Language test scores (e.g., TOEFL, IELTS)</li>
              <li>Statement of Purpose (SOP)</li>
              <li>Letters of recommendation</li>
              <li>Passport copy</li>
            </ul>
          </div>
        </section>

        {/* Step 4: Submit Application */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 4: Submit Application
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Complete the online application form on the university's website.
              Upload the required documents and pay the application fee.
              Double-check all the information before submitting.
            </p>
          </div>
          <img
            src={image}
            alt="Submit Application"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60"
          />
        </section>

        {/* Step 5: Track Application Status */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <img
            src={image}
            alt="Track Application"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60 mb-6 lg:mb-0"
          />
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 5: Track Application Status
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Keep an eye on your email for updates from the university. Some
              institutions provide an online portal where you can track the
              status of your application.
            </p>
          </div>
        </section>

        {/* Step 6: Acceptance and Visa Process */}
        <section className="flex flex-col lg:flex-row lg:space-x-6 py-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Step 6: Acceptance and Visa Process
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Once you receive an offer letter, accept it within the stipulated
              time. Start your visa application process by gathering the
              required documents and attending a visa interview if necessary.
            </p>
          </div>
          <img
            src={image}
            alt="Visa Process"
            className="lg:w-1/3 rounded-xl shadow-md h-48 lg:h-60"
          />
        </section>

        {/* Tips for a Successful Application */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Tips for a Successful Application
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Start early and adhere to deadlines.</li>
            <li>Ensure your documents are accurate and up-to-date.</li>
            <li>Write a compelling Statement of Purpose (SOP).</li>
            <li>Seek guidance from mentors or education consultants.</li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>What is the application fee for most universities?</li>
            <li>How long does the application process take?</li>
            <li>Can I apply to multiple universities at the same time?</li>
            <li>What should I include in my Statement of Purpose?</li>
          </ul>
        </section>
      </div>
    </>
  );
};

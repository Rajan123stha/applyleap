import React from "react";
import contactImage from "../../assets/images/uk.jpg";
import { PageBanner } from "../../components/Banner/PageBanner";

export const ContactUs = () => {
  return (
    <>
      <PageBanner title="Contact Us" image={contactImage} />
      <div className="container px-6 md:px-10 mx-auto space-y-10">
        {/* Header Section */}
        <section className="py-10 bg-blue-50 text-center rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us, and we’ll be
            happy to help.
          </p>
        </section>

        {/* Contact Information Section */}
        <section className="py-10 flex flex-col lg:flex-row lg:space-x-6 items-center">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You can contact us through any of the following methods. We’re
              here to provide support and answer your queries.
            </p>
            <ul className="list-none mt-6 space-y-4 text-gray-700">
              <li>
                <strong>Email:</strong> support@studyabroad.com
              </li>
              <li>
                <strong>Phone:</strong> +1 (123) 456-7890
              </li>
              <li>
                <strong>Address:</strong> 123 Study Abroad Lane, Education City,
                Country
              </li>
            </ul>
          </div>
          <img
            src={contactImage}
            alt="Contact Us"
            className="mt-6 lg:w-1/3 rounded-xl shadow-lg h-60"
          />
        </section>

        {/* Contact Form Section */}
        <section className="py-10 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-bold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Closing Section */}
        <section className="py-10 text-center bg-blue-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            We’re Here to Help
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Don’t hesitate to reach out. Our team is dedicated to assisting you
            on your journey to study abroad.
          </p>
        </section>
      </div>
    </>
  );
};

import React, { useEffect, useState } from "react";

import { fetchDestinationBySlug, fetchDestinationDetails } from "../../Api";
import eventImage from "../../assets/images/uk.jpg";
import { PageBanner } from "../../components/Banner/PageBanner";
import FAQ from "../../components/FAQ/FAQ";

export const EventsPage = () => {
  const slug = "events";
  const [tests, setTests] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch the destination page based on the slug
        const page = await fetchDestinationBySlug(slug);

        if (page && page.meta.detail_url) {
          // Fetch detailed data for the destination
          const details = await fetchDestinationDetails(page.meta.detail_url);
          setTests(details);
        }
      } catch (err) {
        setError("Failed to load  data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);
  console.log(tests);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!tests) return <div>No data available</div>;

  const events = tests.event_details;
  const baseUrl = "http://127.0.0.1:8000"; // Replace with your backend URL
  const generateImageUrl = (image) => {
    console.log(image);

    return `${baseUrl}${image?.url}`;
  };
  //   const events = [
  //     {
  //       id: 1,
  //       title: "Study Abroad Fair 2025",
  //       date: "March 15, 2025",
  //       time: "10:00 AM - 4:00 PM",
  //       location: "Downtown Conference Center, New York",
  //       description:
  //         "Join us for a comprehensive study abroad fair featuring representatives from universities worldwide. Explore programs, scholarships, and more!",
  //     },
  //     {
  //       id: 2,
  //       title: "Scholarship Workshop",
  //       date: "April 10, 2025",
  //       time: "2:00 PM - 5:00 PM",
  //       location: "Virtual (Zoom)",
  //       description:
  //         "Learn how to find and apply for scholarships with our expert-led workshop. Tips, resources, and live Q&A included!",
  //     },
  //     {
  //       id: 3,
  //       title: "IELTS Preparation Seminar",
  //       date: "May 20, 2025",
  //       time: "1:00 PM - 3:00 PM",
  //       location: "City Library Auditorium, Boston",
  //       description:
  //         "Enhance your IELTS skills with strategies from top instructors. Ideal for students aiming to achieve high scores!",
  //     },
  //   ];

  return (
    <>
      <PageBanner label="Upcoming Events" image={eventImage} />
      <div className="container px-6 md:px-10 mx-auto space-y-10">
        {/* Header Section */}
        <section className="py-10 bg-green-50 text-center rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-green-800 mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Stay updated with our future events designed to guide and support
            your study abroad journey. Mark your calendars!
          </p>
        </section>

        {/* Events List */}
        <section className="space-y-8">
          {events.map((event, key) => (
            <div
              key={key}
              className="flex flex-col lg:flex-row items-start bg-white rounded-lg shadow-lg p-6 space-y-4 lg:space-y-0 lg:space-x-6"
            >
              <img
                src={generateImageUrl(event.banner_image)}
                alt={event.event_name}
                className="rounded-lg lg:w-1/3 h-60 object-cover shadow-md"
              />
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  {event.event_name}
                </h2>
                <p className="text-gray-600 mb-2">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Location:</strong> {event.location}
                </p>
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                ></p>
              </div>
            </div>
          ))}
        </section>

        {/* Closing Section */}
        <section className="py-10 text-center bg-green-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Don’t Miss Out!
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Make sure to attend these events to gain valuable insights and
            opportunities for your study abroad plans. Stay tuned for updates!
          </p>
        </section>
      </div>
      <FAQ faqs={tests.faqs} />
    </>
  );
};

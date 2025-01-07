import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDestinationBySlug, fetchDestinationDetails } from "../../Api";

const DestinationPage = () => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch the destination page based on the slug
        const page = await fetchDestinationBySlug(slug);
        console.log(page);
        if (page && page.meta.detail_url) {
          // Fetch detailed data for the destination
          const details = await fetchDestinationDetails(page.meta.detail_url);
          setDestination(details);
        }
      } catch (err) {
        setError("Failed to load destination data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!destination) return <div>No data available</div>;

  const {
    title,
    banner_image,
    quote,
    why_study_here,
    requirements,
    courses,
    universities,
  } = destination;
  console.log(destination);
  return (
    <div className="destination-page">
      {banner_image && (
        <div className="banner-image">
          <img src={banner_image.url} alt={title} />
        </div>
      )}
      <h1>{title}</h1>
      {quote && <blockquote>{quote}</blockquote>}
      {why_study_here && (
        <section>
          <h2>Why Study Here?</h2>
          <div dangerouslySetInnerHTML={{ __html: why_study_here }} />
        </section>
      )}
      {requirements && (
        <section>
          <h2>Requirements</h2>
          <div dangerouslySetInnerHTML={{ __html: requirements }} />
        </section>
      )}
      {courses && (
        <section>
          <h2>Courses</h2>
          <div dangerouslySetInnerHTML={{ __html: courses }} />
        </section>
      )}
      {universities && (
        <section>
          <h2>Universities</h2>
          <div dangerouslySetInnerHTML={{ __html: universities }} />
        </section>
      )}
    </div>
  );
};

export default DestinationPage;

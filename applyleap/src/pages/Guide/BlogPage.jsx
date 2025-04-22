import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BlogPage = () => {
  const { id } = useParams(); // Get the dynamic 'id' from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); // Set loading state when new fetch is triggered
    fetch(`http://localhost:3000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data); // Set the blog data to state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch blog");
        setLoading(false);
      });
  }, [id]); // Re-run the effect whenever the 'id' changes
  console.log(blog);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const renderRichText = (richText) => {
    if (!richText?.root) return null;

    const renderNode = (node) => {
      switch (node.type) {
        case "root":
          return node.children?.map((child, index) => renderNode(child));
        case "paragraph":
          return (
            <p key={node.id || Math.random()}>
              {node.children?.map((child, index) => renderNode(child))}
            </p>
          );
        case "text":
          return node.format === 1 ? (
            <strong key={node.id || Math.random()}>{node.text}</strong>
          ) : (
            node.text
          );
        default:
          return null;
      }
    };

    return renderNode(richText.root);
  };

  const getImageUrl = (relativeUrl) => {
    const baseUrl = "http://localhost:3000/";
    return `${baseUrl}${relativeUrl}`;
  };
  return (
    <div>
      <h1 className="mt-8">{blog.title}</h1>
      {blog.bannerImage && (
        <img src={getImageUrl(blog.bannerImage.url)} alt="Banner" />
      )}
      <p>
        By {blog.writer} on {new Date(blog.publishDate).toDateString()}
      </p>
      <p>{blog.summary}</p>

      {/* Blog Sections */}
      <h2 className="text-2xl font-semibold mt-6">Sections</h2>
      {blog.sections?.map((section, index) => (
        <div key={section.id || index} className="my-4">
          <h3 className="text-xl font-medium">{section.heading}</h3>
          <div className="text-base">{renderRichText(section.content)}</div>
        </div>
      ))}

      {/* FAQs */}
      <h2 className="text-2xl font-semibold mt-6">FAQs</h2>
      {blog.faqs?.map((faq, index) => (
        <div key={faq.id || index} className="my-4">
          <h3 className="text-xl font-medium">{faq.question}</h3>
          <div className="text-base">{renderRichText(faq.answer)}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

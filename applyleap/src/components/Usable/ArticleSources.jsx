import { useState } from "react";

const ArticleSources = ({ sources }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!sources || sources.length === 0) return null;

  return (
    <section className="border rounded-lg shadow-sm mt-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        aria-expanded={isExpanded}
      >
        <h2 className="font-semibold text-gray-700">ARTICLE SOURCES</h2>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-4 py-3 border-t bg-gray-50">
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-2">
              Some of the sources we have used to ensure the accuracy and depth
              of this content include government publications, industry
              research, and expert insights.
            </p>

            {sources.map((source, index) => (
              <div key={index} className="flex gap-2">
                <span className="text-gray-500">{index + 1}.</span>
                <div>
                  <div className="text-black-600 hover:underline font-medium">
                    {source.title}
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {source.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ArticleSources;

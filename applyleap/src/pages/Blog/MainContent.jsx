import React from "react";

const MainContent = ({ currentSection, data }) => {
  const content = data.sections.reduce((acc, section) => {
    const formattedHeading = section.heading.toLowerCase().replace(/ /g, "-");
    // Format the ID

    acc[section.heading] = (
      <div id={formattedHeading}>
        <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
        <div
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: section.content }}
        ></div>
      </div>
    );
    return acc;
  }, {});

  return (
    <div
      className="p-6 md:px-16 mx-2 mt-8 md:w-4/5 text-justify"
      id="main-content"
    >
      {Object.keys(content).map((key) => (
        <div key={key} className="mb-16 text-lg">
          {content[key]}
        </div>
      ))}
    </div>
  );
};

export default MainContent;

import React from "react";
import { BASE_URL } from "../../config";
import ArticleSources from "../../components/Usable/ArticleSources";
const parseRichTextToHTML = (content) => {
  if (!content || !content.root || !content.root.children) return "";

  return content.root.children
    .map((child) => {
      if (child.type === "paragraph") {
        return `<p class="mb-4 text-base">${child.children
          .map((textNode) => {
            let formattedText = textNode.text;
            if (textNode.format === 1)
              formattedText = `<strong>${textNode.text}</strong>`;
            if (textNode.format === 2)
              formattedText = `<em>${textNode.text}</em>`;
            return formattedText;
          })
          .join("")}</p>`;
      }

      if (child.type === "heading") {
        console.log(child.tag);
        return `<${child.tag}>${child.children.map((t) => t.text).join("")}</${
          child.tag
        }>`;
      }

      if (child.type === "list") {
        const tag = child.listType === "number" ? "ol" : "ul";
        return `<${tag}>${child.children
          .map(
            (li) =>
              `<li class="mb-1 text-base">${li.children
                .map((t) => t.text)
                .join("")}</li>`
          )
          .join("")}</${tag}>`;
      }

      if (child.type === "upload" && child.value && child.value.url) {
        console.log(child.value.url);
        return `<img className="mt-2" src="${`${BASE_URL}${child.value?.url}`}" alt="${
          child.value.alt || "Image"
        }" />`;
      }

      return "";
    })
    .join("");
};

const MainContent = ({ currentSection, data }) => {
  // Replace with your backend URL
  const sources = [
    {
      title: "10 Steps To Start Your Business",
      url: "https://www.sba.gov/business-guide/10-steps-start-your-business",
    },
    {
      title: "Corporations",
      url: "https://www.law.cornell.edu/wex/corporations",
    },
    // Add more sources as needed
  ];
  return (
    <div
      className="md:p-4 p-4 md:pl-4 mx-2 mt-4 md:w-4/5 text-justify"
      id="main-content"
    >
      {data.sections.map((section) => {
        const formattedHeading = section.heading
          .toLowerCase()
          .replace(/ /g, "-");
        return (
          <div key={section.id} id={formattedHeading} className="mb-16 text-lg">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">
              {section.heading}
            </h2>
            <div
              className="mb-4 blogSection"
              dangerouslySetInnerHTML={{
                __html: parseRichTextToHTML(section.content),
              }}
            ></div>
          </div>
        );
      })}

      <ArticleSources sources={data.sources} />
    </div>
  );
};

export default MainContent;

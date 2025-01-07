import React from "react";
import Image1 from "../../assets/images/ielts.jpg";
const TestDetails = ({ tests }) => {
  const test = [
    {
      title: "IELTS Academic Test (IELTS-A)",
      description:
        "The USA offers a wide array of academic disciplines and specialized programs in various fields, providing students with ample choices to pursue their interests.",
    },
    {
      title: "IELTS General Training Test (IELTS-GT)",
      description:
        "Renowned for its high-quality education system, the USA boasts numerous top-ranked universities and colleges known for academic excellence, innovative teaching methods, and advanced research opportunities.",
    },
    {
      title: "IELTS for UKVI",
      description:
        "A degree from a US institution holds international prestige, offering graduates a competitive edge in the global job market.",
    },
  ];
  const costs = tests.costs;
  const comps = tests.comparisons;
  const data = [
    {
      expense:
        "IELTS Academic and General Training - IELTS exam fee in Nepal for Paper-Based test",
      cost: "NPR 31,500",
    },
    {
      expense:
        "IELTS Academic and General Training - IELTS exam fee in Nepal for Computer-delivered test",
      cost: "NPR 28,800",
    },
    {
      expense: "UKVI",
      cost: "NPR 34,000",
    },
    {
      expense: "Life Skills",
      cost: "NPR 34,000",
    },
  ];
  return (
    <div>
      <div className="container px-6 md:px-10  mx-auto space-y-6">
        {/* Wrapper with Flexbox */}
        <div
          className="flex flex-col lg:flex-row items-center  py-8 my-8 lg:items-start gap-4"
          id="about"
        >
          {/* Text Section */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">What is {tests.title}?</h2>
            <div
              className="text-gray-700 text-justifytext-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: tests.short_intro }}
            />
            <p className="text-gray-700 text-justify lg:pr-4"></p>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/3">
            <img
              src={Image1}
              alt="Study in USA"
              className="rounded shadow-md w-full lg:h-48"
            />
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row items-center py-8  my-8 lg:items-start gap-4"
          id="about"
        >
          {/* Text Section */}
          <div className="lg:w-2/3" id="why">
            <h2 className="text-2xl font-bold mb-4">Why {tests.title}?</h2>

            <div
              className="text-gray-700 text-justifytext-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: tests.why_take_exam }}
            />
          </div>
          {/* Image Section */}
          <div className="lg:w-1/3 mt-6">
            <img
              src={Image1}
              alt="Study in USA"
              className="rounded shadow-md w-full  lg:h-48"
            />
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row items-center my-8 py-8 lg:items-start gap-4"
          id="types"
        >
          {/* Text Section */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">
              Types of Ielts Test Exam
            </h2>
            <div
              className="text-gray-700 text-justifytext-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: tests.exam_types }}
            />
            {/* <ul className="space-y-4 text-justify">
              {test.map((tests, index) => (
                <li key={index} className="text-gray-700">
                  <h3 className="font-bold text-lg ">{tests.title}</h3>
                  <p>{tests.description}</p>
                </li>
              ))}
            </ul> */}
          </div>
          {/* Image Section */}
          <div className="lg:w-1/3 mt-6">
            <img
              src={Image1}
              alt="Study in USA"
              className="rounded shadow-md w-full lg:h-48"
            />
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row items-center my-8 lg:items-start py-8 gap-4"
          id="types"
        >
          {/* Text Section */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Format of Ielts Exam</h2>
            <div
              className="text-gray-700 text-justifytext-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: tests.exam_format }}
            />
            {/* <ul className="space-y-4 text-justify">
              {tests.map((tests, index) => (
                <li key={index} className="text-gray-700">
                  <h3 className="font-bold text-lg ">{tests.title}</h3>
                  <p>{tests.description}</p>
                </li>
              ))}
            </ul> */}
          </div>
          {/* Image Section */}
          <div className="lg:w-1/3 mt-6">
            <img
              src={Image1}
              alt="Study in USA"
              className="rounded shadow-md w-full lg:h-48"
            />
          </div>
        </div>
        <div className="py-8" id="guide">
          <h2 className="text-2xl font-bold mb-4">
            How to Prepare for {tests.title}?
          </h2>
          <div
            className="text-gray-700 text-justify  space-y-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: tests.test_guide }}
          />
        </div>

        <div className="mt-6" id="cost">
          <h2 className="text-2xl font-bold mb-4">
            Cost of {tests.title} Exam in Nepal
          </h2>
          <p className="text-gray-700 mb-4 text-justify">
            The cost of the {tests.title} exam in Nepal varies based on the type
            of test you are taking. Here is a breakdown of the cost of the{" "}
            {tests.title} exam in Nepal:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-600 border-b">
                    Test type
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600 border-b">
                    Test Cost in Nepal
                  </th>
                </tr>
              </thead>
              <tbody>
                {costs.map((cost, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border-b text-gray-700">
                      {cost.test_type}
                    </td>
                    <td className="px-4 py-2 border-b text-gray-700 whitespace-pre-line">
                      {cost.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row items-center my-8 lg:items-start py-8 gap-4"
          id="types"
        >
          {/* Text Section */}
          <div className="lg:w-2/3" id="comparison">
            <h2 className="text-2xl font-bold mb-4">{tests.title} vs Others</h2>
            <p className="text-gray-700 text-justify lg:pr-4">
              Here are a few differences between {tests.title} and others you
              must know before you take the examination:
            </p>
            {comps.map((comp, index) => (
              <div key={comp.id || index} className="p-4">
                <p className="font-bold">{comp.title}</p>
                <div
                  className="text-gray-700 text-justify space-y-4 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: comp.content }}
                />
              </div>
            ))}
          </div>
          {/* <p className="font-bold"> Which is easier?</p>
              Most candidates have often felt that the preparation for TOEFL was
              harder than the IELTS exam preparation.
              <p className="font-bold">
                TOEFL VS. IELTS - Which is widely accepted?
              </p>
              The IELTS certification is widely recognized in the UK, Australia,
              and New Zealand, while TOEFL is popular in the US and Canada.
            </p> */}

          {/* Image Section */}
          <div className="lg:w-1/3 mt-6">
            <img
              src={Image1}
              alt="Study in USA"
              className="rounded shadow-md w-full lg:h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestDetails;

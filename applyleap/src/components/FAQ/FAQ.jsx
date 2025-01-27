import React, { useState } from "react";

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
      <div className="container py-8 mx-auto" id="faq">
        {faqs && faqs.length > 0 && (
          <div className="px-6 md:px-10 mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Most frequently asked questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border rounded-lg shadow-md p-4"
                >
                  <div className="flex justify-between items-center">
                    <button
                      className="text-lg font-medium text-left w-full"
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                    </button>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="text-xl font-bold ml-2"
                    >
                      {openIndex === index ? "-" : "+"}
                    </button>
                  </div>
                  {openIndex === index && (
                    <div
                      className="mt-2 text-gray-700"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FAQ;

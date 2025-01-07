import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [buttonBottom, setButtonBottom] = useState(16); // Initial bottom spacing for the button

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Toggle visibility of the button after scrolling 300px
        setShowButton(window.scrollY > 300);

        // Adjust button position when footer comes into view
        if (footerTop <= windowHeight) {
          const overlap = windowHeight - footerTop; // Calculate overlap with footer
          setButtonBottom(overlap + 16); // Push button above the footer
        } else {
          setButtonBottom(16); // Default bottom margin
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bg-blue-400 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition"
          style={{
            bottom: `${buttonBottom}px`,
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

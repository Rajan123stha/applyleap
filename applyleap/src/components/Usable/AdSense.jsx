import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // Import if you're using React Router

const AdSense = ({ adSlot, style = {} }) => {
  const adRef = useRef(null);
  const location = useLocation(); // Use this if you have React Router
  const uniqueKey = `ad-${adSlot}-${location.pathname}`;

  useEffect(() => {
    if (typeof window === "undefined" || !adRef.current) return;

    // Clear previous ad content
    while (adRef.current.firstChild) {
      adRef.current.removeChild(adRef.current.firstChild);
    }

    // Create new ad instance
    const adElement = document.createElement("ins");
    adElement.className = "adsbygoogle";
    adElement.style.display = "block";
    adElement.dataset.adClient = "ca-pub-3139280325935359";
    adElement.dataset.adSlot = adSlot;

    // Append to container
    adRef.current.appendChild(adElement);

    // Try loading the ad
    try {
      // Check if adsbygoogle is loaded
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } else {
        // Add a listener for when the script loads
        window.addEventListener("load", () => {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        });
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [adSlot, location.pathname]); // Re-initialize when pathname changes

  return (
    <div
      key={uniqueKey}
      ref={adRef}
      style={{ ...style, minHeight: "250px", width: "100%" }}
    />
  );
};

export default AdSense;

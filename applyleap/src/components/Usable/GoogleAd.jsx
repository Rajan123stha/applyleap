import React, { useEffect, useRef } from "react";

const GoogleAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const loadAd = () => {
      if (window.adsbygoogle && adRef.current) {
        if (!adRef.current.getAttribute("data-loaded")) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            adRef.current.setAttribute("data-loaded", "true"); // Prevents duplicate ads
          } catch (e) {
            console.error("AdSense Error:", e);
          }
        }
      }
    };

    // Wait for the ad container to be visible before loading the ad
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadAd();
          observer.disconnect(); // Stop observing once the ad is loaded
        }
      },
      { threshold: 0.1 }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="my-4 w-full text-center">
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-format="fluid"
        data-ad-layout-key="-7j+f1-1o-4h+ei"
        data-ad-client="ca-pub-3139280325935359"
        data-ad-slot="5578602066"
      ></ins>
    </div>
  );
};

export default GoogleAd;

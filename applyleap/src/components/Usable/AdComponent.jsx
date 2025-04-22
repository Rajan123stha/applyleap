import { useEffect, useRef } from "react";

const AdComponent = ({ adSlot, uniqueId }) => {
  const adRef = useRef(null);

  useEffect(() => {
    const loadAd = () => {
      if (adRef.current && window.adsbygoogle) {
        console.log(`Loading Ad: ${adSlot}`);
        try {
          window.adsbygoogle.push({});
        } catch (error) {
          console.error("AdSense Error:", error);
        }
      }
    };

    // Delay loading the ad to ensure it's visible
    const timeout = setTimeout(loadAd, 1000);

    return () => clearTimeout(timeout);
  }, [adSlot]);

  return (
    <div
      id={uniqueId}
      style={{ width: "100%", minWidth: "250px", textAlign: "center" }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", minWidth: "250px", height: "auto" }}
        data-ad-client="ca-pub-3139280325935359"
        data-ad-slot={adSlot}
        data-ad-format="fluid"
      ></ins>
    </div>
  );
};

export default AdComponent;

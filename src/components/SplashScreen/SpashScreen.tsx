import { useEffect } from "react";

const SpashScreen = () => {
  useEffect(() => {
    // Dynamically load the Tenor embed script
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div
        className="tenor-gif-embed relative"
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "0",
          paddingBottom: "56.25%",
        }} // Aspect ratio trick
        data-postid="4944981134401258758"
        data-share-method="host"
        data-aspect-ratio="1.75352"
        data-width="100%"
      >
        <iframe
          src="https://tenor.com/embed/4944981134401258758"
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SpashScreen;

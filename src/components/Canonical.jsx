import { useEffect } from "react";
import { useLocation } from "react-router";

function Canonical() {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = `https://ewbyorku.ca${location.pathname}`;

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [location.pathname]);

  return null;
}

export default Canonical;
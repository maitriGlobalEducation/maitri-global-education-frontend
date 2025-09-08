import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Locations() {
  const [campuses, setCampuses] = useState([]);

  useEffect(() => {
    const query = `*[_type == "campus"]{
      name,
      country,
      "image": image.asset->url
    }`;

    const encodedQuery = encodeURIComponent(query);

    fetch(`https://poxqiqf3.api.sanity.io/v2021-10-21/data/query/production?query=${encodedQuery}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch from Sanity");
        }
        return res.json();
      })
      .then((data) => {
        setCampuses(data.result);
      })
      .catch((err) => {
        console.error("Error fetching campuses:", err);
      });
  }, []);

  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const animRef = useRef(null);

  // Responsive layout
  useEffect(() => {
    const updateView = () => {
      const w = window.innerWidth;
      setWindowWidth(w);
      if (w < 640) setItemsPerPage(1);
      else if (w < 1024) setItemsPerPage(3);
      else setItemsPerPage(4);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

 // Auto scroll
useEffect(() => {
  const speed = 1.8;

  const step = () => {
    if (!isPaused && trackRef.current) {
      positionRef.current -= speed;

      const trackWidth = trackRef.current.scrollWidth / 2; // half, since we duplicated items

      // Smooth reset when half track is scrolled
      if (Math.abs(positionRef.current) >= trackWidth) {
        positionRef.current = 0;
      }

      trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }

    animRef.current = requestAnimationFrame(step);
  };

  animRef.current = requestAnimationFrame(step);
  return () => cancelAnimationFrame(animRef.current);
}, [isPaused]);

  return (
    <div className="w-full overflow-hidden bg-[#272626] p-3">
      {/* Heading */}
      <div className="mx-2 sm:mx-4 md:mx-12 lg:mx-20">
        <h1
  style={{ fontFamily: "Epika" }}
  className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b]
  bg-clip-text text-transparent text-3xl md:text-5xl text-center font-bold uppercase drop-shadow-lg 
  max-w-[90vw] sm:max-w-3xl mx-auto"
>
  STUDY IN PRESTIGIOUS LOCATIONS
</h1>

        <a className="block w-full text-lg text-white text-center underline" href="#">
  Find out our school
</a>

      </div>

      {/* Carousel */}
      <div className="mx-2 sm:mx-4 md:mx-12 lg:mx-20 my-8 relative">
        <div
          ref={trackRef}
          className="flex gap-4 transition-none items-center"
          style={{ willChange: "transform" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {[...campuses, ...campuses].map((loc, idx) => {
            const baseWidth = 120 / itemsPerPage;

            return (
              <Link
                key={idx}
                to={`/explore/${loc.name.toLowerCase()}`}
                className="relative group cursor-pointer overflow-hidden rounded-xl flex-shrink-0 border-2 border-transparent 
                  transition-all duration-500 ease-in-out"
                style={{
                  flex: `0 0 ${windowWidth < 640 ? "100%" : baseWidth + "%"}`,
                  height: "20rem",
                  margin: windowWidth < 640 ? "0 8px" : "0",
                  aspectRatio: "3 / 2",
                  transition:
                    "flex-basis 0.5s ease, height 0.5s ease, border-color 0.3s ease",
                    fontFamily: "Epika"
                }}
              >
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <h1
                  className="absolute top-2 left-1/2 transform -translate-x-1/2 
                  text-xl md:text-2xl font-bold text-white drop-shadow-lg"
                >
                  {loc.name}
                </h1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Locations;

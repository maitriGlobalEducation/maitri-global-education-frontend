import React, { useState, useEffect, useRef } from "react";
import "../font.css";
import GoldButton from "./GoldButton";
import { ArrowRight, ArrowLeft } from "lucide-react";

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [events, setEvents] = useState([]);
  const intervalRef = useRef(null);

  // Fetch events from Sanity
  useEffect(() => {
    const query = `*[_type == "event"]{
      title,
      subtitle,
      homescreenbuttons,
      description,
      "image": image.asset->url
    }`;

    const encodedQuery = encodeURIComponent(query);

    fetch(
      `https://poxqiqf3.api.sanity.io/v2021-10-21/data/query/production?query=${encodedQuery}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch from Sanity");
        return res.json();
      })
      .then((data) => {
        setEvents(data.result || []);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);

  // Auto slide effect
  useEffect(() => {
    if (!isHovered && events.length) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % events.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, events.length]);

  if (!events.length) {
    return <div className="text-white p-8">Loading...</div>;
  }

  const prevIndex = (current - 1 + events.length) % events.length;
  const nextIndex = (current + 1) % events.length;

  const currentImage = events[current];
  const prevImage = events[prevIndex];
  const nextImage = events[nextIndex];

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + events.length) % events.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % events.length);
  };

  return (
    <div className="bg-[#2d2d2d] w-full py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="w-full flex justify-center">
        <h1
          style={{ fontFamily: "Epika" }}
          className="text-5xl sm:text-4xl lg:text-5xl text-center  font-bold bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent mb-15 p-2 tracking-wider"
        >
          Events & Engagements
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 max-w-6xl mx-auto">
        {/* Left Card */}
        <div className="hidden sm:flex flex-col w-[18%] max-w-[180px] opacity-40 hover:opacity-60 transition-all duration-300">
          <div className="h-[300px] overflow-hidden rounded-xl shadow">
            <img
              src={prevImage.image}
              alt={prevImage.title || "Event"}
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
          <div className="mt-2">
            <h2 className="text-sm font-semibold text-white line-clamp-1">
              {prevImage.title}
            </h2>
            <p className="text-xs text-white line-clamp-1">
              {prevImage.subtitle}
            </p>
            {prevImage.homescreenbuttons?.[1] && (
              <button className="mt-1 px-3 py-1 text-xs text-white rounded-full hover:bg-black">
                {prevImage.homescreenbuttons[1]}
              </button>
            )}
          </div>
        </div>

        {/* Center Card */}
        <div
          className="w-full sm:w-[64%] max-w-2xl transition-all duration-700 transform hover:scale-[1.01]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="h-[450px] overflow-hidden rounded-2xl shadow-2xl relative">
            <img
              src={currentImage.image}
              alt={currentImage.title || "Event"}
              className="w-full h-full object-cover object-[center_30%]"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
              <GoldButton text={"Save Your Seat"} to="/events" borderColor="white" textColor="white" hoverBg="white" hoverText="black"/>
            </div>
          </div>

          {/* Text Area */}
          <div className="mt-4 px-2 sm:px-4 min-h-[160px] flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white line-clamp-1">
                {currentImage.title}
              </h2>
              <h3 className="text-md sm:text-lg text-white line-clamp-1">
                {currentImage.subtitle}
              </h3>
              <p className="text-sm text-white mt-2 line-clamp-3">
                {currentImage.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-3 min-h-[40px]">
              {currentImage.homescreenbuttons?.map((btn, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1 text-sm text-white rounded-full hover:bg-black transition"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons BELOW card */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={handlePrev}
             className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
             
            >
              <ArrowLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={handleNext}
className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
            >
              <ArrowRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="hidden sm:flex flex-col w-[18%] max-w-[180px] opacity-40 hover:opacity-60 transition-all duration-300">
          <div className="h-[300px] overflow-hidden rounded-xl shadow">
            <img
              src={nextImage.image}
              alt={nextImage.title || "Event"}
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
          <div className="mt-2">
            <h2 className="text-sm font-semibold text-white line-clamp-1">
              {nextImage.title}
            </h2>
            <p className="text-xs text-white line-clamp-1">
              {nextImage.subtitle}
            </p>
            {nextImage.homescreenbuttons?.[0] && (
              <button className="mt-1 px-3 py-1 text-xs text-white rounded-full hover:bg-black">
                {nextImage.homescreenbuttons[0]}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
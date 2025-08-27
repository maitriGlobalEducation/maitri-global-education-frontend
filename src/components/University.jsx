import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Link } from "react-router-dom";

import GoldButton from "./Goldbutton";


const University = () => {
  const [cardData, setCardData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch from Sanity backend
  useEffect(() => {
    const query = `*[_type == "university"]{
      Universityname,
      "logo": logo.asset->url,
      campus->{ name },
      metaDescription,
      reportYear,
      metaTitle,
      
    }`;

    const encodedQuery = encodeURIComponent(query);

    fetch(
      `https://poxqiqf3.api.sanity.io/v2021-10-21/data/query/production?query=${encodedQuery}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch universities from Sanity");
        }
        return res.json();
      })
      .then((data) => {
        setCardData(data.result || []);
      })
      .catch((err) => {
        console.error("Error fetching universities:", err);
      });
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cardData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === cardData.length - 1 ? 0 : prev + 1
    );
  };

  if (!cardData.length) {
    return (
      <div className="text-white flex justify-center items-center h-[70vh]">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="relative h-[70vh] w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/imageuniversity.png')",
      }}
    >
      {/* Desktop View */}
      <div className="hidden md:flex items-center max-w-7xl mx-auto w-full">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition mr-4"
        >
          <ChevronLeft className="text-white" />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
          {cardData
            .slice(currentIndex, currentIndex + 3)
            .concat(
              currentIndex + 3 > cardData.length
                ? cardData.slice(0, (currentIndex + 3) % cardData.length)
                : []
            )
            .map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg shadow-lg text-white border border-white/20 bg-white/10 backdrop-blur-md flex flex-col justify-between min-h-[350px]"
              >
                <div>
                  {/* Report Year */}
                  <p className="text-sm opacity-80">
                    Report | {card.reportYear || "N/A"}
                  </p>

                  {/* Title + Logo */}
                  <div className="flex justify-between items-start mt-2">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {card.Universityname}
                      </h2>
                      <p className="text-sm opacity-70">
                        {card.campus?.name}
                      </p>
                    </div>
                    {card.logo && (
                      <img
                        src={card.logo}
                        alt={`${card.Universityname} logo`}
                        className="w-16 h-16 object-contain filter grayscale-20 hover:grayscale-0 transition duration-300"
                      />
                    )}
                  </div>

                  {/* Subtitle */}
                  <h3 className="text-lg font-medium opacity-90 mt-2">
                    {card.metaTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-sm mt-4 opacity-90 line-clamp-6">
                    {card.metaDescription}
                  </p>
                </div>

                {/* Button */}
                <Link to={`/universities/${card.Universityname}`}>
  <GoldButton text={'Go to University Page'} to={`/universities/${card.Universityname}`} borderColor="white" textColor="white" hoverBg="white" hoverText="black"/>
</Link>

              </div>
            ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition ml-4"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden max-w-sm mx-auto">
        <div className="p-6 rounded-lg shadow-lg text-white border border-white/20 bg-white/10 backdrop-blur-md flex flex-col justify-between min-h-[350px]">
          <div>
            <p className="text-sm opacity-80">
              Report | {cardData[currentIndex].reportYear || "N/A"}
            </p>

            {/* Title + Logo */}
            <div className="flex justify-between items-start mt-2">
              <div>
                <h2 className="text-2xl font-bold">
                  {cardData[currentIndex].Universityname}
                </h2>
                <p className="text-sm opacity-70">
                  {cardData[currentIndex].campus?.name}
                </p>
              </div>
              {cardData[currentIndex].logo && (
                <img
                  src={cardData[currentIndex].logo}
                  alt={`${cardData[currentIndex].Universityname} logo`}
                  className="w-16 h-16 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
              )}
            </div>

            {/* Subtitle */}
            <h3 className="text-lg font-medium opacity-90 mt-2">
              {cardData[currentIndex].subtitle}
            </h3>

            {/* Description */}
            <p className="text-sm mt-4 opacity-90 line-clamp-6">
              {cardData[currentIndex].metaDescription}
            </p>
          </div>

          {/* Button */}
          {/* <button className="mt-4 px-4 py-2 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
            Go to University Page →
          </button> */}

          <Link to={`/universities/${cardData[currentIndex].Universityname}`}>  
          <GoldButton text={'Go to University Page →'} to="/universities/${cardData[currentIndex].Universityname}" borderColor="white" textColor="white" hoverBg="white" hoverText="black"/>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default University;

import React, { useState, useEffect } from "react";

const Testomonials = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the start index

  useEffect(() => {
    const query = `*[_type == "testimonial"]{
      name,
      testimonial,
      institute,
      name,
      "profilePic":profilePic.asset->url,
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
        setTestimonial(data.result);
      })
      .catch((err) => {
        console.error("Error fetching testimonials:", err);
      });
  }, []);

  // Handle next/prev click
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 3, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 3 < testimonial.length ? prev + 3 : prev
    );
  };

  // Slice array to only show 3 at a time
  const visibleTestimonials = testimonial.slice(currentIndex, currentIndex + 3);

  return (
    <section className="w-full bg-[#2d2d2d] max-w-full py-12 px-2 flex flex-col items-center overflow-hidden">

      {/* User Images Row */}
      <div className="flex flex-row justify-center gap-4 md:gap-24 mb-8 w-full max-w-full overflow-x-auto">
        {visibleTestimonials.map((t, idx) => (
          <img
            key={idx}
            src={t.profilePic}
            alt={`User ${idx + 1}`}
            className="w-32 h-40 md:w-32 md:h-44 object-cover rounded-md shadow-md border border-gray-200 flex-shrink-0"
            style={{
              minWidth: "186px",
              minHeight: "188px",
              maxWidth: "128px",
              maxHeight: "176px",
            }}
          />
        ))}
      </div>

      {/* Headline */}
      <div
        style={{ fontFamily: "Epika", fontWeight: "bold" }}
        className="text-center mb-10 w-full max-w-full"
      >
        <p className="uppercase tracking-widest text-sm text-white mb-2">Join over</p>
        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-2">10000+</h2>
        <h2 className="text-4xl md:text-6xl font-semibold text-white">Students</h2>
      </div>

      {/* Testimonials Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-full">
        {visibleTestimonials.map((t, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg p-5 md:p-6 flex flex-col h-full bg-white shadow-sm min-h-[220px] max-h-[320px] min-w-0"
          >
            <div className="flex items-center mb-4">
              <span className="text-lg text-black mr-2">★★★★★</span>
            </div>
            <p className="text-gray-800 text-base mb-6 flex-1">“ {t.testimonial} ”</p>
            <div className="flex items-center text-gray-700 text-sm font-medium">
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5zm3 15c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v10z"/>
                <circle cx="12" cy="12" r="5"/>
              </svg>
              {t.institute}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex flex-row gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex + 3 >= testimonial.length}
         className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testomonials;

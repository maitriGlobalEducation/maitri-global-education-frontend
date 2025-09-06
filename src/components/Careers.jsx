import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Careers = () => {
  const scrollRef = useRef(null);
  const [careersData, setCareersData] = useState([]);

  useEffect(() => {
    const query = `*[_type == "careers"]{
      "image": image.asset->url,
      tags,
      title,
      subtitle
    }`;

    const encodedQuery = encodeURIComponent(query);

    fetch(
      `https://poxqiqf3.api.sanity.io/v2021-10-21/data/query/production?query=${encodedQuery}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch from Sanity");
        }
        return res.json();
      })
      .then((data) => {
        setCareersData(data.result || []);
      })
      .catch((err) => {
        console.error("Error fetching careers:", err);
      });
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 20;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1
          style={{ fontFamily: "Epika" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent mb-12 tracking-wider"
        >
          Elite Career Choices
        </h1>

        {/* Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            {careersData.map((career, index) => (
              <div
                key={index}
                className="flex-none w-80 sm:w-[340px] snap-start"
              >
                {/* Card */}
                <div className="bg-neutral-900 rounded-2xl rounded-tr-[0px] overflow-hidden mb-6 shadow-lg flex flex-col">
                  {/* Image + tags */}
                  <div className="relative">
                    <img
                      src={career.image}
                      alt={career.title}
                      className="w-full h-[460px] object-cover"
                    />
                    {/* Tag bar */}
                    <div className="absolute top-0 right-0 flex gap-2 px-3 py-2 bg-black rounded-bl-3xl">
                      {career.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-white bg-neutral-900 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                      {career.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{career.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => scroll("left")}
              className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;

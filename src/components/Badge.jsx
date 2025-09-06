import React from "react";

const badges = [
  { label: "ONLINE ADMISSION" },
  { label: "ENTRY REQUIREMENTS" },
  { label: "SCHOLARSHIPS" },
];

const Badge = () => (
  <div className="bg-black w-full min-h-[220px] px-4 py-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 style={{ fontFamily: 'Epika', fontWeight: 'bold' }} className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
          ADMISSIONS &<br />
          SCHOLARSHIP
        </h1>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {badges.map((badge, idx) => (
          <button
            key={idx}
            className="w-full flex items-center justify-between px-4 py-4 md:py-5 bg-black border border-yellow-400 text-white font-semibold text-base md:text-lg transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
          >
            <span>{badge.label}</span>
            <span className="text-xl">&#8250;</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Badge;

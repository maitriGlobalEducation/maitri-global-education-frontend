"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, GraduationCap, Search, ChevronDown } from "lucide-react";
import GoldButton from "../components/GoldButton";
import "../font.css";

// University Data
const sampleItems = [
  { id: 1, title: "Harvard University", location: "USA", category: "Business", courseType: "Master’s", image: "p1.png" },
  { id: 2, title: "Oxford University", location: "UK", category: "Arts", courseType: "Bachelor’s", image: "p2.png" },
  { id: 3, title: "University of Melbourne", location: "Australia", category: "Medicine", courseType: "PhD", image: "p3.png" },
  { id: 4, title: "University of Toronto", location: "Canada", category: "Engineering", courseType: "Master’s", image: "p4.png" },
  { id: 5, title: "Stanford University", location: "USA", category: "Engineering", courseType: "Bachelor’s", image: "p5.png" },
  { id: 6, title: "MIT", location: "USA", category: "Science", courseType: "PhD", image: "p6.png" },
  { id: 7, title: "University of Tokyo", location: "Japan", category: "Science", courseType: "Bachelor’s", image: "p7.png" },
  { id: 8, title: "ETH Zurich", location: "Switzerland", category: "Engineering", courseType: "Master’s", image: "p8.png" },
];

// Dynamic Filter Options
const filterOptions = {
  university: [...new Set(sampleItems.map((u) => u.title))],
  location: [...new Set(sampleItems.map((u) => u.location))],
  category: [...new Set(sampleItems.map((u) => u.category))],
  courseType: [...new Set(sampleItems.map((u) => u.courseType))],
};

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    university: [],
    location: [],
    category: [],
    courseType: [],
  });
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef();

  // Toggle checkbox filters
  const toggleFilter = (key, value) => {
    setFilters((prev) => {
      const exists = prev[key].includes(value);
      return {
        ...prev,
        [key]: exists ? prev[key].filter((v) => v !== value) : [...prev[key], value],
      };
    });
  };

  // Filtering logic
  const filteredItems = sampleItems.filter((item) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(search) ||
      item.location.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search) ||
      item.courseType.toLowerCase().includes(search);

    const matchesFilters = Object.keys(filters).every((key) => {
      if (filters[key].length === 0) return true;
      if (key === "university") return filters[key].includes(item.title);
      return filters[key].includes(item[key]);
    });

    return matchesSearch && matchesFilters;
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full bg-gradient-to-r from-[#1a1a1a]/90 to-[#000]/80 text-white flex items-center justify-center">
        <img
          src="p9.png"
          alt="Explore Universities"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 style={{ fontFamily: "Epika" }} className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] 
             bg-clip-text text-transparent text-3xl md:text-6xl font-bold uppercase 
             drop-shadow-lg whitespace-nowrap">
            Explore Top Universities
          </h1>
          <div className="mt-6 flex items-center bg-white rounded-full px-4 py-3 shadow-lg max-w-xl mx-auto">
            <Search className="text-gray-500 " />
            <input
              type="text"
              placeholder="Search universities, courses, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-2 flex-1 outline-none text-black"
            />
          </div>
        </div>
      </div>

      {/* Horizontal Filters */}
      <div className="p-6" ref={dropdownRef}>
        <div className="flex flex-wrap gap-4 mb-6">
          {Object.keys(filterOptions).map((key) => (
            <div key={key} className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
                className="border-2 border-black text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-black hover:text-white transition"
              >
                <span className="capitalize">{key}</span>
                <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {openDropdown === key && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute mt-2 left-0 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-20 w-56 max-h-60 overflow-y-auto"
                  >
                    {filterOptions[key].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer text-sm mb-2 p-1 rounded hover:bg-gray-200 transition"
                      >
                        <input
                          type="checkbox"
                          checked={filters[key].includes(option)}
                          onChange={() => toggleFilter(key, option)}
                          className="w-4 h-4 rounded-full border border-gray-400 bg-white checked:bg-gray-600 checked:border-gray-600 appearance-none cursor-pointer"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                  />
                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3 bg-gray-900 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm shadow-md">
                    <GraduationCap size={16} />
                    {item.category}
                  </div>
                  {/* Location Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm shadow-md">
                    <MapPin size={16} />
                    {item.location}
                  </div>
                </div>
                <div className="p-4">
                  <h3 style={{ fontFamily: "Montserrat" }}
                    className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-500">
                    {item.courseType} • {item.location}
                  </p>
                  <div className="mt-4">
                    <GoldButton
                      text="View Details"
                      to="/about"
                      borderColor="#000"
                      textColor="#000"
                      hoverBg="#000"
                      hoverText="white"
                    />
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No universities found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

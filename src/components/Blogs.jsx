import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import "../index.css";




const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "blog"]{
      title,
      blogType->{type},
      "imageUrl": image.asset->url
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
        setBlogs(data.result);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      });
  }, []);
if (!blogs.length) {
  return <div className="text-center py-10">Loading...</div>;
}

  const prev = () => {
    setAnimate(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
      setAnimate(true);
    }, 100);
  };

  const next = () => {
    setAnimate(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % blogs.length);
      setAnimate(true);
    }, 100);
  };

  const leftImage = blogs[index % blogs.length];
  const centerImage = blogs[(index + 1) % blogs.length];
  const rightImage = blogs[(index + 2) % blogs.length];

  return (
    <div className="w-full px-4 py-4">

      <h1 
          style={{ fontFamily: "Epika", fontWeight: "bold" }}
          className="bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#f5deb3] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 text-center leading-tight tracking-wide uppercase drop-shadow-lg"
        >
         Blogs
        </h1>
      {/* Responsive Layout */}
      <div className="flex flex-col sm:flex-row w-full gap-6 justify-center items-stretch">

        {/* Left Image (hidden on small screens) */}
        <div className="hidden md:flex w-full md:w-[35%] flex-col gap-4">
        <div
  className={`w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-white relative transition-all duration-700 ease-in-out ${!isMobile && animate ? 'reveal-top-bottom' : (!isMobile ? 'opacity-0' : '')}`}
>
  <img
    src={leftImage.imageUrl}
    alt="Left"
    className="w-full h-full object-cover object-left-top absolute inset-0"
    style={!isMobile ? {transition:'clip-path 0.7s cubic-bezier(0.4,0,0.2,1)',clipPath: animate ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)'} : {}}
  />
</div>


          <div className="relative min-h-[130px]">
            <div className="flex justify-between items-start mb-4">
              <div className="pr-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 line-clamp-2">{leftImage.title}</h1>
                <span className="mt-2 inline-block border border-gray-400 px-2.5 py-1 text-sm text-gray-600 rounded-full uppercase tracking-wide">
                  {leftImage.blogType.type}
                </span>
              </div>
             <button className="bg-black text-white px-3 py-2 rounded-full mt-1 hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer">
  <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
</button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4af37]" />
          </div>
        </div>

        {/* Center Image (always visible) */}
        <div className="w-full sm:w-[90%] md:w-[30%] flex flex-col gap-2">
          <div className={`rounded-lg overflow-hidden shadow relative transition-all duration-700 ease-in-out ${isMobile && animate ? 'reveal-top-bottom' : (isMobile ? 'opacity-0' : '')}`} style={{minHeight:'250px'}}>
            <img
              src={centerImage.imageUrl}
              alt="Center"
              className="w-full h-[250px] sm:h-[300px] md:h-[250px] object-cover absolute inset-0"
              style={isMobile ? {transition:'clip-path 0.7s cubic-bezier(0.4,0,0.2,1)',clipPath: animate ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)'} : {}}
            />
          </div>
          <div className="relative min-h-[130px]">
            <div className="flex justify-between items-start mb-4">
              <div className="pr-2">
                <h1 className="text-lg sm:text-xl  font-semibold line-clamp-2">{centerImage.title}</h1>
                <span className="mt-1 inline-block border border-gray-400 px-2.5 py-1 text-sm text-gray-600 rounded-full uppercase tracking-wide">
                  {centerImage.blogType.type}
                </span>
              </div>
             <button className="bg-black text-white px-3 py-2 rounded-full mt-1 hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer">
  <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
</button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px]  bg-[#d4af37]" />
          </div>
        </div>

        {/* Right Image (hidden on small screens) */}
        <div className="hidden md:flex w-full md:w-[15%] flex-col gap-2">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={rightImage.imageUrl} alt="Right" className="w-full h-[250px] object-cover" />
          </div>
          <div className="relative min-h-[130px]">
            <div className="flex justify-between items-start mb-4">
              <div className="pr-2">
                <h1 className="text-base md:text-lg  font-semibold line-clamp-2">{rightImage.title}</h1>
                <span className="mt-1 inline-block border border-gray-400 px-2 py-1 text-xs text-gray-600 rounded-full uppercase tracking-wide">
                  {rightImage.blogType.type}
                </span>
              </div>
              <button className="bg-black text-white px-3 py-2 rounded-full mt-1 hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer">
  <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
</button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px]  bg-[#d4af37]" />
          </div>
        </div>
      </div>

     {/* Navigation Buttons */}
<div className="mt-2 flex justify-center gap-4">
  <button
    onClick={prev}
   className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
  >
    <ArrowLeft className="w-5 h-5" />
  </button>
  <button
    onClick={next}
    className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
  >
    <ArrowRight className="w-5 h-5" />
  </button>
</div>

    </div>
  );
};

export default ImageSlider;
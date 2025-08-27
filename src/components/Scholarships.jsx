import React, { useState ,useEffect} from "react";
import GoldButton from "./Goldbutton";



const Scholarships = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right");
   const[slides,setslides] = useState([]);
  
 
useEffect(() => {
    const query = `*[_type == "scholarship"]{
  title,
  amount,
  tagline,
  "image":image.asset->url,
  university->{ 
    name,
    logo {
      asset -> {
        url
      }
    }
  }
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
        setslides(data.result);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      });
  }, []);

const slide = slides[current];
if (!slide) {
  return <div className="text-white p-8">Loading...</div>;
}
  const isEven = current % 2 === 0;



  const prev = () => {
    setDirection("left");
    setCurrent((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setDirection("right");
    setCurrent((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };





  return (
    <div className="w-full bg-[#2d2d2d] overflow-hidden">
      {/* Desktop Layout */}
      <div
        key={current}
        className={`hidden xl:flex w-full h-[80vh] transition-all duration-700 ${
          direction === "right" ? "animate-slide-right" : "animate-slide-left"
        }`}
      >
        {isEven ? (
          <>
            <div
              className="relative h-full w-[70%] overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
              }}
            >
              <img
                src={slide.image}
                alt="Slide"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
            <div className="w-[30%] bg-[#2d2d2d] flex items-center justify-center text-center pr-[5%]">
              <div className="max-w-md text-white space-y-4">
                <div className="flex justify-center">
                  <img
                    src={slide.university.logo.asset.url}
                    alt="Logo"
                    className="w-36 h-auto"
                  />
                </div>
                <h2
                  style={{ fontFamily: "Epika" }}
                  className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-4xl font-bold tracking-wide uppercase"
                >
                  {slide.title}
                </h2>
                <h1
                  style={{ fontFamily: "Epika" }}
                  className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-5xl font-bold tracking-wide uppercase"
                >
                  {slide.amount}
                </h1>
                <p className="text-xl font-light">{slide.tagline}</p>
                {/* <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition hover:scale-105 cursor-pointer">
                  Apply Now
                </button> */}
                        <GoldButton text={'Apply Now'} to="/scholarship" borderColor="white" textColor="white" hoverBg="white" hoverText="black"/>
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    onClick={prev}
                    className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={next}
                    className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
                  >
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-[30%] bg-[#2d2d2d] flex items-center justify-center text-center pl-[5%]">
              <div className="max-w-md text-white space-y-4">
                <div className="flex justify-center">
                <img
                    src={slide.university.logo.asset.url}
                    alt="Logo"
                    className="w-36 h-auto"
                  />
                </div>
                <h1
                  style={{ fontFamily: "Epika" }}
                  className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-5xl font-bold tracking-wide uppercase"
                >
                  {slide.title}
                </h1>
                <h2
                  style={{ fontFamily: "Epika" }}
                  className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-4xl font-bold tracking-wide uppercase"
                >
                  {slide.amount}
                </h2>
                <p className="text-xl font-light">{slide.tagline}</p>
                {/* <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition hover:scale-105 cursor-pointer">
                  Apply Now
                </button> */}
                          <GoldButton text={'Apply Now'} to="/scholarship" borderColor="white" textColor="white" hoverBg="white" hoverText="black"/>

                <div className="flex justify-center gap-4 mt-4">
                  <button
                    onClick={prev}
                    className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={next}
                    className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
                  >
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
            <div
              className="relative h-full w-[70%] overflow-hidden"
              style={{
                clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <img
                src={slide.image}
                alt="Slide"
                className="w-full h-full object-cover"
              />
            </div>
          </>
        )}
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="xl:hidden flex flex-col w-full text-white">
        <img src={slide.image} alt="Slide" className="w-full h-64 object-cover" />
        <div className="bg-[#2d2d2d] px-6 py-8 text-center space-y-4">
          <div className="flex justify-center">
          <img
                    src={slide.university.logo.asset.url}
                    alt="Logo"
                    className="w-36 h-auto"
                  />
          </div>
          <h1
            style={{ fontFamily: "Epika" }}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-4xl font-bold tracking-wide uppercase"
          >
            {slide.amount}
          </h1>
          <h2
            style={{ fontFamily: "Epika" }}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-3xl font-bold tracking-wide uppercase"
          >
            {slide.title}
          </h2>
          <p className="text-lg font-light">{slide.tagline}</p>
          {/* <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition hover:scale-105 cursor-pointer">
            Apply Now
          </button> */}
          <GoldButton text={'Apply Now'} to="/scholarship" borderColor="white" textColor="white" hoverBg="white" hoverText="black"/>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .animate-slide-right {
          animation: slideRight 1s ease-in-out;
        }
        .animate-slide-left {
          animation: slideLeft 1s ease-in-out;
        }
        @keyframes slideRight {
          0% {
            transform: translateX(100%);
            opacity: 0.7;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        @keyframes slideLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0.7;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Scholarships;

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";



export default function Universitydetail() {
  const { Universityname } = useParams(); 
  const[universitydata, setuniversityData] = useState({});
   useEffect(() => {
  if (!Universityname) return;

  const query = `*[_type == "university" && Universityname=="${Universityname}"]{
    Universityname,
    "logo":logo.asset->url,
    campus->{ name },
    metaTitle,
    metaDescription
  }`;

  const encodedQuery = encodeURIComponent(query);

  fetch(`https://poxqiqf3.api.sanity.io/v2021-10-21/data/query/production?query=${encodedQuery}`)
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch universities");
      return res.json();
    })
    .then(data => {
      if (data.result && data.result.length > 0) {
        setuniversityData(data.result[0]); 
        console.log("Fetched:", data.result[0]);
      } else {
        console.log("No data found for", Universityname);
      }
    })
    .catch(err => console.error("Error fetching universities:", err));
}, [Universityname]);
  return (
    <div className="relative w-full h-auto">
      {/* Full width image */}
     
      <div className="w-full h-[50vh] relative">
        <img src={universitydata.logo} alt="" className="w-full h-full object-cover opacity-95" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h2
            style={{ fontFamily: "Epika" }}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b]
              bg-clip-text text-transparent text-3xl md:text-6xl font-bold uppercase drop-shadow-lg max-w-[90vw] sm:max-w-3xl"
          >
             {universitydata.Universityname}
          </h2>
          <p className="text-white text-2xl mt-4 max-w-[90vw] sm:max-w-xl drop-shadow-md">
            Details about courses will go here and more information can be added as needed.
          </p>
        </div>
      </div>

      {/* Content below image */}
      <div className="flex justify-center items-center mt-6 mb-4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Left Details Card */}
          <div  className="flex items-stretch justify-center">
            <div  className="bg-gray-200 p-8 rounded-xl w-full h-full flex flex-col justify-center">
              <h1 style={{fontFamily : 'Epika'}} className="text-3xl font-semibold mb-4">Key Details</h1>
              <p className="text-xl mb-1">
                <span className="text-xl font-semibold">Duration:</span> 12 months
              </p>
              <p className="text-xl mb-1">
                <span className="text-xl font-semibold">Location :</span> Milan
              </p>
              <p className="text-xl mb-1">
                <span className="text-xl font-semibold">Course Type:</span> Full-time
              </p>
              <p className="text-xl mb-1">
                <span className="text-xl font-semibold">Language:</span> English
              </p>
              <p className="text-xl mb-1">
                <span className="text-xl font-bold">Scholarship :</span> Upto 12%
              </p>
            </div>
          </div>

          {/* Right Enquiry Form */}
          <div className="flex items-stretch justify-center">
            <div className="p-8 border-gray-400 rounded-lg bg-white shadow-lg w-full h-full flex flex-col">
              <h2 style={{ fontFamily: "Epika" }} className="text-2xl font-semibold mb-2">
                Enquire Now
              </h2>
              <form className="space-y-3 flex-grow flex flex-col ">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <select className="border text-gray-500 border-gray-300 rounded-md p-2 w-full">
                  <option value="">Interested in:</option>
                  <option value="city">Scholarship</option>
                  <option value="suburban">Admission</option>
                  <option value="international">Course</option>
                </select>
                <button
                  className="px-6 py-2 w-full bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] font-thin text-xl hover:scale-102 transition-all duration-300 text-black cursor-pointer rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="lg:mx-60 mb-0 pt-4 pb-4">
        <h1 style={{fontFamily : 'Epika'}} className="text-3xl mb-2 font-bold text-center md:text-left">Course Overview</h1>
        <p className="text-xl pl-2 text-center md:text-left font-thin">
          This course provides an in-depth understanding of the subject matter, equipping
          students with the necessary skills and knowledge to excel in their chosen field.
        </p>
        <ul className="list-disc pl-5 text-lg m-2 font-thin">
          <li>Comprehensive curriculum covering all essential topics</li>
          <li>Hands-on projects to build practical skills</li>
          <li>Expert instructors with real-world experience</li>
        </ul>
      </div>

      {/* Admission & Deadline */}
      <div className="pt-4 pb-4 lg:mx-60 mt-0 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 style={{fontFamily : 'Epika'}} className="text-3xl font-bold mb-2 text-center md:text-left">Admission requirements</h1>
          <h1 className="text-xl text-center md:text-left">Academic Requirments</h1>
         <p className="block text-center font-thin text-lg md:text-left">Requirments 1</p>
         <p className="block text-center font-thin  text-lg md:text-left">Requirments 2</p>
        </div>
        <div className="font-thin">
          <h1 className="text-2xl md:mt-8 text-center md:text-left">Application deadline</h1>
          <p className="text-center md:text-left">
            <span className="text-lg">Date :</span> 25-08-2025
          </p>
          <a href="#" className="block text-center md:text-left">Link </a>
        </div>
      </div>

      {/* Apply Now Button */}
      <div className="flex justify-center p-5">
        <button className="px-8 py-2 bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b]
           text-black font-semibold rounded hover:scale-102 transition-all duration-300 cursor-pointer">
          Apply Now
        </button>
      </div>
    </div>
  );
}
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GoldButton from "./Goldbutton";

export default function About() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-[60vh] bg-white px-4 py-10 gap-8">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 h-[320px] md:h-[340px] flex justify-center items-center" data-aos="fade-right">
        <img src="/about.jpg" alt="About" className="object-cover w-full h-full" />
      </div>
      {/* Right: Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6 max-w-lg" data-aos="fade-left">
        <h2 style={{ fontFamily: 'Epika', fontWeight: 'bold' }} className="text-black font-bold text-2xl md:text-3xl leading-tight uppercase tracking-tight">
          Who We Are & What We Do
        </h2>
        <div className="flex flex-col gap-4 w-full text-black">
         <p>At Maitri Global Education, we provide expert guidance for international admissions, visa processing, and career counseling. Our mission is to make global education accessible and hassle-free for every student.</p>
          {/* <button className="w-full border border-black px-6 py-3 text-left font-bold text-black text-base md:text-lg flex items-center justify-between transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:cursor-pointer">
  More <span className="ml-auto">&gt;</span>
</button> */}
<GoldButton text={'More'} to="/about"/> 

        </div>
      </div>
    </div>
  );
}
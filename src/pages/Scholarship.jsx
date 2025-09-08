import {React,useEffect,useState} from 'react';
import '../index.css';
import GoldButton from "../components/GoldButton";

const scholarshipData = [
    {
        image: "s1.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    },
    {
        image: "s2.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    },
    {
        image: "s3.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    },
    {
        image: "s4.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    },
    {
        image: "s5.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    },
    {
        image: "s6.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    }
];

const Scholarship = () => {

    const[slides,setslides] = useState([]);
  
 
useEffect(() => {
    const query = `*[_type == "scholarship"]{
  title,
  amount,
  tagline,
  "image":image.asset->url,
  deadline,
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
        console.error("Error fetching scholarships:", err);
      });
  }, []);



    return (
        <div className='mx-8'>
            {/* Deep sleep effect from top-left */}
            <style>{`
                .image-tilt-left {
                    transform: perspective(1000px) rotateX(6deg) rotateY(8deg);
                    transform-origin: top left;
                    transition: transform 0.4s ease;
                }

                .image-tilt-left:hover {
                    transform: perspective(1000px) rotateX(0) rotateY(0);
                }
            `}</style>

            {/* Added Heading */}
            <h1
                style={{ fontFamily: 'Epika' }} 
                className="bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#f5deb3] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-wide uppercase drop-shadow-lg text-center mt-10"
            >
                Scholarships
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 p-6">
                {slides.map((item, index) => (
                    <div key={index} className="p-2">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="image-tilt-left w-full h-60 rounded-lg shadow-md object-cover filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                        />
                        <h1
                            style={{ fontFamily: 'Epika' }}
                            className="inline-block text-lg md:text-xl font-bold mb-2 mt-4 leading-tight tracking-wide uppercase drop-shadow-lg"
                        >
                            {item.title}
                        </h1>
                        &nbsp;
                        <h1
                            style={{ fontFamily: 'Epika' }}
                            className="inline-block text-lg md:text-xl font-bold mb-2 mt-4 leading-tight tracking-wide uppercase drop-shadow-lg"
                        >
                            {item.amount}
                        </h1>
                        <p className="text-md font-bold">Deadline: {item.deadline}</p>
                        {/* <button  
                            style={{ fontFamily: 'Montserrat' }}  
                            className="mt-2 px-6 py-2 bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] text-black font-semibold rounded hover:opacity-90 transition cursor-pointer hover:scale-105"
                        >
                            Apply
                        </button> */}
                        <GoldButton text={'Apply Now'} to="/scholarship"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scholarship;

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { 
  FaRegCheckCircle, 
  FaUserTie, 
  FaPassport, 
  FaClipboardList, 
  FaHandshake, 
  FaPlaneArrival, 
  FaHome, 
  FaIdCard, 
  FaUniversity, 
  FaBusAlt, 
  FaHospital, 
  FaBriefcase, 
  FaUserFriends, 
  FaHeart ,
  FaCircle
} from "react-icons/fa";
const teamMembers = [
  {
    name: "Pooja Krishnan",
    role: "Education Counsellor",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/64e4b061a8296.jpg",
    linkedin: "#",
    bio: "When Ed isn’t enjoying a newly brewed tipple ... rolling the dice."
  },
  {
    name: "Aliza Singh",
    role: "Global Head of Marketing",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/6864e2551b208.jpeg",
    linkedin: "#",
    bio: "Elsa feels most at home cooking in her kitchen ... at any given opportunity."
  },
  {
    name: "Roshni Dhandabani",
    role: "Academic Counselor - Design",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/686d42e7def28.png",
    linkedin: "#",
    bio: "Known as the team’s resident garden guru ... playing games."
  },
  {
    name: "Simran Vohra",
    role: "Lead Generation Manager - Marketing",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/6872772a679e7.png",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Riddhi Das",
    role: "Marketing Lead",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/687288b65c53c.png",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Mr. Abraham Choorickapra Mani",
    role: "Co-founder & President (Maitri Association)",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/60f693a9eb3d3.jpg",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Mr. George Syriac",
    role: "Co-founder & Admissions Manager",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/60f6940f23506.jpg",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Priyanka☻ Yadav",
    role: "International Educational Coordinator",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/644fb7af1be70.jpg",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Mr. Cirio Mario",
    role: "Financial Advisor",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/6167b9d32a4d8.jpg",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Renuka C Shekhar",
    role: "Fashion Stylist and portfolio design coach",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/60f69bc800445.jpg",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
];

const partners = [
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/60db27a239793.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/60dc2bd0e4981.jpg",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/60dc469747fec.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/60dd770b53b2e.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/60e2ff25603e6.jpg",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/682b2632bc001.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/66bdbd18d149a.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/66bdbfef26c3d.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/66bdca1acefe2.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/66bdcba491f09.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/66bdcf0c2cc49.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/60e6c508702af.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/60e6fe3038366.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/60e82032e8633.png",
  "https://maitriglobaleducation.com/crm/public/uploads/Institute_img/60e8264ccced6.png"
];

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Organization Heading */}
      <section className="text-center py-12 px-4">
        <h1  style={{ fontFamily: "Epika" }} className="text-4xl font-bold mb-2">Maitri Global Education</h1>
        <div className="mx-auto w-24 border-b-4 border-orange-600 transition-all duration-500 hover:w-48"></div>
      <p className="py-[2%] px-[10%]">Maitri Global Education is an organization born in 2009 under the umbrella of Associazione Maitri a registered association to promote the exchange between cultures specifically focusing on international education. Developed itself through the years rendering services to large groups of students, schools, and educational institutions such as counselling for higher education, institutional collaborations, educational tours, etc. In 2017 Maitri Global Education which was under the Associazione Maitri got separated and registered itself in the chamber of commerce of Florence with its REA number FI651447 and registered name "Maitri Global Sas" . The company has extended its services during the pandemic with the preparation of students before admission online with coaching and language classes.</p>
      </section>

    {/* Why Maitri Global */}
<section className="max-w-6xl mx-auto px-4 mb-12">
      <h2  style={{ fontFamily: "Epika" }} className="text-2xl font-semibold mb-6">Why Maitri Global?</h2>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start">
          <FaRegCheckCircle className="text-orange-500 mr-2 mt-1" />
          MGE guides the student in discerning and decision making, in the selection of the course and institution
        </li>
        <li className="flex items-start">
          <FaUserTie className="text-orange-500 mr-2 mt-1" />
          Admission process is taken care of by a dedicated staff.
        </li>
        <li className="flex items-start">
          <FaPassport className="text-orange-500 mr-2 mt-1" />
          The student is followed up with the right guidance in visa process and other paperwork. 
          MGE intervenes in the case of a VISA problem or other paperwork difficulties.
        </li>
        <li className="flex items-start">
          <FaCircle className="text-orange-500 mr-2 mt-1 text-xs" />
          MGE provides the following ground services:
        </li>
      </ul>

      {/* Two-column services list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-3 text-gray-700">
        {[
          { text: "Complete presence throughout the time of study.", icon: <FaHandshake /> },
          { text: "Guidance in time of need during the stay.", icon: <FaUserFriends /> },
          { text: "A constant link between parents, students and the institution.", icon: <FaUniversity /> },
          { text: "Pick up at the airport.", icon: <FaPlaneArrival /> },
          { text: "Accommodation.", icon: <FaHome /> },
          { text: "Residence permit.", icon: <FaIdCard /> },
          { text: "Fiscal code.", icon: <FaClipboardList /> },
          { text: "Bank account.", icon: <FaUniversity /> },
          { text: "Information for student pass.", icon: <FaBusAlt /> },
          { text: "Support for medical assistance.", icon: <FaHospital /> },
          { text: "Assistance in time of internships and placements.", icon: <FaBriefcase /> },
          { text: "A student advisor in need.", icon: <FaUserTie /> },
          { text: "Above all, a home away from home.", icon: <FaHeart /> }
        ].map((service, index) => (
          <div key={index} className="flex items-start">
            <span className="text-orange-500 mr-2 mt-1">{service.icon}</span>
            <span>{service.text}</span>
          </div>
        ))}
      </div>
    </section>


      {/* Vision / Mission */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/abts.jpg"
          alt="About Maitri"
          className="w-full rounded-lg shadow-lg"
        />
        <div>
          <h2  style={{ fontFamily: "Epika" }} className="text-3xl font-semibold mb-4">Our Vision & Mission</h2>
          <p className="text-gray-600 mb-6">
           The Core purpose of Maitri Global Education, is to be a bridge between cultures, extending high quality education and services reachable to every aspiring student.
          </p>
         <ul>
          <li>MGE guides the student in discerning and decision making, in the selection of the course and institution</li>
          <li>MGE is dedicated to find institutions where, talented students are given the opportunity to be trained under experts, making the international experience a reality.</li>
          <li>MGE engages to enhance the international learning by interlinking the educational institutions, students and teachers worldwide.</li>
         </ul>
        </div>
      </section>

      {/* Our Team (unchanged) */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <h1  style={{ fontFamily: "Epika" }} className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64   object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full mt-2">
                  {member.role}
                </span>
                {/* <p className="mt-4 text-gray-600 text-sm">{member.bio}</p> */}
                <br />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            🌍 <h3 className="font-semibold mt-2">Global Network</h3>
            <p className="text-gray-600 text-sm mt-2">
              Access top universities worldwide.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            🎓 <h3 className="font-semibold mt-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm mt-2">
              Personalized career and education counseling.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            🤝 <h3 className="font-semibold mt-2">Trusted Support</h3>
            <p className="text-gray-600 text-sm mt-2">
              From application to admission.
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
       <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 style={{ fontFamily: "Epika" }} className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="bg-white border p-4 rounded-lg shadow hover:shadow-md transition flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </section> 
    </div>
  );
};

export default About;

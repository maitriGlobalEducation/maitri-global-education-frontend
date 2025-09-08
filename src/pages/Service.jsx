import GoldButton from "../components/GoldButton";

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
      </svg>
    ),
    title: "CHOOSE YOUR SERVICES",
    desc: "Browse our wide range of service categories and find the one that best fits your needs."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    title: "FILL YOUR INFORMATION",
    desc: "Provide your contact and your project details so we can send you the best possible offers."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4" />
      </svg>
    ),
    title: "SUBMIT ADDITIONAL DOCUMENTS",
    desc: "Upload any necessary documents to help us process your service request quickly and efficiently."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a4 4 0 00-8 0v2m-2 4h12m-4 4h4m-4 0v-4m0 4H9m4 0v-4" />
      </svg>
    ),
    title: "PAY & BOOK SERVICE",
    desc: "Make the payment securely and confirm your booking to get started with the service."
  }
];

export default function Service() {
  return (
    <div className="w-full h-auto">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[70vh] md:h-[60vh]">
        <img
          src="course.jpg"
          alt="blog"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <h2
            style={{ fontFamily: "Epika" }}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-3xl md:text-6xl font-bold uppercase drop-shadow-lg text-center"
          >
           Services
          </h2>
          <p
            style={{ fontFamily: "Montserrat" }}
            className="text-lg sm:text-xl md:text-3xl font-bold text-white mt-2 drop-shadow-md text-center"
          >
            Description of the event will be displayed here.
          </p>
        </div>
      </div>

      {/* Services Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 my-12 w-full px-4 sm:px-8 lg:px-16 ">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200 justify-start h-[300px] transition-all transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:bg-gray-200"
          >
            {/* Icon at top */}
            <div className="absolute -top-6 bg-white rounded-full p-2 shadow-md flex items-center justify-center text-gray-700 text-2xl transition-colors border border-gray-300 hover:bg-gray-100">
              {step.icon}
            </div>

            <div className="mt-10 font-bold text-gray-900 mb-2 text-base sm:text-lg transition-colors hover:text-gray-800 ">
              {step.title}
            </div>
            <div className="text-gray-600 text-sm sm:text-base mb-4 px-2 transition-colors hover:text-gray-700">
              {step.desc}
            </div>

            {/* Button */}
            <GoldButton
              text="Learn More"
              to="/service"
              borderColor="#4b5563"  // dark gray border
              textColor="#4b5563"    // dark gray text
              hoverBg="black"      // dark gray background on hover
              hoverText="white"      // text becomes white on hover
            />
          </div>
        ))}
      </div>
    </div>
  );
}

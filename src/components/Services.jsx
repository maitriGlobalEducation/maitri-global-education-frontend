import React from "react";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#2b2b2b] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">

        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3H12a9 9 0 019 9v.79z" />
      </svg>
    ),
    number: "20+",
    label: "Countries"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#2b2b2b] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 11a4 4 0 10-8 0 4 4 0 008 0z" />
      </svg>
    ),
    number: "10000+",
    label: "MGE Students Network"
  }
];

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#2b2b2b] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
      </svg>
    ),
    title: "CHOOSE YOUR SERVICES",
    desc: "Browse our wide range of service categories and find the one that best fits your needs."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#2b2b2b] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    title: "FILL YOUR INFORMATION",
    desc: "Provide your contact and project details so we can send you the best possible offer."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#2b2b2b] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4" />
      </svg>
    ),
    title: "SUBMIT ADDITIONAL DOCUMENTS",
    desc: "Upload any necessary documents to help us process your service request quickly and efficiently."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#2b2b2b] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a4 4 0 00-8 0v2m-2 4h12m-4 4h4m-4 0v-4m0 4H9m4 0v-4" />
      </svg>
    ),
    title: "PAY & BOOK SERVICE",
    desc: "Make the payment securely and confirm your booking to get started with the service."
  }
];

const Services = () => {
  return (
   <div className="flex bg-[#2d2d2d] justify-center items-center w-full py-6 px-4">
  <div className="w-full max-w-7xl bg-[#2d2d2d] rounded-2xl shadow-2xl px-6 sm:px-10 py-10 flex flex-col lg:flex-row gap-10">

    {/* Left side - Stats */}
    <div className="flex bg-white rounded-xl p-2 flex-row lg:flex-col justify-center items-center gap-6 lg:pr-10 lg:border-r border-gray-200 w-full lg:w-[250px]">
      {services.map((service, idx) => (
        <div key={idx} className="flex flex-col items-center">
          {service.icon}
          <div className="text-3xl font-bold text-gray-900">{service.number}</div>
          <div className="text-gray-500 text-base text-center">{service.label}</div>
        </div>
      ))}
    </div>

    {/* Right side - Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100 justify-start h-[280px]"
        >
          {step.icon}
          <div className="font-semibold text-gray-900 mb-2 text-base sm:text-md">{step.title}</div>
          <div className="text-gray-500 text-sm sm:text-base">{step.desc}</div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Services;

import GoldButton from '../components/Goldbutton';

export default function JobSearch() {

  return (
    <div>
      <div className="w-full h-[50vh] relative">
        <img src="https://images.pexels.com/photos/5439153/pexels-photo-5439153.jpeg" alt="" className="w-full h-full object-cover" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pb-10">
          <h2
            style={{ fontFamily: "Epika" }}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-3xl md:text-6xl font-bold uppercase drop-shadow-lg max-w-[90vw] sm:max-w-3xl"
          >
           Job Search
          </h2>
        </div>
      </div>

    
      <div className="py-16 px-4 sm:px-10 flex flex-col items-center">
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
    
    
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
     
      <img
        src="https://images.pexels.com/photos/8430302/pexels-photo-8430302.jpeg"
        alt="Counseling"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative z-10 flex flex-col justify-center items-start p-6 h-full">
        <h2 className="text-2xl font-bold mb-4 text-black drop-shadow-lg">
          Counseling Highlights
        </h2>
        <p className="text-black leading-relaxed drop-shadow-lg text-sm sm:text-base">
          Unlock Milan's Opportunities with Maitri Global Education! 
          Let us enhance your job hunt. We meticulously refine your CV 
          and portfolio, craft tailored cover letters, and secure coveted 
          interviews. Our goal is your success. Ready to make your mark? 
          Start with a complimentary counseling session. 
          Your career point begins here!
        </p>
      </div>
    </div>

   
    <div className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-4">Book Your Counseling Session</h2>
      <p className="text-gray-600 mb-6">
        Are you ready to embark on this journey with us? 
        Take the first step by applying for a complimentary counseling session 
        with our experienced career expert. Milan awaits, and we're here to 
        help you make your mark.
      </p>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="p-3 border rounded-lg w-full" />
        <input type="text" placeholder="Last Name" className="p-3 border rounded-lg w-full" />
        <input type="tel" placeholder="Phone" className="p-3 border rounded-lg w-full" />
        <input type="email" placeholder="Email" className="p-3 border rounded-lg w-full" />
        <input type="text" placeholder="Recent School/College" className="p-3 border rounded-lg w-full sm:col-span-2" />
        <input type="text" placeholder="Career Stream" className="p-3 border rounded-lg w-full sm:col-span-2" />
        <input type="text" placeholder="Graduating Year" className="p-3 border rounded-lg w-full sm:col-span-1" />
        <select className="p-3 border rounded-lg w-full sm:col-span-1">
          <option>Level of Education</option>
          <option>Bachelor's</option>
          <option>Master's</option>
          <option>PhD</option>
        </select>
      </form>

      <div className="mt-6 text-center">
        <GoldButton text={"Register Now"} to="/register" />
      </div>
    </div>
  </div>
</div>


     
    </div>
  );
}

import GoldButton from '../components/Goldbutton';

export default function JobSearch() {

  return (
    <div>
    
      <div className="w-full h-[50vh] relative">
        <img src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg" alt="" className="w-full h-full object-cover opacity-50" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pb-10">
          <h2
            style={{ fontFamily: "Epika" }}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-3xl md:text-6xl font-bold uppercase drop-shadow-lg max-w-[90vw] sm:max-w-3xl"
          >
           Contact Us
          </h2>
        </div>
      </div>

    
  
      <div className="py-16 px-4 sm:px-10 flex flex-col items-center">
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
    
  
<div className="flex flex-col items-center justify-center text-center space-y-6">
 
  <img
    src="https://images.pexels.com/photos/4160139/pexels-photo-4160139.jpeg"
    alt="Contact"
    className="w-40 md:w-60 h-auto object-cover rounded-lg shadow-md"
  />

  
  <div>
    <h2 className="text-3xl font-bold text-orange-600 mb-2">Get In Touch</h2>
    <p className="text-gray-700">Contact us for any queries</p>
  </div>
</div>


  
    <div className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col justify-center">
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="Name *" className="p-3 border rounded-lg w-full" />
        <input type="text" placeholder="Last Name *" className="p-3 border rounded-lg w-full" />
        
        <select className="p-3 border rounded-lg w-full">
          <option>Country *</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
        </select>
        <input type="tel" placeholder="Mobile *" className="p-3 border rounded-lg w-full" />
        
        <input type="email" placeholder="Email *" className="p-3 border rounded-lg w-full sm:col-span-2" />
        <textarea placeholder="Message *" rows="4" className="p-3 border rounded-lg w-full sm:col-span-2"></textarea>
      </form>

      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <label className="flex items-start space-x-2">
          <input type="checkbox" className="mt-1" />
          <span>
            I have read the <a href="#" className="text-blue-600 underline">Terms</a> pursuant to Art. 13 of the GDPR 679/16 and agree to the processing of my personal data.*
          </span>
        </label>
        <label className="flex items-start space-x-2">
          <input type="checkbox" className="mt-1" />
          <span>
            I am also agreeing to the use of my personal data to receive information about new scholarships, updates, new courses, talks and events that could interest me.
          </span>
        </label>
        <label className="flex items-start space-x-2">
          <input type="checkbox" className="mt-1" />
          <span>
            I agree to the use of my personal data for profiling activities.
          </span>
        </label>
      </div>

      <div className="mt-6 text-center">
        <GoldButton to="/contact" text={"SUBMIT"} />
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

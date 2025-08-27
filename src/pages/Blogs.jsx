
import GoldButton from '../components/Goldbutton';

export default function Eventsind() {
  // ✅ Define your data object here
  const events = [
    {
      id: 1,
      title: "Blog name 1",
      date: "25 Aug 2025",
      description:
        "Brief description of the blog content goes here. It should be concise and engaging to encourage readers to click through.",
      image:
        "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg",
    },
    {
      id: 2,
      title: "Blog name 2",
      date: "25 Aug 2025",
      description:
        "Brief description of the blog content goes here. It should be concise and engaging to encourage readers to click through.",
      image:
        "https://images.pexels.com/photos/4050297/pexels-photo-4050297.jpeg",
    },
    {
      id: 3,
      title: "Blog name 3",
      date: "25 Aug 2025",
      description:
        "Brief description of the blog content goes here. It should be concise and engaging to encourage readers to click through.",
      image:
        "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[50vh] relative">
        <img src="blog.jpg" alt="" className="w-full h-full object-cover" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pb-10">
          <h2
            style={{ fontFamily: "Epika" }}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-3xl md:text-6xl font-bold uppercase drop-shadow-lg max-w-[90vw] sm:max-w-3xl"
          >
           Blogs
          </h2>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-16 px-4 sm:px-10 flex flex-col items-center space-y-16">
        <h1
          style={{ fontFamily: "Epika" }}
          className="text-4xl sm:text-5xl font-bold text-center mb-8"
        >
          Explore Blogs
        </h1>

        <div className="px-3 lg:mx-30 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-5 mb-6">
          {/* ✅ Loop through events array */}
          {events.map((event) => (
            <div
              key={event.id}
              className="text-center md:text-left"
            >
              <img
                className="w-full h-auto rounded-lg mx-auto md:mx-0"
                src={event.image}
                alt={event.title}
              />
              <h2 className="text-2xl mt-2">{event.title}</h2>
              <p className="text-gray-600">Published on : {event.date}</p>
              <p className="mt-2 font-thin">{event.description}</p>
              <GoldButton text={"Read..."} to="/events" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

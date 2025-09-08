import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "HOME", href: "/" },
  { title: "EXPLORE", href: "/explore" },
  { title: "SCHOLARSHIPS", href: "/scholarship" },
  { title: "EVENTS & WEBINARS", href: "/events" },
  { title: "BLOGS", href: "/blogs" },
  { title: "SERVICES", href: "/service" },
  { title: "ELITE CAREER CHOICE", href: "/elite-career" },
  { title: "ABOUT", href: "/about" },
  { title: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{ fontFamily: "roboto" }}
      className="w-full bg-black text-gray-300 z-20 font-thin"
    >
      {/* Hamburger for mobile + tablets */}
      <button
        className="lg:hidden absolute top-3 right-4 p-2 focus:outline-none z-50"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className="block w-7 h-0.5 bg-white mb-1 rounded"></span>
        <span className="block w-7 h-0.5 bg-white mb-1 rounded"></span>
        <span className="block w-7 h-0.5 bg-white rounded"></span>
      </button>

      {/* Row 1: Logo */}
      <div href="/" className="flex flex-col items-center py-1">
        <img
          src="/maitri.png"
          alt="maitri logo"
          className="h-16 w-auto mx-auto"
        />
      </div>

      {/* Row 2: Nav Links */}
      <div className="relative">
        {/* Nav links (desktop only) */}
        <div className="hidden lg:flex justify-center gap-14 py-1 text-sm lg:text-base">
          {navLinks.map((item, id) =>
            item.title === "SCHOLARSHIPS" ? (
              <Link
                key={id}
                to={item.href}
                className="hover:text-white transition-colors duration-200 text-sm"
              >
                {item.title}
              </Link>
            ) : (
              <a
                key={id}
                href={item.href}
                className="hover:text-white transition-colors duration-200 text-sm"
              >
                {item.title}
              </a>
            )
          )}
        </div>

        {/* Nav links (mobile + tablet, toggled) */}
        {menuOpen && (
          <div className="lg:hidden fixed top-0 left-0 right-0 bg-black flex flex-col items-center h-full justify-center gap-4 py-4 shadow-lg animate-fade-in z-40">
            {navLinks.map((item, id) =>
              item.title === "SCHOLARSHIPS" ? (
                <Link
                  key={id}
                  to={item.href}
                  className="hover:text-yellow-300 text-base block w-full text-center py-1 font-normal"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ) : (
                <a
                  key={id}
                  href={item.href}
                  className="hover:text-yellow-300 text-base block w-full text-center py-1 font-normal"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

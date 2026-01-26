import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Adjust navbar height based on screen size
  const NAVBAR_HEIGHT = window.innerWidth >= 640 ? 80 : 70;

  const handleNavClick = (sectionId) => {
    // Update route
    if (sectionId === "home") {
      navigate("/");
    } else {
      navigate(`/#${sectionId}`);
    }

    // Scroll AFTER route update
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      // Get the navbar height dynamically
      const navbarHeight = window.innerWidth >= 640 ? 80 : 70;
      
      // Get element position relative to document
      const elementRect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Calculate target scroll position with navbar offset
      let targetScroll = elementRect.top + scrollTop - navbarHeight;
      
      // For the home section, scroll to the very top
      if (sectionId === "home") {
        targetScroll = 0;
      }

      window.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }, 50);

    setIsMenuOpen(false);
  };

  const navlinks = [
    { id: "home", text: "Home" },
    { id: "about", text: "About Us" },
    { id: "products", text: "Products" },
    { id: "certifications", text: "Certifications" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <>
      {/* ✅ FIXED NAVBAR (no slide animation) */}
      <motion.nav
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 z-50 w-full
                   bg-gradient-to-r from-red-600/95 via-orange-600/95 to-yellow-500/95
                   backdrop-blur-[15px] shadow-lg shadow-red-600/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between h-[70px] sm:h-[80px]">
          <div className="flex items-center gap-2 sm:gap-4">
            <img
              className="h-8 sm:h-14 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              src="/logo.png"
              alt="AL BURINY Logo"
            />
            <span className="text-white text-[10px] sm:text-xl font-bold tracking-widest">
              AL BURINY
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-10 ml-auto">
            {navlinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-white font-semibold
                           hover:-translate-y-0.5
                           hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]
                           transition-all duration-300"
              >
                {link.text}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden ml-auto p-2 active:scale-90 transition"
          >
            <MenuIcon className="size-6 text-white" />
          </button>
        </div>
      </motion.nav>

      {/* ✅ MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-[100]
                    bg-black/70 backdrop-blur
                    flex flex-col items-center justify-center gap-8
                    lg:hidden transition-opacity duration-300
                    ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {navlinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className="text-white text-xl font-semibold
                       hover:text-yellow-300 transition"
          >
            {link.text}
          </button>
        ))}

        <button
          onClick={() => setIsMenuOpen(false)}
          className="mt-6 size-10 rounded-full
                     bg-white text-black
                     flex items-center justify-center
                     hover:bg-gray-200 transition"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
}

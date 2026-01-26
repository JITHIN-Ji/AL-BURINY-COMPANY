import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleNavClick = (sectionId) => {
        // Update URL to show the section
        if (sectionId === "home") {
            navigate("/");
        } else {
            navigate(`/#${sectionId}`);
        }
        
        // Scroll to the section
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
        
        setIsMenuOpen(false);
    };
    
    const navlinks = [
        {
            id: "home",
            text: "Home",
        },
        {
            id: "about",
            text: "About Us",
        },
        {
            id: "products",
            text: "Products",
        },
        {
            id: "certifications",
            text: "Certifications",
        },
        {
            id: "contact",
            text: "Contact",
        },
    ];
    return (
        <>
            <motion.nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-red-600/95 via-orange-600/95 to-yellow-500/95 backdrop-blur-[15px] shadow-lg shadow-red-600/40"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                        <img className="h-14 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-110 hover:rotate-12 transition-transform duration-300" 
                             src="/logo.png" 
                             alt="AL BURINY Logo" />
                        <span className="text-white text-xl font-bold tracking-widest hidden sm:block">AL BURINY</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-10 ml-auto">
                        {navlinks.map((link) => (
                            <button key={link.id} onClick={() => handleNavClick(link.id)} className="text-white font-semibold hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300 px-2 py-1 bg-none border-none cursor-pointer">
                                {link.text}
                            </button>
                        ))}
                    </div>

                    <button onClick={() => setIsMenuOpen(true)} className="lg:hidden active:scale-90 transition ml-auto">
                        <MenuIcon className="size-6 text-white" />
                    </button>
                </div>
            </motion.nav>
            <div className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 lg:hidden transition-all duration-400 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                {navlinks.map((link) => (
                    <button key={link.id} onClick={() => {
                        handleNavClick(link.id);
                        setIsMenuOpen(false);
                    }} className="text-white text-xl font-semibold hover:text-yellow-300 transition bg-none border-none cursor-pointer">
                        {link.text}
                    </button>
                ))}
                <button onClick={() => setIsMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-white hover:bg-gray-200 transition text-black rounded-full flex mt-4">
                    <XIcon />
                </button>
            </div>
        </>
    );
}
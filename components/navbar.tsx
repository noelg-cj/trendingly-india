import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
      scale: 1,
      transition: { duration: 0.3 },
    },
    open: {
      rotate: 90,
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className="fixed sm:top-2 w-[100%] sm:mx-auto z-50 text-black sm:px-3 ">
      <div
        className={`p-[5px] sm:pr-1 sm:pl-16 flex items-center justify-between sm:rounded-lg transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-sm" : "bg-white"
        }`}
      >
        <div>
          <Link href="/">
            <span className="font-canicule text-4xl">Trendingly</span>
          </Link>
        </div>

        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            variants={hamburgerVariants}
            animate={isMenuOpen ? "open" : "closed"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-12 items-center">
            <li>
              <Link
                href="/about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/for-brands"
                className="hover:text-gray-300 transition-colors"
              >
                For Brands
              </Link>
            </li>
            <li>
              <Link
                href="/for-creators"
                className="hover:text-gray-300 transition-colors"
              >
                For Creators
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <button className="py-[21px] px-16 bg-black text-white rounded hover:bg-opacity-90 transition-all">
                  Explore Services
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-white/80 backdrop-blur-sm md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li>
                <Link
                  href="/about"
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/for-brands"
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  For Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/for-creators"
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  For Creators
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={toggleMenu}
                  className="px-6 py-2 bg-black text-white border border-white rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

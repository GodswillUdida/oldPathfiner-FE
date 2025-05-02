import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "./navData";
import logo from "/ACCOUNTANTS’ PATHFINDER LOGO.webp";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar:FC= () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <header className={clsx(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolling ? "bg-white shadow-md border-b border-blue-100" : "bg-blue-900"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="Logo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="h-10 w-auto object-contain"
            />
            <span className={clsx(
              "font-bold text-lg sm:text-xl tracking-wide",
              scrolling ? "text-blue-900" : "text-white"
            )}>
              PATHFINDER
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={clsx(
                  "text-md font-medium transition-all duration-200",
                  scrolling ? "text-blue-800 hover:text-blue-600" : "text-white hover:text-blue-300"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/programs"
              className="ml-4 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-poppins shadow-md hover:shadow-lg hover:brightness-110 transition hover:text-white "
            >
              Browse Courses
            </Link>
          </nav>

          <button
            onClick={handleToggle}
            className="lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <FaTimes className="text-blue text-xl" />
              : <FaBars className="text-blue text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-blue-800 px-6 pb-6 flex flex-col gap-4"
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-white font-inter text-base py-1 hover:text-blue-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/programs"
              className="mt-3 px-5 py-3 text-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:text-white font-bold shadow-md hover:shadow-lg hover:brightness-110 transition"
            >
              Browse Courses
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

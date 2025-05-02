import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar"; // Adjust path as needed
import Footer from "../components/Footer"; // Adjust path as needed

const MainLayout: React.FC = () => {
  const location = useLocation();

  // List of base paths where the Navbar should NOT appear
  const noNavbarPaths = ["/dashboard", "/login", "/register", "/admin"];

  // List of pages where the WhatsApp button should NOT appear (unchanged)
  const hiddenPages = ["/admin", "/dashboard", "/register", "/login"];

  // Check if Navbar should be shown (hide for any /dashboard/* route)
  const showNavbar = !noNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex flex-col min-h-screen">
      {showNavbar && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {!hiddenPages.includes(location.pathname) && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          initial="hidden"
          animate="visible"
          className="fixed bottom-6 right-6 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://wa.me/2347014580375"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            Chat with Us
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default MainLayout;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full -translate-x-1/3 translate-y-1/4 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/4 blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
      >
        {/* Heading */}
        <motion.h2
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
        >
          Begin Your{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text animate-gradient">
              Accounting Journey
            </span>
            <span className="absolute inset-x-0 bottom-0 h-1.5 bg-blue-400/40 blur-md transform -skew-x-12" />
          </span>{" "}
          Today
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={textVariants}
          className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
        >
          Unlock your potential with expert-led accounting courses designed for success.
        </motion.p>

        {/* Button */}
        <motion.div variants={textVariants}>
          <Link to="/register">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="relative inline-flex items-center px-8 py-3 md:px-10 md:py-4 bg-white text-blue-900 font-semibold rounded-full shadow-lg overflow-hidden group"
            >
              <span className="relative z-10">Enroll Now</span>
              <span className="absolute inset-0 bg-blue-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full animate-ping group-hover:opacity-0 transition-opacity duration-300" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Custom CSS for Gradient Animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
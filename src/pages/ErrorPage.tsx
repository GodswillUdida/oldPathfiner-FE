import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRocket, FaExclamationTriangle } from "react-icons/fa";

const ErrorPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rocketVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-slow-spin" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-slow-spin animation-delay-2000" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-4 mb-8"
        >
          <FaExclamationTriangle className="text-blue-400 text-5xl animate-pulse" />
          <h1 className="text-8xl sm:text-9xl font-extrabold tracking-wider text-white drop-shadow-md">
            404
          </h1>
          <FaExclamationTriangle className="text-blue-400 text-5xl animate-pulse" />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
        >
          Lost in <span className="text-blue-400">Hyperspace?</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Oops! The page you’re looking for doesn’t exist. Let's get you back on
          track.
        </motion.p>

        <motion.div
          variants={rocketVariants}
          animate="animate"
          className="text-6xl text-blue-400 mb-10"
        >
          <FaRocket />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="relative inline-flex items-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            <span className="relative z-10">Return to Home</span>
            <span className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-out" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400/10 transition-all duration-300"
          >
            Contact Support
          </Link>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes slowSpin {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
        .animate-slow-spin {
          animation: slowSpin 20s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ErrorPage;

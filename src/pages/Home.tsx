import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImg from "../assets/CLASS1.webp";

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src={HeroImg}
          alt="Instructor teaching students"
          loading="lazy"
          className="w-full h-full object-cover opacity-25 scale-110 transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90" />
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-white"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-center max-w-4xl mb-6 leading-tight tracking-tight"
        >
          Master Accounting & ICAN with{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-red-200 to-blue-600 text-transparent bg-clip-text animate-gradient">
              Expert Guidance
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-200/50 to-red-500/50 blur-md transform -skew-x-12" />
          </span>
          !
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-center max-w-3xl mb-10 text-gray-200 font-light leading-relaxed"
        >
          Join our professional training and excel in your career with
          world-class mentorship and cutting-edge resources.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/register"
            className="relative inline-flex items-center hover:text-white justify-center px-8 py-4 bg-blue-200 text-gray-900 font-semibold rounded-full overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 ">Get Started</span>
            <span className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-out" />
            <span className="absolute right-4 w-2 h-2 bg-gray-900 rounded-full group-hover:animate-ping" />
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Explore Programs
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />

      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;

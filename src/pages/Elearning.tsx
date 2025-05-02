import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBook, FaPlayCircle, FaStar } from "react-icons/fa";

interface Program {
  path: string;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  rating: number;
}

const programs: Program[] = [
  {
    path: "/programs/ican",
    title: "ICAN Certification",
    description:
      "Master professional accounting with globally recognized certification.",
    lessons: 25,
    duration: "6 months",
    rating: 4.8,
  },
  {
    path: "/programs/bsc",
    title: "BSC in Accounting",
    description: "Comprehensive degree program for aspiring accountants.",
    lessons: 40,
    duration: "3 years",
    rating: 4.7,
  },
  {
    path: "/programs/mba",
    title: "MBA with Accounting Focus",
    description: "Elevate your career with business and accounting expertise.",
    lessons: 30,
    duration: "2 years",
    rating: 4.9,
  },
  {
    path: "/programs/software",
    title: "Accounting Software Mastery",
    description: "Learn QuickBooks, Sage, and more for practical skills.",
    lessons: 15,
    duration: "3 months",
    rating: 4.6,
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)" },
  tap: { scale: 0.95 },
};

const Elearning: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-11">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-inter font-bold mb-6"
          >
            Unlock Your Future with E-Learning
          </motion.h1>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-poppins font-bold"
          >
            Learn accounting and business skills anytime, anywhere with
            Pathfinder College’s cutting-edge online platform.
          </motion.p>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <Link
              to="/register"
              className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300"
            >
              Start Learning Now
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
          >
            Why Choose Our E-Learning?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBook className="text-blue-600 text-4xl" />,
                title: "Expert-Led Courses",
                desc: "Learn from industry professionals with real-world experience.",
              },
              {
                icon: <FaPlayCircle className="text-blue-600 text-4xl" />,
                title: "Flexible Learning",
                desc: "Study at your own pace, on your own schedule.",
              },
              {
                icon: <FaStar className="text-blue-600 text-4xl" />,
                title: "Top-Rated Content",
                desc: "High-quality materials designed for success.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-poppins">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
          >
            Explore Our Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.path}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 font-inter">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between text-gray-700 text-sm mb-4">
                    <span>{program.lessons} Lessons</span>
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.floor(program.rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="ml-2 text-gray-700">{program.rating}</span>
                  </div>
                  <Link
                    to={program.path}
                    className="block text-center bg-blue-600 text-white font-medium py-2 rounded-full hover:bg-blue-700 transition-all duration-200"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Join thousands of learners mastering accounting and business skills
            online.
          </motion.p>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <Link
              to="/register"
              className="bg-blue-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Elearning;

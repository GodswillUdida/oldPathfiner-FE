import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import InstructorImg from "../assets/dr president.webp";
import SuccessStory1 from "../assets/Official Pics.webp";
import SuccessStory2 from "../assets/pexels-photo-7713214.webp";
import Navbar from "../components/Navbar/Navbar";

interface Instructor {
  name: string;
  photo: string;
  experience: string;
  certifications: string[];
}

interface SuccessStory {
  name: string;
  quote: string;
  photo: string;
  achievement: string;
}

const About: React.FC = () => {
  const instructor: Instructor = {
    name: "Dr President Onomuorhoya",
    photo: InstructorImg,
    experience: "15+ years in accounting education and industry practice.",
    certifications: ["ICAN Fellow","Lecturer","Accountant","Financial Analyst","MBA","BSc","FMVA","BIDA","AAT","ACA","CMC","CHRP","FIMC","FCIHRM"]
  };

  const successStories: SuccessStory[] = [
    {
      name: "Udida Emmanuel",
      quote:
        "Accountant's Pathfinder’s training was key to passing my ICAN exams!",
      photo: SuccessStory1,
      achievement: "ICAN Certified, 2023",
    },
    {
      name: "James Adebayo",
      quote: "The instructors’ guidance gave me the confidence to excel.",
      photo: SuccessStory2,
      achievement: "Top ICAN Scorer, 2022",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-inter font-semibold text-gray-900 mt-7 mb-3"
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text font-poppins font-bold">
              Accountant's Pathfinder
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-inter"
          >
            Empowering accounting professionals with world-class education and
            mentorship.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl shadow-lg p-8 mb-16 flex flex-col md:flex-row items-center gap-8"
        >
          <motion.img
            variants={itemVariants}
            src={instructor.photo}
            alt={instructor.name}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-500/20 hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center md:text-left">
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-900 mb-2"
            >
              Meet Our Lead Instructor
            </motion.h2>
            <motion.h3
              variants={itemVariants}
              className="text-xl font-medium text-cyan-600 mb-4"
            >
              {instructor.name}
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600 mb-4">
              {instructor.experience}
            </motion.p>
            <motion.ul
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >
              {instructor.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium"
                >
                  <FaAward />
                  {cert}
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {[
            {
              title: "Our Mission",
              text: "Creating a path of career development for professional accountants.",
            },
            {
              title: "Our Vision",
              text: "To be the leading platform for accounting excellence, fostering a community of innovative, skilled, and globally competitive professionals.",
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl text-gray-900 mb-4 font-poppins font-bold">
                {section.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-inter font-bold">{section.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <motion.div
                key={story.name}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={story.photo}
                  alt={story.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-cyan-500/20"
                />
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {story.name}
                </h3>
                <p className="text-sm text-gray-600 italic mb-4">
                  "{story.quote}"
                </p>
                <div className="flex items-center gap-2 text-cyan-500">
                  <FaGraduationCap />
                  <span className="font-medium">{story.achievement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <Link
            to="/courses"
            className="inline-flex px-8 py-4 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore Our Courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

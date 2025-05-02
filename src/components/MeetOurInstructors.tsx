import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import img1 from "../assets/dr president.webp"
import img2 from "../assets/Olawalere.webp"
import img3 from "../assets/Official Pics.webp"

// TypeScript interface for instructor data
interface Instructor {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

// Sample instructor data
const instructors: Instructor[] = [
  {
    id: 1,
    name: "Dr. President Onorhorya",
    title:
      "Senior Accounting Lecturer | Accountant | Financial Analyst | MBA | BSc | FMVA | BIDA | AAT | ACA | CMC | CHRP |FIMC | FCIHRM",
    bio: "With over 10 years of experience in financial accounting, Dr. President specializes in ICAN and ACCA training, helping students excel in their professional exams.",
    imageUrl: img1,
    socialLinks: {
      linkedin: "https://ng.linkedin.com/in/president-onomuorhoya",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 2,
    name: "Mr. Michael Olawalere",
    title:
      "Accounting Software Expert | Chartered Accountant | Financial Analyst | Data Analyst | Project Manager",
    bio: "Michael is a certified QuickBooks and Sage instructor with a passion for teaching practical software skills to aspiring accountants.",
    imageUrl: img2,
    socialLinks: {
      linkedin: "https://ng.linkedin.com/in/oluwalere-michael",
      instagram: "https://instagram.com/",
    },
  },
  {
    id: 3,
    name: "Mr. Emmanuel Udida",
    title:
      "CHARTERED-ACCOUNTANT | LECTURER | DATA ANALYST | FINANCIAL ANALYST | ENTREPRENEUR",
    bio: "Emmanuel brings 5+ years of industry experience, offering insights into corporate finance and strategic planning for BSC Accounting students.",
    imageUrl: img3,
    socialLinks: {
      linkedin: "https://ng.linkedin.com/in/emmanuel-udida-31a625234",
      instagram: "https://instagram.com/",
    },
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const MeetOurInstructors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 border-b-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Meet{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
            Our Instructors
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
          Our team of expert instructors is dedicated to guiding you through
          your accounting journey with knowledge, passion, and real-world
          experience.
        </p>
      </motion.div>

      {/* Instructors Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {instructors.map((instructor) => (
          <motion.div
            key={instructor.id}
            variants={cardVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            {/* Instructor Image */}
            <div className="relative h-64">
              <img
                src={instructor.imageUrl}
                alt={instructor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Instructor Info */}
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                {instructor.name}
              </h2>
              <p className="text-sm text-blue-600 mb-4">{instructor.title}</p>
              <p className="text-gray-600 text-sm mb-6 font-poppins">
                {instructor.bio}
              </p>

              {/* Social Links */}
              {instructor.socialLinks && (
                <div className="flex justify-center gap-4">
                  {instructor.socialLinks.linkedin && (
                    <a
                      href={instructor.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 transition-colors duration-200"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {instructor.socialLinks.twitter && (
                    <a
                      href={instructor.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                    >
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {instructor.socialLinks.instagram && (
                    <a
                      href={instructor.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-700 transition-colors duration-200"
                    >
                      <FaInstagram size={20} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MeetOurInstructors;

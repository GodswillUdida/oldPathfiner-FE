import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

// TypeScript interfaces
interface Program {
  path: string;
  label: string;
  description: string;
  subPrograms?: SubProgram[];
}

interface SubProgram {
  path: string;
  label: string;
  description: string;
  nestedPrograms?: { path: string; label: string; description: string }[];
}

// Program data (mirroring Navbar structure)
const programs: Program[] = [
  {
    path: "/programs/ican",
    label: "ICAN",
    description:
      "Professional accounting certification with global recognition.",
    subPrograms: [
      {
        path: "/programs/ican/ats",
        label: "ATS",
        description:
          "Associate Accounting Technician Scheme for foundational skills.",
        nestedPrograms: [
          {
            path: "/programs/ican/ats/ats-1",
            label: "ATS 1",
            description: "Introduction to accounting principles.",
          },
          {
            path: "/programs/ican/ats/ats-2",
            label: "ATS 2",
            description: "Intermediate accounting and finance.",
          },
          {
            path: "/programs/ican/ats/ats-3",
            label: "ATS 3",
            description: "Advanced technical accounting skills.",
          },
        ],
      },
      {
        path: "/programs/ican/professional",
        label: "Professional",
        description: "Advanced ICAN certification for expert accountants.",
      },
    ],
  },
  {
    path: "/programs/bsc",
    label: "BSC",
    description:
      "Bachelor of Science in Accounting for comprehensive education.",
  },
  {
    path: "/programs/mba",
    label: "MBA",
    description: "Master of Business Administration with an accounting focus.",
  },
  {
    path: "/programs/dba",
    label: "DBA",
    description: "Doctor of Business Administration for accounting leaders.",
  },
  {
    path: "/programs/diploma",
    label: "Diploma in Applied Accounting",
    description: "Practical diploma for applied accounting expertise.",
  },
  {
    path: "/programs/software",
    label: "Accounting Software",
    description: "Master tools like QuickBooks, Sage, and more.",
  },
  {
    path: "/programs/analytics",
    label: "Data Analytics",
    description: "Learn data-driven decision-making in accounting.",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const Programs: React.FC = () => {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [expandedSubProgram, setExpandedSubProgram] = useState<string | null>(
    null
  );

  const toggleProgram = (label: string) => {
    setExpandedProgram(expandedProgram === label ? null : label);
    setExpandedSubProgram(null); // Reset sub-program expansion when toggling program
  };

  const toggleSubProgram = (label: string) => {
    setExpandedSubProgram(expandedSubProgram === label ? null : label);
  };

  return (
    <section className="bg-gray-50 py-16 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Our Programs
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our world-class accounting and business programs designed to
            elevate your career.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <motion.div
              key={program.path}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {program.label}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {program.description}
                </p>
                <Link
                  to={program.path}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
              {/* Accordion for Sub-Programs */}
              {program.subPrograms && (
                <div className="border-t border-blue-100">
                  <button
                    onClick={() => toggleProgram(program.label)}
                    className="w-full flex items-center justify-between p-4 text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-200"
                  >
                    <span>View Levels</span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        expandedProgram === program.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedProgram === program.label && (
                      <motion.div
                        variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-blue-50 p-4"
                      >
                        {program.subPrograms.map((subProgram) => (
                          <div key={subProgram.path} className="mb-4 last:mb-0">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-lg font-medium text-blue-800">
                                  {subProgram.label}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                  {subProgram.description}
                                </p>
                              </div>
                              {subProgram.nestedPrograms && (
                                <button
                                  onClick={() =>
                                    toggleSubProgram(subProgram.label)
                                  }
                                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                >
                                  <FaChevronDown
                                    className={`transition-transform duration-300 ${
                                      expandedSubProgram === subProgram.label
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </button>
                              )}
                            </div>
                            {/* Nested Programs */}
                            {subProgram.nestedPrograms && (
                              <AnimatePresence>
                                {expandedSubProgram === subProgram.label && (
                                  <motion.div
                                    variants={accordionVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="mt-2 pl-4"
                                  >
                                    {subProgram.nestedPrograms.map((nested) => (
                                      <Link
                                        key={nested.path}
                                        to={nested.path}
                                        className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
                                      >
                                        {nested.label} - {nested.description}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

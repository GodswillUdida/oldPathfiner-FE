import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserTie, FaBook } from "react-icons/fa";

interface SubCourse {
  title: string;
  price: string;
  description: string;
}

interface CourseDetailData {
  id: string;
  title: string;
  description: string;
  totalPrice: string;
  instructor: {
    name: string;
    experience: string;
    certifications: string[];
  };
  subCourses: SubCourse[];
  modules: string[];
}

const courseDetailsData: CourseDetailData[] = [
  {
    id: "ican",
    title: "ICAN Certification",
    description:
      "The Institute of Chartered Accountants of Nigeria (ICAN) certification equips you with advanced accounting skills.",
    totalPrice: "₦150,000",
    instructor: {
      name: "Dr. Udida Emmanuel",
      experience: "15+ years in accounting education and practice",
      certifications: ["ICAN Fellow", "CPA", "PhD in Accounting"],
    },
    subCourses: [
      {
        title: "ICAN Foundation",
        price: "₦50,000",
        description: "Core accounting principles.",
      },
      {
        title: "ICAN Skills",
        price: "₦50,000",
        description: "Intermediate accounting skills.",
      },
      {
        title: "ICAN Professional",
        price: "₦50,000",
        description: "Advanced exam prep.",
      },
    ],
    modules: [
      "Financial Accounting",
      "Management Accounting",
      "Taxation",
      "Audit and Assurance",
      "Business Law",
    ],
  },
  {
    id: "bsc",
    title: "BSC Certification",
    description:
      "The Accounting Technicians Scheme (BSC) provides foundational training across three levels.",
    totalPrice: "₦80,000",
    instructor: {
      name: "Mrs. Amina Bello",
      experience: "10+ years training accounting technicians",
      certifications: ["ATS Certified", "ICAN Member"],
    },
    subCourses: [
      {
        title: "BSC 1",
        price: "₦25,000",
        description: "Basic accounting concepts.",
      },
      {
        title: "BSC 2",
        price: "₦25,000",
        description: "Intermediate techniques.",
      },
      {
        title: "BSC 3",
        price: "₦30,000",
        description: "Advanced technician skills.",
      },
    ],
    modules: [
      "Basic Accounting",
      "Economics",
      "Business Mathematics",
      "Principles of Taxation",
    ],
  },
  {
    id: "mba",
    title: "MBA Certification",
    description:
      "The Association of National Accountants of Nigeria (ANAN) certification focuses on national standards.",
    totalPrice: "₦120,000",
    instructor: {
      name: "Prof. Chukwu Eze",
      experience: "12+ years in accounting and auditing",
      certifications: ["ANAN Fellow", "MBA"],
    },
    subCourses: [
      {
        title: "MBA Part 1",
        price: "₦40,000",
        description: "Intro to national accounting.",
      },
      {
        title: "MBA Part 2",
        price: "₦40,000",
        description: "Intermediate practices.",
      },
      {
        title: "MBA Part 3",
        price: "₦40,000",
        description: "Advanced standards.",
      },
    ],
    modules: [
      "Public Sector Accounting",
      "Financial Management",
      "Cost Accounting",
      "Nigerian Taxation",
    ],
  },
  {
    id: "dba",
    title: "DBA Certification",
    description:
      "The Chartered Institute of Bankers of Nigeria (CIBN) certification prepares you for banking excellence.",
    totalPrice: "₦100,000",
    instructor: {
      name: "Mr. Tunde Adeyemi",
      experience: "18+ years in banking and financial education",
      certifications: ["CIBN Certified", "ACCA"],
    },
    subCourses: [
      {
        title: "DBA Foundation",
        price: "₦30,000",
        description: "Banking basics.",
      },
      {
        title: "DBA Intermediate",
        price: "₦30,000",
        description: "Financial operations.",
      },
      {
        title: "DBA Professional",
        price: "₦40,000",
        description: "Advanced banking.",
      },
    ],
    modules: [
      "Banking Operations",
      "Financial Markets",
      "Risk Management",
      "Ethics in Banking",
    ],
  },
];

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courseDetailsData.find((c) => c.id === id);

  if (!course) {
    return (
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 text-center">
          <h2 className="text-3xl font-bold text-blue-600">Course Not Found</h2>
          <Link
            to="/courses"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Back to Courses
          </Link>
        </div>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="pb-10 pt-2 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {course.description}
            </p>
            <p className="text-2xl font-bold text-blue-500 mt-4">
              Total: {course.totalPrice}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">
              Sub-Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.subCourses.map((subCourse, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-medium text-blue-600">
                      {subCourse.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {subCourse.description}
                    </p>
                    <p className="text-blue-500 font-bold mt-2">
                      {subCourse.price}
                    </p>
                  </div>
                  <Link
                    to={`/courses/${course.id}/${index}`} // Updated to sub-course detail page
                    className="mt-4 inline-flex px-4 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 text-center"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <FaUserTie /> Instructor
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-800">
                {course.instructor.name}
              </p>
              <p className="text-gray-600">{course.instructor.experience}</p>
              <ul className="flex flex-wrap gap-3">
                {course.instructor.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <FaBook /> Modules Covered
            </h2>
            <ul className="space-y-2 text-gray-700">
              {course.modules.map((module, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  {module}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Link
              to="/enroll"
              className="inline-flex px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Enroll in Full Course
            </Link>
            <Link to="/courses" className="ml-4 text-blue-500 hover:underline">
              Back to Courses
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseDetail;

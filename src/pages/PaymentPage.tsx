import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Course details extracted to a separate module (optional for better maintainability)
const courseDetailsData = {
  ican: {
    title: "ICAN Certification",
    subCourses: ["Foundation", "Skills", "Professional"],
    prices: ["₦50,000", "₦50,000", "₦50,000"],
  },
  ats: {
    title: "ATS Certification",
    subCourses: ["ATS 1", "ATS 2", "ATS 3"],
    prices: ["₦25,000", "₦25,000", "₦30,000"],
  },
  anan: {
    title: "ANAN Certification",
    subCourses: ["Part 1", "Part 2", "Part 3"],
    prices: ["₦40,000", "₦40,000", "₦40,000"],
  },
  cibn: {
    title: "CIBN Certification",
    subCourses: ["Foundation", "Intermediate", "Professional"],
    prices: ["₦30,000", "₦30,000", "₦40,000"],
  },
} as const;

const PaymentPage: React.FC = () => {
  const { courseId, subCourseIndex } = useParams<{
    courseId: string;
    subCourseIndex: string;
  }>();

  const course = courseDetailsData[courseId as keyof typeof courseDetailsData];
  const subCourseIdx = Number(subCourseIndex) || 0;
  const subCourse = course?.subCourses[subCourseIdx];
  const price = course?.prices[subCourseIdx];

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Handle invalid course selection
  if (!course || !subCourse) {
    return (
      <section className="py-20 min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="text-center bg-white shadow-lg p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-red-600">Payment Error</h2>
          <p className="text-gray-600 mt-2">
            Invalid course or sub-course selected.
          </p>
          <Link
            to="/courses"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Back to Courses
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="bg-white shadow-lg rounded-xl p-8 max-w-lg text-center"
      >
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Payment for {course.title} - {subCourse}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Complete your payment for {subCourse} at {price}.
        </p>

        <div className="bg-blue-50 rounded-xl shadow-md p-6">
          <p className="text-2xl font-bold text-blue-500 mb-6">{price}</p>
          <button
            onClick={() => alert("Payment processing not implemented yet!")}
            className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Pay Now
          </button>
        </div>

        <Link
          to={`/courses/${courseId}`}
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          Back to Course Details
        </Link>
      </motion.div>
    </section>
  );
};

export default PaymentPage;

import React, { useState } from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import img1 from "../../assets/A.webp";
import img2 from "../../assets/C.webp";
import img3 from "../../assets/D.webp";
import img4 from "../../assets/E.webp";

interface Course {
  id: string;
  title: string;
  shortDescription: string;
  totalPrice: string;
  category: string;
  rating: number;
  totalTime: string;
  studentsEnrolled: number;
  image: string;
}

const coursesData: Course[] = [
  {
    id: "ican",
    title: "ICAN Certification",
    shortDescription: "Become a certified chartered accountant with ICAN.",
    totalPrice: "₦150,000",
    category: "Accounting",
    rating: 4.8,
    totalTime: "60 hours",
    studentsEnrolled: 1200,
    image: img1,
  },
  {
    id: "bsc",
    title: "BSC Certification",
    shortDescription: "Foundational training for accounting technicians.",
    totalPrice: "₦80,000",
    category: "Accounting",
    rating: 4.5,
    totalTime: "45 hours",
    studentsEnrolled: 800,
    image: img2,
  },
  {
    id: "mba",
    title: "MBA Certification",
    shortDescription:
      "Join the Association of National Accountants of Nigeria.",
    totalPrice: "₦120,000",
    category: "Accounting",
    rating: 4.7,
    totalTime: "50 hours",
    studentsEnrolled: 950,
    image: img3,
  },
  {
    id: "dba",
    title: "DBA Certification",
    shortDescription:
      "Excel in banking with the Chartered Institute of Bankers.",
    totalPrice: "₦100,000",
    category: "Banking",
    rating: 4.6,
    totalTime: "55 hours",
    studentsEnrolled: 1100,
    image: img4,
  },
];

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const coursesPerPage = 4;

  const filteredCourses =
    selectedCategory === "All"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  const categories = ["All", "Accounting", "Banking"];

  return (
    <section className="pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-3">
            Our Professional Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Explore our certification programs to advance your career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {paginatedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-blue-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {course.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.floor(course.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-gray-600 text-sm">
                    ({course.rating})
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Total Time: {course.totalTime}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Enrolled: {course.studentsEnrolled} students
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-500">
                    {course.totalPrice}
                  </span>
                  <Link
                    to={`/courses/${course.id}`}
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-blue-500 text-white text-lg shadow-md disabled:opacity-50 hover:bg-blue-600 transition-all duration-300"
            >
              <FaArrowLeft />
            </button>
            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-blue-500 text-white text-lg shadow-md disabled:opacity-50 hover:bg-blue-600 transition-all duration-300"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCertificate,
  FaBars,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";

// TypeScript interfaces
interface Course {
  id: string;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  progress: number; // 0-100
  enrolled: boolean;
  completed: boolean;
  videoUrl: string;
  certificateUrl?: string;
}

// Sample course data
const courses: Course[] = [
  {
    id: "ican-ats",
    title: "ICAN ATS",
    description: "Foundational accounting skills for technicians.",
    lessons: 15,
    duration: "3 months",
    progress: 75,
    enrolled: true,
    completed: false,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video
  },
  {
    id: "bsc-accounting",
    title: "BSC in Accounting",
    description: "Comprehensive degree-level accounting education.",
    lessons: 40,
    duration: "3 years",
    progress: 0,
    enrolled: false,
    completed: false,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    id: "accounting-software",
    title: "Accounting Software Mastery",
    description: "Learn QuickBooks, Sage, and more.",
    lessons: 10,
    duration: "2 months",
    progress: 100,
    enrolled: true,
    completed: true,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    certificateUrl: "/certificates/accounting-software.pdf",
  },
];

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { x: "-100%", transition: { duration: 0.3, ease: "easeIn" } },
};

const UserDashboard: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(
    courses[0]
  );
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>(courses);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleEnroll = (courseId: string) => {
    setEnrolledCourses((prev) =>
      prev.map((course) =>
        course.id === courseId
          ? { ...course, enrolled: true, progress: 0 }
          : course
      )
    );
    setSelectedCourse(enrolledCourses.find((c) => c.id === courseId) || null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar (Mobile Toggle + Desktop Fixed) */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed lg:static top-0 left-0 w-64 h-full bg-blue-900 text-white p-6 z-50 lg:z-0 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">My Courses</h2>
              <button onClick={toggleSidebar} className="lg:hidden text-white">
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="space-y-4">
              {enrolledCourses.map((course) => (
                <li
                  key={course.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                    selectedCourse?.id === course.id
                      ? "bg-blue-700"
                      : "hover:bg-blue-800"
                  }`}
                  onClick={() => {
                    setSelectedCourse(course);
                    setSidebarOpen(false);
                  }}
                >
                  <span className="font-medium">{course.title}</span>
                  <div className="text-sm text-blue-200">
                    {course.progress}% Complete
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="lg:hidden text-blue-900">
              <FaBars size={24} />
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
              Welcome to Your Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <FaUserCircle size={28} className="text-blue-600" />
            <span className="text-gray-700 font-medium">John Doe</span>
          </div>
        </div>

        <motion.section
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">
            Browse Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {course.description}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {course.lessons} Lessons • {course.duration}
                </p>
                {course.enrolled ? (
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full bg-blue-600 text-white font-medium py-2 rounded-full hover:bg-blue-700 transition-all duration-200"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={() => handleEnroll(course.id)}
                    className="w-full bg-blue-500 text-white font-medium py-2 rounded-full hover:bg-blue-600 transition-all duration-200"
                  >
                    Enroll Now
                  </button>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {selectedCourse && (
          <motion.section
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">
              {selectedCourse.title}
            </h2>
            <div className="bg-white rounded-xl shadow-md p-4">
              {/* Video Playback */}
              <div className="relative w-full h-0 pb-[56.25%] mb-4">
                <iframe
                  src={selectedCourse.videoUrl}
                  title={selectedCourse.title}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Progress Tracking */}
              <div className="mb-4">
                <p className="text-gray-700 font-medium mb-2">
                  Progress: {selectedCourse.progress}%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${selectedCourse.progress}%` }}
                  />
                </div>
              </div>
              {/* Completion Certificate */}
              {selectedCourse.completed && selectedCourse.certificateUrl && (
                <Link
                  to={selectedCourse.certificateUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                >
                  <FaCertificate /> Download Certificate
                </Link>
              )}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;

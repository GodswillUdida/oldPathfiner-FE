import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCertificate,
  FaBars,
  FaSignOutAlt,
  FaChartPie,
  FaBell,
  FaHome,
  FaCog,
} from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import logo from "/ACCOUNTANTS’ PATHFINDER LOGO.webp"; // Ensure valid path
import { SlBell } from "react-icons/sl";
import { RiSearchLine } from "react-icons/ri";
import img from "../../assets/dr president.webp";
import { FaBook } from "react-icons/fa6";
// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// TypeScript interfaces
interface Course {
  id: string;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  progress: number;
  enrolled: boolean;
  completed: boolean;
  videoUrl: string;
  certificateUrl?: string;
}

// Sample data
const courses: Course[] = [
  {
    id: "ican-ats",
    title: "ICAN ATS",
    description: "Foundational accounting skills.",
    lessons: 15,
    duration: "3 months",
    progress: 75,
    enrolled: true,
    completed: false,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "bsc-accounting",
    title: "BSC in Accounting",
    description: "Comprehensive degree-level education.",
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

// Pie chart data
const pieData = {
  labels: ["Completed", "In Progress", "Not Started"],
  datasets: [
    {
      data: [1, 1, 1], // Example: 1 completed, 1 in progress, 1 not started
      backgroundColor: ["#2563eb", "#93c5fd", "#d1d5db"],
      hoverBackgroundColor: ["#1d4ed8", "#60a5fa", "#9ca3af"],
    },
  ],
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const notifications = {
    overview: 3,
    courses: 1,
    notifications: 5,
    settings: 0,
    account: 2,
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (Fixed on Desktop, Collapsible on Mobile) */}
      <motion.div
        variants={sidebarOpen ? sidebarVariants : undefined}
        initial={sidebarOpen ? "hidden" : "visible"}
        animate={sidebarOpen ? "visible" : "visible"}
        exit={sidebarOpen ? "exit" : undefined}
        className={`fixed top-0 left-0 w-64 h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6 z-50 shadow-xl ${
          sidebarOpen ? "block" : "hidden lg:block"
        }`}
      >
        {/* Logo & Name */}
        <div className="flex items-center gap-3 mb-10">
          <img
            src={logo}
            alt="Pathfinder Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold font-poppins tracking-tight text-white">
            Accountant's Pathfinder
          </span>
        </div>

        {/* Navigation */}
        <ul className="space-y-3">
          {/* Overview */}
          <li>
            <Link to="/dashboard" onClick={() => toggleSidebar()}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-between w-full h-12 px-4 rounded-xl bg-blue-700/50 hover:bg-blue-700 text-white font-inter font-semibold text-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaHome className="text-lg" />
                  <span>Overview</span>
                </div>
                {notifications.overview > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications.overview}
                  </span>
                )}
              </motion.button>
            </Link>
          </li>

          {/* My Courses */}
          <li>
            <Link to="/dashboard/courses" onClick={() => toggleSidebar()}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-between w-full h-12 px-4 rounded-xl bg-blue-700/50 hover:bg-blue-700 text-white font-inter font-semibold text-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaBook className="text-lg" />
                  <span>My Courses</span>
                </div>
                {notifications.courses > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications.courses}
                  </span>
                )}
              </motion.button>
            </Link>
          </li>

          {/* Notifications */}
          <li>
            <Link to="/dashboard/notifications" onClick={() => toggleSidebar()}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-between w-full h-12 px-4 rounded-xl bg-blue-700/50 hover:bg-blue-700 text-white font-inter font-semibold text-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaBell className="text-lg" />
                  <span>Notifications</span>
                </div>
                {notifications.notifications > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications.notifications}
                  </span>
                )}
              </motion.button>
            </Link>
          </li>

          {/* Account Settings */}
          <li>
            <Link to="/dashboard/account-settings" onClick={() => toggleSidebar()}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-between w-full h-12 px-4 rounded-xl bg-blue-700/50 hover:bg-blue-700 text-white font-inter font-semibold text-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaCog className="text-lg" />
                  <span>Account Settings</span>
                </div>
                {notifications.account > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications.account}
                  </span>
                )}
              </motion.button>
            </Link>
          </li>

          {/* Settings */}
          {/* <li>
            <Link to="/dashboard/settings" onClick={() => toggleSidebar()}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-between w-full h-12 px-4 rounded-xl bg-blue-700/50 hover:bg-blue-700 text-white font-inter font-semibold text-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaCog className="text-lg" />
                  <span>Settings</span>
                </div>
                {notifications.settings > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications.settings}
                  </span>
                )}
              </motion.button>
            </Link>
          </li> */}

          {/* Logout */}
          <li>
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="mt-48 flex items-center justify-between w-full h-12 px-4 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-inter font-semibold text-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <FaSignOutAlt className="text-lg" />
                <span>Logout</span>
              </div>
            </motion.button>
          </li>
        </ul>
      </motion.div>

      {/* Main Content (Scrollable, Side by Side with Sidebar) */}
      <div className="flex-1 p-4 lg:p-8 overflow-y-auto h-screen lg:ml-64">
        {/* Mobile Toggle & Welcome Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-[90%] flex justify-between items-center gap-4 b-500">
            <button onClick={toggleSidebar} className="lg:hidden text-blue-900">
              <FaBars size={24} />
            </button>

            <div>
              <h1 className="text-2xl md:text-3xl font-poppins font-semibold text-blue-900">
                Welcome, John Doe 🦾
              </h1>
              <div className="font-serif text-blue-900">
                Lets learn something new today!
              </div>
            </div>

            <div className="w-72 border h-12 rounded-xl flex justify-between items-center">
              <input
                type="text"
                className="w-[85%] h-full rounded-s-xl bg-300 outline-none p-3 font-inter font-bold"
                placeholder="Search from courses..."
              />
              <RiSearchLine className="hover:cursor-pointer bg--300 w-[15%] h-full rounded-full" />
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-lg flex justify-center items-center border hover:cursor-pointer transition-all duration-300 ease-in-out">
                <SlBell className="text-[25px]" />
              </div>

              <div className="w-14 h-14 rounded-full border hover:cursor-pointer mr-1">
                <img
                  src={img}
                  alt="User Image"
                  loading="lazy"
                  className="w-full object-contain rounded-full"
                />
                {/* User Image */}
              </div>
            </div>
          </div>
        </div>

        {/* Notification Banner */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="bg-blue-100 text-blue-900 p-4 rounded-lg mb-6"
        >
          <p className="text-sm font-medium">
            New course available: "Data Analytics for Accountants" - Enroll now!
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p className="text-gray-600 text-sm font-poppins font-semibold">
              Courses Enrolled
            </p>
            <p className="text-2xl font-bold text-blue-900">2</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p className="text-gray-600 text-sm font-poppins font-semibold">
              Courses Completed
            </p>
            <p className="text-2xl font-bold text-blue-900">1</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p className="text-gray-600 text-sm font-poppins font-semibold">
              Lessons Watched
            </p>
            <p className="text-2xl font-bold text-blue-900">25</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p className="text-gray-600 text-sm font-poppins font-semibold">
              Certificates Earned
            </p>
            <p className="text-2xl font-bold text-blue-900">1</p>
          </div>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-xl shadow-md mb-8"
        >
          <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <FaChartPie /> Course Progress Overview
          </h2>
          <div className="max-w-xs mx-auto">
            <Pie
              data={pieData}
              options={{ responsive: true, maintainAspectRatio: true }}
            />
          </div>
        </motion.div>

        {/* Recommended Courses */}
        <motion.section
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">
            Recommended Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses
              .filter((course) => !course.enrolled)
              .map((course) => (
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
                  <button
                    onClick={() => handleEnroll(course.id)}
                    className="w-full bg-blue-500 text-white font-medium py-2 rounded-full hover:bg-blue-600 transition-all duration-200"
                  >
                    Enroll Now
                  </button>
                </div>
              ))}
          </div>
        </motion.section>

        {/* Selected Course (Video Playback & Progress) */}
        {selectedCourse && (
          <motion.section
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">
              {selectedCourse.title}
            </h2>
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="relative w-full h-0 pb-[56.25%] mb-4">
                <iframe
                  src={selectedCourse.videoUrl}
                  title={selectedCourse.title}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
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

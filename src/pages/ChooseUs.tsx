import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaClock,
  FaLaptop,
} from "react-icons/fa";
import Card from "../components/Card";
import { JSX } from "react";

interface Feature {
  heading: string;
  text: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    heading: "Expert Tutors",
    text: "Learn from certified professionals with real-world experience.",
    icon: <FaChalkboardTeacher className="text-5xl text-blue-300" />,
  },
  {
    heading: "High Exam Success Rate",
    text: "Our students achieve a 90%+ success rate in ICAN exams.",
    icon: <FaGraduationCap className="text-5xl text-green-300" />,
  },
  {
    heading: "Flexible Schedules",
    text: "Choose between evening, weekend, and online classes.",
    icon: <FaClock className="text-5xl text-yellow-300" />,
  },
  {
    heading: "Online & Offline Classes",
    text: "Attend classes from anywhere or visit our training center.",
    icon: <FaLaptop className="text-5xl text-purple-300" />,
  },
];

const ChooseUs: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl mix-blend-multiply"
          animate={{
            y: [0, -20, 10, 0],
            x: [0, 30, -20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 rounded-full blur-3xl mix-blend-multiply"
          animate={{
            y: [0, 20, -10, 0],
            x: [0, -30, 20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Choose Us
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <Card className="group bg-white/10 backdrop-blur-xl rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="mb-4 transform transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.heading}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.text}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUs;

// components/Pricing.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes, FaQuestionCircle } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: "$99",
      description: "Perfect for beginners starting their journey.",
      features: [
        "Access to core courses",
        "Email support",
        "1 practice exam",
        "Basic study materials",
      ],
    },
    {
      name: "Standard",
      price: "$199",
      description: "Ideal for serious learners aiming to excel.",
      features: [
        "All Basic features",
        "Access to advanced courses",
        "Priority email support",
        "3 practice exams",
        "Downloadable resources",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$299",
      description: "Comprehensive support for top-tier success.",
      features: [
        "All Standard features",
        "1-on-1 mentoring",
        "Unlimited practice exams",
        "Exclusive webinars",
        "Lifetime access",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              Pricing Plan
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Select the perfect plan to kickstart your accounting career with
            Pathfinder College.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between ${
                plan.highlighted
                  ? "border-2 border-cyan-500 scale-105 transform"
                  : "border border-gray-200"
              } hover:shadow-xl transition-all duration-300`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-cyan-600 mb-6">
                  {plan.price}
                  <span className="text-base text-gray-500 font-normal">
                    /year
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <FaCheck className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/enroll/${plan.name.toLowerCase()}`}
                className={`w-full py-3 px-4 text-center font-semibold rounded-full transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-cyan-500 text-white hover:bg-cyan-600 shadow-md"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Enroll Now
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 bg-white rounded-2xl shadow-lg p-6 overflow-x-auto"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Feature Comparison
          </h3>
          <table className="w-full text-left text-sm text-gray-700">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-2 font-medium">Feature</th>
                <th className="py-4 px-2 font-medium text-center">Basic</th>
                <th className="py-4 px-2 font-medium text-center text-cyan-600">
                  Standard
                </th>
                <th className="py-4 px-2 font-medium text-center">Premium</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Core Courses",
                "Email Support",
                "Practice Exams",
                "Advanced Courses",
                "Downloadable Resources",
                "1-on-1 Mentoring",
                "Exclusive Webinars",
                "Lifetime Access",
              ].map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <td className="py-3 px-2">{feature}</td>
                  <td className="py-3 px-2 text-center">
                    {[
                      "Core Courses",
                      "Email Support",
                      "Practice Exams",
                    ].includes(feature) ? (
                      <FaCheck className="text-green-500 mx-auto" />
                    ) : (
                      <FaTimes className="text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-2 text-center">
                    {[
                      "Core Courses",
                      "Email Support",
                      "Practice Exams",
                      "Advanced Courses",
                      "Downloadable Resources",
                    ].includes(feature) ? (
                      <FaCheck className="text-green-500 mx-auto" />
                    ) : (
                      <FaTimes className="text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-2 text-center">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <FaQuestionCircle className="text-cyan-500" />
            Need Help?
          </h3>
          <p className="text-gray-600 mb-6">
            Not sure which plan is right for you? We’re here to assist!
          </p>
          <Link
            to="/contact"
            className="inline-flex px-6 py-3 bg-transparent border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

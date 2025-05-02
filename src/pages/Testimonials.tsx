import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Replace with actual image imports or hosted URLs
import Student1 from "../assets/pexels-photo-10841466.webp";
import Student2 from "../assets/pexels-photo-6549348.webp";
import Student3 from "../assets/pexels-photo-6584748.webp";

// Define TypeScript interface
interface Testimonial {
  id: string;
  name: string;
  quote: string;
  image: string;
  rating: number;
}

// Testimonial data
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    quote:
      "The instructors were amazing, and the course structure helped me pass my ICAN exams on the first try!",
    image: Student1,
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    quote:
      "Flexible scheduling and expert guidance made learning accounting so much easier than I expected.",
    image: Student2,
    rating: 4,
  },
  {
    id: "3",
    name: "Aisha Patel",
    quote:
      "This program transformed my career. The practical approach is unmatched!",
    image: Student3,
    rating: 5,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-400 via-white to-blue-300 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
              Students Say
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Pathfinder College has empowered students to achieve
            their goals.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200"
    >
      {/* Quote Icon */}
      <div className="absolute top-4 left-4 text-blue-200 opacity-50">
        <FaQuoteLeft size={24} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Image */}
        <motion.img
          src={testimonial.image}
          alt={`Photo of ${testimonial.name}`}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200 group-hover:border-blue-400 transition-all duration-300"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
        />

        {/* Name */}
        <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">
          {testimonial.name}
        </h3>

        {/* Rating */}
        <motion.div
          className="flex justify-center mb-3"
          aria-label={`Rated ${testimonial.rating} out of 5 stars`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                i < testimonial.rating ? "text-blue-500" : "text-gray-300"
              }`}
            />
          ))}
        </motion.div>

        {/* Quote */}
        <blockquote className="text-gray-600 text-sm md:text-base italic leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute bottom-0 right-0 w-12 h-12 bg-blue-500/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Testimonials;

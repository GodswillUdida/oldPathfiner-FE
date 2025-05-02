// pages/SubCourseDetail.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaSearch } from "react-icons/fa";
import CourseDetailData from "../../data/CourseDetailData";
// import SubCourseDetail from "../../data/SubCourseDetail";

const courseDetailsData: CourseDetailData[] = [
  {
    id: "ican",
    title: "ICAN Certification",
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
  },
  {
    id: "ats",
    title: "ATS Certification",
    subCourses: [
      {
        title: "ATS 1",
        price: "₦25,000",
        description: "Basic accounting concepts.",
      },
      {
        title: "ATS 2",
        price: "₦25,000",
        description: "Intermediate techniques.",
      },
      {
        title: "ATS 3",
        price: "₦30,000",
        description: "Advanced technician skills.",
      },
    ],
  },
  {
    id: "anan",
    title: "ANAN Certification",
    subCourses: [
      {
        title: "ANAN Part 1",
        price: "₦40,000",
        description: "Intro to national accounting.",
      },
      {
        title: "ANAN Part 2",
        price: "₦40,000",
        description: "Intermediate practices.",
      },
      {
        title: "ANAN Part 3",
        price: "₦40,000",
        description: "Advanced standards.",
      },
    ],
  },
  {
    id: "cibn",
    title: "CIBN Certification",
    subCourses: [
      {
        title: "CIBN Foundation",
        price: "₦30,000",
        description: "Banking basics.",
      },
      {
        title: "CIBN Intermediate",
        price: "₦30,000",
        description: "Financial operations.",
      },
      {
        title: "CIBN Professional",
        price: "₦40,000",
        description: "Advanced banking.",
      },
    ],
  },
];

export interface SubCourseDetail {
  title: string;
  price: string;
  description: string;
  whatYoullLearn: string[];
  lastUpdated: string;
  languages: string[];
  createdBy: string;
  content: string;
  requirements: string[];
  fullDescription: string;
  featuredReview: {
    reviewer: string;
    rating: number;
    comment: string;
    date: string;
  };
  instructor: {
    name: string;
    title: string;
    bio: string;
    rating: number;
    reviews: number;
    students: number;
    courses: number;
  };
  relatedTopics: string[];
  studentsAlsoBought: { title: string; price: string; link: string }[];
  frequentlyBoughtTogether: { title: string; price: string; link: string }[];
}

const subCourseDetails: { [key: string]: SubCourseDetail } = {
  // ICAN Sub-Courses
  "ican-0": {
    title: "ICAN Foundation",
    price: "₦50,000",
    description: "Core accounting principles.",
    whatYoullLearn: [
      "Understand financial accounting basics",
      "Prepare balance sheets and income statements",
      "Introduction to taxation",
      "Basic auditing concepts",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Dr. Udida Emmanuel",
    content: "10 sections • 80 lectures • 12h 45m total length",
    requirements: ["No prior experience required", "Basic numeracy skills"],
    fullDescription:
      "ICAN Foundation introduces you to the essential principles of accounting, providing a solid base for your chartered accountant journey.",
    featuredReview: {
      reviewer: "Rajeev Acharya",
      rating: 5.0,
      comment: "Perfect start for ICAN aspirants!",
      date: "5 years ago",
    },
    instructor: {
      name: "Dr. Udida Emmanuel",
      title: "Accounting Professor | ICAN Fellow",
      bio: "With over 15 years in accounting education, Dr. Udida Emmanuel has trained thousands of students to excel in ICAN exams, combining practical insights with academic rigor.",
      rating: 4.8,
      reviews: 15234,
      students: 45000,
      courses: 12,
    },
    relatedTopics: ["Financial Accounting", "Bookkeeping", "Tax Basics"],
    studentsAlsoBought: [
      { title: "ATS 1", price: "₦25,000", link: "/courses/ats/0" },
      {
        title: "Basic Excel for Accountants",
        price: "₦20,000",
        link: "/courses/excel",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "ICAN Skills", price: "₦50,000", link: "/courses/ican/1" },
      { title: "ICAN Professional", price: "₦50,000", link: "/courses/ican/2" },
    ],
  },
  "ican-1": {
    title: "ICAN Skills",
    price: "₦50,000",
    description: "Intermediate accounting skills.",
    whatYoullLearn: [
      "Master cost accounting techniques",
      "Advanced financial reporting",
      "Tax computation and compliance",
      "Audit planning and execution",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Dr. Udida Emmanuel",
    content: "12 sections • 95 lectures • 15h 20m total length",
    requirements: [
      "ICAN Foundation or equivalent",
      "Basic accounting knowledge",
    ],
    fullDescription:
      "ICAN Skills builds on foundational knowledge, focusing on intermediate techniques to prepare you for complex accounting challenges.",
    featuredReview: {
      reviewer: "Aisha Mohammed",
      rating: 4.9,
      comment: "Really deepened my accounting expertise!",
      date: "4 years ago",
    },
    instructor: {
      name: "Dr. Udida Emmanuel",
      title: "Accounting Professor | ICAN Fellow",
      bio: "With over 15 years in accounting education, Dr. Udida Emmanuel has trained thousands of students to excel in ICAN exams, combining practical insights with academic rigor.",
      rating: 4.8,
      reviews: 15234,
      students: 45000,
      courses: 12,
    },
    relatedTopics: ["Cost Accounting", "Taxation", "Auditing"],
    studentsAlsoBought: [
      { title: "ATS 2", price: "₦25,000", link: "/courses/ats/1" },
      {
        title: "Intermediate Excel for Finance",
        price: "₦25,000",
        link: "/courses/excel-intermediate",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "ICAN Foundation", price: "₦50,000", link: "/courses/ican/0" },
      { title: "ICAN Professional", price: "₦50,000", link: "/courses/ican/2" },
    ],
  },
  "ican-2": {
    title: "ICAN Professional",
    price: "₦50,000",
    description: "Advanced exam prep.",
    whatYoullLearn: [
      "Strategic financial management",
      "Advanced auditing and assurance",
      "Complex tax strategies",
      "Case study analysis",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Dr. Udida Emmanuel",
    content: "15 sections • 120 lectures • 18h 30m total length",
    requirements: ["ICAN Skills or equivalent", "Strong accounting foundation"],
    fullDescription:
      "ICAN Professional prepares you for the final stage of ICAN certification with advanced topics and exam-focused training.",
    featuredReview: {
      reviewer: "Chinedu Okeke",
      rating: 5.0,
      comment: "Passed my ICAN exams thanks to this!",
      date: "3 years ago",
    },
    instructor: {
      name: "Dr. Udida Emmanuel",
      title: "Accounting Professor | ICAN Fellow",
      bio: "With over 15 years in accounting education, Dr. Udida Emmanuel has trained thousands of students to excel in ICAN exams, combining practical insights with academic rigor.",
      rating: 4.8,
      reviews: 15234,
      students: 45000,
      courses: 12,
    },
    relatedTopics: [
      "Strategic Management",
      "Advanced Taxation",
      "Audit Standards",
    ],
    studentsAlsoBought: [
      { title: "ANAN Part 3", price: "₦40,000", link: "/courses/anan/2" },
      {
        title: "Advanced Excel for Accountants",
        price: "₦30,000",
        link: "/courses/excel-advanced",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "ICAN Foundation", price: "₦50,000", link: "/courses/ican/0" },
      { title: "ICAN Skills", price: "₦50,000", link: "/courses/ican/1" },
    ],
  },

  // ATS Sub-Courses
  "ats-0": {
    title: "ATS 1",
    price: "₦25,000",
    description: "Basic accounting concepts.",
    whatYoullLearn: [
      "Understand fundamental accounting principles",
      "Prepare basic financial statements",
      "Introduction to bookkeeping",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Mrs. Amina Bello",
    content: "15 sections • 100 lectures • 15h 10m total length",
    requirements: ["No prior experience needed", "Basic math skills"],
    fullDescription:
      "ATS 1 introduces you to the essentials of accounting, laying a strong foundation for your career as an accounting technician.",
    featuredReview: {
      reviewer: "Rajeev Acharya",
      rating: 5.0,
      comment: "Excellent course for starting out in accounting!",
      date: "5 years ago",
    },
    instructor: {
      name: "Mrs. Amina Bello",
      title: "Accounting Technician Trainer | ATS Certified",
      bio: "Mrs. Amina Bello has over 10 years of experience training accounting technicians, helping students master foundational skills with practical, hands-on teaching.",
      rating: 4.7,
      reviews: 8723,
      students: 25000,
      courses: 8,
    },
    relatedTopics: ["Bookkeeping", "Financial Statements", "Accounting Basics"],
    studentsAlsoBought: [
      { title: "ICAN Foundation", price: "₦50,000", link: "/courses/ican/0" },
      {
        title: "Basic Excel for Accountants",
        price: "₦20,000",
        link: "/courses/excel",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "ATS 2", price: "₦25,000", link: "/courses/ats/1" },
      { title: "ATS 3", price: "₦30,000", link: "/courses/ats/2" },
    ],
  },
  "ats-1": {
    title: "ATS 2",
    price: "₦25,000",
    description: "Intermediate techniques.",
    whatYoullLearn: [
      "Intermediate accounting practices",
      "Tax computation basics",
      "Cost accounting fundamentals",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Mrs. Amina Bello",
    content: "12 sections • 90 lectures • 18h 20m total length",
    requirements: [
      "Completion of ATS 1 or equivalent",
      "Basic accounting knowledge",
    ],
    fullDescription:
      "ATS 2 builds on your foundational skills, introducing intermediate techniques to prepare you for more complex accounting tasks.",
    featuredReview: {
      reviewer: "Fatima Yusuf",
      rating: 4.8,
      comment: "Great progression from ATS 1!",
      date: "4 years ago",
    },
    instructor: {
      name: "Mrs. Amina Bello",
      title: "Accounting Technician Trainer | ATS Certified",
      bio: "Mrs. Amina Bello has over 10 years of experience training accounting technicians, helping students master foundational skills with practical, hands-on teaching.",
      rating: 4.7,
      reviews: 8723,
      students: 25000,
      courses: 8,
    },
    relatedTopics: ["Taxation", "Cost Accounting", "Financial Reporting"],
    studentsAlsoBought: [
      { title: "ICAN Skills", price: "₦50,000", link: "/courses/ican/1" },
      {
        title: "Intermediate Excel for Finance",
        price: "₦25,000",
        link: "/courses/excel-intermediate",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "ATS 1", price: "₦25,000", link: "/courses/ats/0" },
      { title: "ATS 3", price: "₦30,000", link: "/courses/ats/2" },
    ],
  },
  "ats-2": {
    title: "ATS 3",
    price: "₦30,000",
    description: "Advanced technician skills.",
    whatYoullLearn: [
      "Advanced financial reporting",
      "Tax compliance strategies",
      "Management accounting techniques",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Mrs. Amina Bello",
    content: "12 sections • 147 lectures • 22h 1m total length",
    requirements: [
      "Completion of ATS 2 or equivalent",
      "Intermediate accounting skills",
    ],
    fullDescription:
      "ATS 3 completes your technician training with advanced skills, preparing you for professional certification.",
    featuredReview: {
      reviewer: "Emeka Obi",
      rating: 5.0,
      comment: "A must for advancing your career!",
      date: "3 years ago",
    },
    instructor: {
      name: "Mrs. Amina Bello",
      title: "Accounting Technician Trainer | ATS Certified",
      bio: "Mrs. Amina Bello has over 10 years of experience training accounting technicians, helping students master foundational skills with practical, hands-on teaching.",
      rating: 4.7,
      reviews: 8723,
      students: 25000,
      courses: 8,
    },
    relatedTopics: [
      "Management Accounting",
      "Tax Compliance",
      "Financial Analysis",
    ],
    studentsAlsoBought: [
      { title: "ANAN Part 1", price: "₦40,000", link: "/courses/anan/0" },
      {
        title: "Advanced Excel for Accountants",
        price: "₦30,000",
        link: "/courses/excel-advanced",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "ATS 1", price: "₦25,000", link: "/courses/ats/0" },
      { title: "ATS 2", price: "₦25,000", link: "/courses/ats/1" },
    ],
  },

  // ANAN Sub-Courses
  "anan-0": {
    title: "ANAN Part 1",
    price: "₦40,000",
    description: "Intro to national accounting.",
    whatYoullLearn: [
      "Basics of public sector accounting",
      "Nigerian financial regulations",
      "Introduction to cost accounting",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Prof. Chukwu Eze",
    content: "10 sections • 85 lectures • 13h 15m total length",
    requirements: [
      "No prior experience needed",
      "Interest in national accounting",
    ],
    fullDescription:
      "ANAN Part 1 introduces you to the principles of national accounting, tailored to Nigerian standards and practices.",
    featuredReview: {
      reviewer: "Blessing Adebayo",
      rating: 4.9,
      comment: "Fantastic intro to ANAN!",
      date: "4 years ago",
    },
    instructor: {
      name: "Prof. Chukwu Eze",
      title: "Accounting Professor | ANAN Fellow",
      bio: "Prof. Chukwu Eze brings 12+ years of expertise in accounting and auditing, specializing in national standards and public sector training.",
      rating: 4.6,
      reviews: 10345,
      students: 32000,
      courses: 10,
    },
    relatedTopics: [
      "Public Sector Accounting",
      "Nigerian Taxation",
      "Cost Management",
    ],
    studentsAlsoBought: [
      { title: "ICAN Foundation", price: "₦50,000", link: "/courses/ican/0" },
      {
        title: "Basic Excel for Accountants",
        price: "₦20,000",
        link: "/courses/excel",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "ANAN Part 2", price: "₦40,000", link: "/courses/anan/1" },
      { title: "ANAN Part 3", price: "₦40,000", link: "/courses/anan/2" },
    ],
  },
  "anan-1": {
    title: "ANAN Part 2",
    price: "₦40,000",
    description: "Intermediate practices.",
    whatYoullLearn: [
      "Intermediate financial management",
      "Taxation in Nigeria",
      "Cost accounting applications",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Prof. Chukwu Eze",
    content: "12 sections • 90 lectures • 16h 30m total length",
    requirements: ["ANAN Part 1 or equivalent", "Basic accounting knowledge"],
    fullDescription:
      "ANAN Part 2 deepens your understanding of national accounting practices with a focus on intermediate-level skills.",
    featuredReview: {
      reviewer: "Tolu Adeyemi",
      rating: 4.8,
      comment: "Very practical and well-structured!",
      date: "3 years ago",
    },
    instructor: {
      name: "Prof. Chukwu Eze",
      title: "Accounting Professor | ANAN Fellow",
      bio: "Prof. Chukwu Eze brings 12+ years of expertise in accounting and auditing, specializing in national standards and public sector training.",
      rating: 4.6,
      reviews: 10345,
      students: 32000,
      courses: 10,
    },
    relatedTopics: ["Financial Management", "Tax Policy", "Cost Analysis"],
    studentsAlsoBought: [
      { title: "ATS 2", price: "₦25,000", link: "/courses/ats/1" },
      {
        title: "Intermediate Excel for Finance",
        price: "₦25,000",
        link: "/courses/excel-intermediate",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "ANAN Part 1", price: "₦40,000", link: "/courses/anan/0" },
      { title: "ANAN Part 3", price: "₦40,000", link: "/courses/anan/2" },
    ],
  },
  "anan-2": {
    title: "ANAN Part 3",
    price: "₦40,000",
    description: "Advanced standards.",
    whatYoullLearn: [
      "Advanced public sector accounting",
      "Strategic financial management",
      "Complex tax planning",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Prof. Chukwu Eze",
    content: "14 sections • 110 lectures • 19h 45m total length",
    requirements: [
      "ANAN Part 2 or equivalent",
      "Intermediate accounting skills",
    ],
    fullDescription:
      "ANAN Part 3 completes your training with advanced topics, preparing you for ANAN certification.",
    featuredReview: {
      reviewer: "Ngozi Okonkwo",
      rating: 5.0,
      comment: "Top-notch preparation for ANAN!",
      date: "2 years ago",
    },
    instructor: {
      name: "Prof. Chukwu Eze",
      title: "Accounting Professor | ANAN Fellow",
      bio: "Prof. Chukwu Eze brings 12+ years of expertise in accounting and auditing, specializing in national standards and public sector training.",
      rating: 4.6,
      reviews: 10345,
      students: 32000,
      courses: 10,
    },
    relatedTopics: [
      "Strategic Accounting",
      "Advanced Taxation",
      "Public Finance",
    ],
    studentsAlsoBought: [
      { title: "ICAN Professional", price: "₦50,000", link: "/courses/ican/2" },
      {
        title: "Advanced Excel for Accountants",
        price: "₦30,000",
        link: "/courses/excel-advanced",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "ANAN Part 1", price: "₦40,000", link: "/courses/anan/0" },
      { title: "ANAN Part 2", price: "₦40,000", link: "/courses/anan/1" },
    ],
  },

  // CIBN Sub-Courses
  "cibn-0": {
    title: "CIBN Foundation",
    price: "₦30,000",
    description: "Banking basics.",
    whatYoullLearn: [
      "Introduction to banking operations",
      "Basics of financial markets",
      "Customer service in banking",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Mr. Tunde Adeyemi",
    content: "8 sections • 70 lectures • 10h 30m total length",
    requirements: ["No prior experience needed", "Interest in banking"],
    fullDescription:
      "CIBN Foundation introduces you to the essentials of banking, providing a solid start for your career in finance.",
    featuredReview: {
      reviewer: "Kemi Oladele",
      rating: 4.9,
      comment: "Great entry into banking!",
      date: "4 years ago",
    },
    instructor: {
      name: "Mr. Tunde Adeyemi",
      title: "Banking Expert | CIBN Certified",
      bio: "Mr. Tunde Adeyemi has 18+ years in banking and financial education, training over 50,000 students in banking operations and ethics.",
      rating: 4.7,
      reviews: 18765,
      students: 50000,
      courses: 15,
    },
    relatedTopics: [
      "Banking Operations",
      "Financial Markets",
      "Customer Service",
    ],
    studentsAlsoBought: [
      {
        title: "Basic Excel for Finance",
        price: "₦20,000",
        link: "/courses/excel",
      },
      {
        title: "Introduction to Risk Management",
        price: "₦25,000",
        link: "/courses/risk-intro",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "CIBN Intermediate", price: "₦30,000", link: "/courses/cibn/1" },
      { title: "CIBN Professional", price: "₦40,000", link: "/courses/cibn/2" },
    ],
  },
  "cibn-1": {
    title: "CIBN Intermediate",
    price: "₦30,000",
    description: "Financial operations.",
    whatYoullLearn: [
      "Intermediate banking operations",
      "Risk management basics",
      "Financial product analysis",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Mr. Tunde Adeyemi",
    content: "10 sections • 85 lectures • 14h 15m total length",
    requirements: ["CIBN Foundation or equivalent", "Basic banking knowledge"],
    fullDescription:
      "CIBN Intermediate builds on foundational banking skills, focusing on operational and financial management techniques.",
    featuredReview: {
      reviewer: "Sani Bello",
      rating: 4.8,
      comment: "Really practical banking lessons!",
      date: "3 years ago",
    },
    instructor: {
      name: "Mr. Tunde Adeyemi",
      title: "Banking Expert | CIBN Certified",
      bio: "Mr. Tunde Adeyemi has 18+ years in banking and financial education, training over 50,000 students in banking operations and ethics.",
      rating: 4.7,
      reviews: 18765,
      students: 50000,
      courses: 15,
    },
    relatedTopics: [
      "Risk Management",
      "Financial Products",
      "Banking Operations",
    ],
    studentsAlsoBought: [
      { title: "ATS 2", price: "₦25,000", link: "/courses/ats/1" },
      {
        title: "Intermediate Excel for Finance",
        price: "₦25,000",
        link: "/courses/excel-intermediate",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "CIBN Foundation", price: "₦30,000", link: "/courses/cibn/0" },
      { title: "CIBN Professional", price: "₦40,000", link: "/courses/cibn/2" },
    ],
  },
  "cibn-2": {
    title: "CIBN Professional",
    price: "₦40,000",
    description: "Advanced banking.",
    whatYoullLearn: [
      "Advanced risk management",
      "Strategic financial planning",
      "Ethics and compliance in banking",
    ],
    lastUpdated: "1/2025",
    languages: ["English", "English [Auto]", "Arabic [Auto]"],
    createdBy: "Mr. Tunde Adeyemi",
    content: "12 sections • 100 lectures • 17h 40m total length",
    requirements: [
      "CIBN Intermediate or equivalent",
      "Intermediate banking skills",
    ],
    fullDescription:
      "CIBN Professional prepares you for advanced roles in banking with strategic and ethical training.",
    featuredReview: {
      reviewer: "Funmi Adewale",
      rating: 5.0,
      comment: "Transformed my banking career!",
      date: "2 years ago",
    },
    instructor: {
      name: "Mr. Tunde Adeyemi",
      title: "Banking Expert | CIBN Certified",
      bio: "Mr. Tunde Adeyemi has 18+ years in banking and financial education, training over 50,000 students in banking operations and ethics.",
      rating: 4.7,
      reviews: 18765,
      students: 50000,
      courses: 15,
    },
    relatedTopics: ["Strategic Banking", "Ethics in Finance", "Risk Analysis"],
    studentsAlsoBought: [
      {
        title: "Advanced Excel for Accountants",
        price: "₦30,000",
        link: "/courses/excel-advanced",
      },
      {
        title: "Strategic Financial Management",
        price: "₦35,000",
        link: "/courses/strategic-finance",
      },
    ],
    frequentlyBoughtTogether: [
      { title: "CIBN Foundation", price: "₦30,000", link: "/courses/cibn/0" },
      { title: " Intermediate", price: "₦30,000", link: "/courses/cibn/1" },
    ],
  },
};

const SubCourseDetail: React.FC = () => {
  const { id, subCourseIndex } = useParams<{
    id: string;
    subCourseIndex: string;
  }>();
  const course = courseDetailsData.find((c) => c.id === id);
  const subCourseIdx = parseInt(subCourseIndex || "0", 10);
  const subCourseKey = `${id}-${subCourseIdx}`;
  const subCourse =
    subCourseDetails[subCourseKey as keyof typeof subCourseDetails];

  if (!course || !subCourse) {
    return (
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 text-center">
          <h2 className="text-3xl font-bold text-blue-600">
            Sub-Course Not Found
          </h2>
          <Link
            to={`/courses/${id}`}
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Back to Course
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
    <section className="pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
              {subCourse.title}
            </h1>
            <p className="text-lg text-gray-600">{subCourse.description}</p>
            <p className="text-2xl font-bold text-blue-500 mt-4">
              {subCourse.price}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {subCourse.lastUpdated} • Languages:{" "}
              {subCourse.languages.join(", ")}
            </p>
            <p className="text-sm text-gray-500">
              Created by: {subCourse.createdBy}
            </p>
          </motion.div>

          {/* What You'll Learn */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              What You'll Learn
            </h2>
            <ul className="space-y-2 text-gray-700">
              {subCourse.whatYoullLearn.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Course Content */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Course Content
            </h2>
            <p className="text-gray-700">{subCourse.content}</p>
          </motion.div>

          {/* Requirements */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Requirements
            </h2>
            <ul className="space-y-2 text-gray-700">
              {subCourse.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  {req}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Description
            </h2>
            <p className="text-gray-700">{subCourse.fullDescription}</p>
          </motion.div>

          {/* Explore Related Topics */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <FaSearch /> Explore Related Topics
            </h2>
            <div className="flex flex-wrap gap-3">
              {subCourse.relatedTopics.map((topic, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-all duration-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Students Also Bought */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Students Also Bought
            </h2>
            <div className="space-y-4">
              {subCourse.studentsAlsoBought.map((course, index) => (
                <Link
                  key={index}
                  to={course.link}
                  className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className="text-gray-800 font-medium">
                    {course.title}
                  </span>
                  <span className="text-blue-500 font-bold">
                    {course.price}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Frequently Bought Together */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Frequently Bought Together
            </h2>
            <div className="space-y-4">
              {subCourse.frequentlyBoughtTogether.map((course, index) => (
                <Link
                  key={index}
                  to={course.link}
                  className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className="text-gray-800 font-medium">
                    {course.title}
                  </span>
                  <span className="text-blue-500 font-bold">
                    {course.price}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Featured Review */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Featured Review
            </h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-medium text-gray-800">
                {subCourse.featuredReview.reviewer}
              </span>
              <div className="flex gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < subCourse.featuredReview.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              {subCourse.featuredReview.comment}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {subCourse.featuredReview.date}
            </p>
          </motion.div>

          {/* Instructor */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Instructor
            </h2>
            <p className="text-lg font-medium text-gray-800">
              {subCourse.instructor.name}
            </p>
            <p className="text-gray-600 text-sm">
              {subCourse.instructor.title}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-blue-500 font-bold">
                {subCourse.instructor.rating}
              </span>
              <FaStar className="text-yellow-400" />
              <span className="text-gray-600">
                ({subCourse.instructor.reviews} Reviews)
              </span>
            </div>
            <p className="text-gray-600 mt-1">
              {subCourse.instructor.students} Students •{" "}
              {subCourse.instructor.courses} Courses
            </p>
            <p className="text-gray-700 mt-4">{subCourse.instructor.bio}</p>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              to={`/pay/${id}/${subCourseIdx}`}
              className="inline-flex px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Pay Now - {subCourse.price}
            </Link>
            <Link
              to={`/courses/${id}`}
              className="ml-4 text-blue-500 hover:underline"
            >
              Back to {course.title}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubCourseDetail;

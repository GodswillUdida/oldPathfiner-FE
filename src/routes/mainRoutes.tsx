import { createBrowserRouter } from "react-router-dom";
import Courses from "../pages/courses/Courses";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import ContactUs from "../pages/ContactUs";
import HomePage from "../pages/HomePage";
import CourseDetail from "../pages/courses/CourseDetail";
import PaymentPage from "../pages/PaymentPage";
import SubCourseDetail from "../pages/courses/subCourseDetail";
// import AdminDashboard from "../components/AdminDashboard";
// import Dashboard from "../pages/Dashboard";
// import ProtectedRoute from "./ProtectedRoute";
import Programs from "../components/Program";
import Learning from "../pages/Elearning";
import UserDashboard from "../pages/dashboard/userDashboard";
// import DashboardSettings from "../pages/dashboard/DashboardSettings";
// import Logo from "../assets/logo.webp"
import VerifyEmail from "../pages/VerifyEmail";

const mainRoutes = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/courses", element: <Courses /> },
      { path: "/programs/:id", element: <CourseDetail /> },
      { path: "/courses/:id/:subCourseIndex", element: <SubCourseDetail /> },
      { path: "/pay/:courseId/:subCourseIndex", element: <PaymentPage /> },

      { path: "/about", element: <About /> },
      { path: "/e-learning", element: <Learning /> },
      { path: "/programs", element: <Programs /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/contact", element: <ContactUs /> },

      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

      {
        path: "/dashboard",
        element: (
          // <ProtectedRoute allowedRoles={["USER", "INSTRUCTOR", "ADMIN"]}>
          <UserDashboard />
          // </ProtectedRoute>
        ),
        children: [
          // { path: "", element: <DashboardOverview /> }, // Default route: /dashboard
          // { path: "/overview", element: <DashboardOverview /> },
          // { path: "/account-settings", element: <DashboardSettings /> },
          // Add more dashboard subroutes as needed
        ],
      },

      // {
      //   path: "/admin/dashboard",
      //   element: (
      //     <ProtectedRoute allowedRoles={["ADMIN"]}>
      //       <AdminDashboard />
      //     </ProtectedRoute>
      //   ),
      // },
      { path: "/verify-email", element: <VerifyEmail /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default mainRoutes;

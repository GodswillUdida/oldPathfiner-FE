import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";

// Schema validation using Zod
const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterFormInputs = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  // ✅ Google Sign-In Handler
  const handleGoogleSuccess = async (response: CredentialResponse) => {
    try {
      const { credential } = response;
      if (!credential) {
        toast.error("Google authentication failed!");
        return;
      }

      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/google-login`,
        { token: credential },
        { withCredentials: true }
      );

      toast.success("Registration successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Login Error:", error);
      toast.error("Google login failed. Try again.");
    }
  };

  const handleGoogleFailure = () => {
    toast.error("Google authentication was unsuccessful!");
  };

  // ✅ Handle Form Submission
  const onSubmit = async (formData: RegisterFormInputs) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Registration successful", response.data)
      toast.success(
        "Registration successful! Check your email for a verification code."
      );
      navigate(`/verify-email?email=${encodeURIComponent(formData.email)}`);
    } catch (error: any) {
      const errorMsg =
        error.response?.data?.message || "Signup failed. Try again.";
      toast.error(errorMsg);
      console.error("Signup Error:", errorMsg);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Join{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              Pathfinder
            </span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Create your account and start your accounting journey today!
          </p>
        </div>

        {/* Social Logins */}
        <div className="space-y-4">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300">
            <FaFacebook className="text-white text-xl" />
            Sign up with Facebook
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-600 transition-all duration-300">
            <FaXTwitter className="text-white text-xl" />
            Sign up with Twitter
          </button>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or register with email
            </span>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              {...register("name")}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 font-bold"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 font-bold"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:bg-gray-400"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Already Registered? */}
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Log in
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Register;

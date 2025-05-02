import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Validation schema
const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

type OTPFormInputs = z.infer<typeof otpSchema>;

const VerifyEmail: React.FC = () => {
  const navigate = useNavigate();
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const {
    // register,
    handleSubmit,
    // setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<OTPFormInputs>({
    resolver: zodResolver(otpSchema),
  });

  // Handle OTP submission
  const onSubmit = async (formData: OTPFormInputs) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/verify-email`,
        formData
        );
        
        console.log("Response: ", response)

      toast.success("Email verified successfully! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Invalid OTP. Try again.");
    }
  };

  // Handle Resend OTP
  const handleResendOTP = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/resend-otp`);
      toast.success("New OTP sent to your email!");
      setResendTimer(30);
      setIsResendDisabled(true);
    } catch (error: any) {
      console.error("Failed to resend OTP: ",error.message);
      toast.error("Failed to resend OTP. Try again later.");
    }
  };

  // Countdown for OTP resend
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isResendDisabled) {
      interval = setInterval(() => {
        setResendTimer((prev) => {
          if (prev === 1) {
            setIsResendDisabled(false);
            clearInterval(interval);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isResendDisabled]);

  // Handle OTP input navigation
  const otpValue = watch("otp") || "";
  useEffect(() => {
    otpValue.split("").forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  }, [otpValue]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md text-center border border-gray-600"
      >
        <h2 className="text-3xl font-bold text-white">Verify Your Email 🔐</h2>
        <p className="text-gray-400 mt-2">
          Enter the 6-digit code sent to your email.
        </p>

        {/* OTP Input Fields */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div className="flex justify-center gap-3">
            {/* {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-center text-xl bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none transition-all"
                {...register("otp")}
                ref={(el) => (inputRefs.current[index] = el!)}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const val = e.target.value.replace(/\D/g, "");
                  setValue(
                    "otp",
                    otpValue.substring(0, index) +
                      val +
                      otpValue.substring(index + 1)
                  );
                  if (val && index < 5) inputRefs.current[index + 1]?.focus();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otpValue[index] && index > 0) {
                    inputRefs.current[index - 1]?.focus();
                  }
                }}
              />
            ))} */}
          </div>
          {errors.otp && (
            <p className="text-red-500 text-sm">{errors.otp.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all disabled:bg-gray-400"
          >
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        {/* Resend OTP Section */}
        <div className="mt-4">
          <p className="text-gray-400">
            Didn’t receive an OTP?{" "}
            <button
              onClick={handleResendOTP}
              disabled={isResendDisabled}
              className="text-cyan-400 hover:underline font-medium"
            >
              {isResendDisabled ? `Resend in ${resendTimer}s` : "Resend Now"}
            </button>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default VerifyEmail;

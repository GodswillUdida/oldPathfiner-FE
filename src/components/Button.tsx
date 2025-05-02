import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
}

export const Button = ({ children, className, variant = "default", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-6 py-4 text-sm rounded-xl font-poppins transition duration-300",
        variant === "default" &&
        "bg-gradient-to-tr from-blue-500 to-blue-700 text-white hover:brightness-110 shadow-md hover:shadow-lg",
        variant === "ghost" &&
        "bg-transparent border border-white text-white hover:bg-white hover:text-blue-700",
        className
      )}
    >
      {children}
    </button>
  );
};

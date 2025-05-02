import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => {
  return (
    <div className={`w-full ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;

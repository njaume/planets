import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  className = "",
  disabled
}: ButtonProps) => {
  const baseStyle = "px-4 py-2 rounded-lg font-bold";
  const variantStyle = variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700";

  return (
    <button disabled={disabled} onClick={onClick} className={`${baseStyle} ${variantStyle} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
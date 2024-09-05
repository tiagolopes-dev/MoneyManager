import React from "react";

type InputVariant = "text" | "password" | "select" | "date" | "number";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  options?: string[];
  
}

export function Input({ variant, options, ...props }: InputProps) {
  const baseStyles = "px-3 py-1 rounded border transition-colors duration-300 h-[35px]";
  const variantStyles = {
    text: "border-gray-300 focus:border-blue-500 focus:ring-blue-500 ",
    password: "border-gray-300 focus:border-red-500 focus:ring-red-500 ",
    select: "border-gray-300 focus:border-green-500 focus:ring-green-500 ",
    date: "border-gray-300 focus:border-green-500 focus:ring-green-500",
    number: "border-gray-300 focus:border-green-500 focus:ring-green-500",
  };

  if (variant === "select" && options) {
    return (
      <select
        className={`${baseStyles} ${variantStyles[variant]}`}
        {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={variant}
      className={`${baseStyles} ${variantStyles[variant]}`}
      {...props}
    />
  );
}


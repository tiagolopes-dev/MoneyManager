import React from "react";

type InputVariant = "text" | "password" | "select";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  options?: string[];
}

export function Input({ variant, options, ...props }: InputProps) {
  const baseStyles = "px-4 py-2 rounded border transition-colors duration-300";
  const variantStyles = {
    text: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
    password: "border-gray-300 focus:border-red-500 focus:ring-red-500",
    select: "border-gray-300 focus:border-green-500 focus:ring-green-500",
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


import React from "react";

type InputVariant = "text" | "password" | "select" | "date" | "number";

// BaseProps para definir o variant
interface BaseProps {
  variant: InputVariant;
}

// Propriedades específicas para o select
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant: "select";
  options: string[];
}

// Propriedades específicas para o input
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, BaseProps {
  variant: Exclude<InputVariant, "select">;
}

type CombinedProps = InputProps | SelectProps;

export function Input({ variant, ...props }: CombinedProps) {
  const baseStyles = "px-3 py-1 rounded border transition-colors duration-300 h-[35px]";
  const variantStyles = { 
    text: "border-gray-300 focus:border-blue-500 focus:ring-blue-500 ",
    password: "border-gray-300 focus:border-red-500 focus:ring-red-500 ",
    select: "border-gray-300 focus:border-green-500 focus:ring-green-500 ",
    date: "border-gray-300 focus:border-green-500 focus:ring-green-500",
    number: "border-gray-300 focus:border-green-500 focus:ring-green-500",
  };

  if (variant === "select") {
    const { options, ...selectProps } = props as SelectProps;
    return (
      <select
        className={`${baseStyles} ${variantStyles[variant]}`}
        {...selectProps}
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
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
}

import React from "react"

type ButtonVariant = 'Primary' | 'Secondary' | 'Danger'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant: ButtonVariant
}

export function Button( {variant, children, ...props}: ButtonProps){
  const baseStyles = 'flex justify-center items-center px-4 py-2 rounded transition-colors durantion-400 gap-2'
  const variantStyles = {
  Primary: 'bg-blue-700 text-white hover:bg-blue-500',
  Secondary: 'bg-slate-400 text-white hover:bg-slate-500',
  Danger: 'bg-red-800 text-black border border-gray-300 hover:bg-red-700	',
};

return (
  <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
    {children}
  </button>
);
}

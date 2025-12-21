import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'px-4 py-2 rounded-lg font-medium transition-colors duration-200',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
        secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
        success: 'bg-green-600 text-white hover:bg-green-700',
        ghost: 'hover:bg-gray-100 text-gray-700',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'px-3 py-1.5 text-sm',
        lg: 'px-6 py-3 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  fullWidth,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, size, fullWidth, className })}
      {...props}
    >
      {children}
    </button>
  );
};
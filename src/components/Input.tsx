import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
  inputClassName?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, inputClassName, ...rest }: InputProps, ref) => {
    return (
      <div className={twMerge("flex items-center rounded-lg", className)}>
        {icon}
        <input
          ref={ref}
          {...rest}
          className={twMerge(
            "w-full px-2 py-2 focus:outline-none !bg-transparent",
            inputClassName
          )}
        />
      </div>
    );
  }
);

export default Input;

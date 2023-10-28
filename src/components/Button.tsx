import React, {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";
import { getIconSrc } from "../utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconSrc?: string;
};

const Button: React.FC<ButtonProps> = ({
  iconSrc,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        "flex items-center gap-x-2 rounded-xl font-bold bg-primary-variant text-primary-variant-on hover:brightness-110 py-4 px-8 transition-all",
        className
      )}
      {...rest}
    >
      {iconSrc && (
        <img
          loading="lazy"
          srcSet={iconSrc}
          alt="button icon"
          className="aspect-square h-4"
        />
      )}
      {children}
    </button>
  );
};

export default Button;

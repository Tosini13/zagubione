import React, {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";
import { getIconSrc } from "../utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string | ReactElement;
  iconClassName?: string;
};

const Button: React.FC<ButtonProps> = ({
  icon,
  className,
  children,
  iconClassName,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center gap-x-2 rounded-xl font-bold bg-primary-variant text-primary-variant-on active:brightness-100 hover:brightness-110 py-4 px-8 transition-all",
        !children && "px-4",
        className
      )}
      {...rest}
    >
      {typeof icon === "string" ? (
        <img
          loading="lazy"
          srcSet={icon}
          alt="button icon"
          className={twMerge("aspect-square h-4", iconClassName)}
        />
      ) : React.isValidElement(icon) ? (
        icon
      ) : null}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;

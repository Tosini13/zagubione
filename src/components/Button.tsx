import React, { ButtonHTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

const buttonSize = {
  MEDIUM: "medium",
  LARGE: "large",
} as const;

type ButtonSizeType = (typeof buttonSize)[keyof typeof buttonSize];

const buttonVariant = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

type ButtonVariantType = (typeof buttonVariant)[keyof typeof buttonVariant];

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string | ReactElement;
  iconClassName?: string;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
};

const Button: React.FC<ButtonProps> = ({
  icon,
  className,
  children,
  iconClassName,
  variant = buttonVariant.PRIMARY,
  size = buttonSize.LARGE,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center gap-x-2 rounded-xl font-bold bg-primary-variant text-primary-variant-on active:brightness-100 hover:brightness-110 py-4 px-8 transition-all",
        !children && "px-4",
        className,
        variant === buttonVariant.SECONDARY &&
          "text-primary-variant bg-blue-100  active:brightness-100 hover:brightness-95",
        size === buttonSize.MEDIUM && "px-5 py-3 rounded-lg"
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

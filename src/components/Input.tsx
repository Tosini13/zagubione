import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import React, {
  InputHTMLAttributes,
  ReactElement,
  forwardRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: string | ReactElement;
  iconClassName?: string;
  inputClassName?: string;
};

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    { icon, className, inputClassName, iconClassName, ...rest }: BaseInputProps,
    ref
  ) => (
    <div className={twMerge("flex items-center rounded-lg", className)}>
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
      <input
        ref={ref}
        {...rest}
        className={twMerge(
          "w-full px-4 py-2 focus:outline-none !bg-transparent",
          inputClassName
        )}
      />
    </div>
  )
);

const InputPassword = forwardRef<HTMLInputElement, BaseInputProps>(
  (props: BaseInputProps, ref) => {
    const [visibility, setVisibility] = useState<"showed" | "hidden">("hidden");
    return (
      <BaseInput
        data-testid="input_password"
        inputClassName="order-1"
        icon={
          visibility === "showed" ? (
            <EyeSlashIcon
              className="aspect-square h-5 mx-4 order-2"
              onClick={() => setVisibility("hidden")}
            />
          ) : (
            <EyeIcon
              className="aspect-square h-5 mx-4 order-2"
              onClick={() => setVisibility("showed")}
            />
          )
        }
        {...props}
        type={visibility === "showed" ? "text" : "password"}
        ref={ref}
      />
    );
  }
);

const Input = forwardRef<HTMLInputElement, BaseInputProps>(
  (props: BaseInputProps, ref) => {
    if (props.type === "password")
      return <InputPassword ref={ref} {...props} />;
    return <BaseInput ref={ref} {...props} />;
  }
);

export default Input;

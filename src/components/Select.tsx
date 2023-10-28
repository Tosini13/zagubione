// ComboboxSelect.tsx
import React, { Fragment, ReactNode, useRef, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export type OptionType = {
  label: string;
  value: string;
  icon?: ReactNode;
};

interface ComboboxSelectProps<T> {
  options: T[];
  placeholder: string;
  name: string;
  className?: string;
  render?: (option: T) => React.ReactNode;
}

const ComboboxSelect: React.FC<ComboboxSelectProps<OptionType>> = ({
  options,
  placeholder,
  name,
  className,
  render,
}) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    options[0]
  );

  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <Combobox value={selectedOption} onChange={setSelectedOption}>
      {({ open }) => (
        <div className={twMerge("relative mt-1", className)}>
          <div className="flex items-center w-full cursor-default overflow-hidden">
            <Combobox.Button className="flex items-center">
              <ChevronDownIcon
                className={twMerge(
                  "h-5 w-5 text-secondary-label transition-transform",
                  open && "rotate-180"
                )}
                aria-hidden="true"
              />
            </Combobox.Button>
            <div className="flex items-center w-full cursor-default overflow-hidden relative">
              <div className="absolute top-1/2 left-2 -translate-y-1/2 h-6 aspect-square">
                {selectedOption?.icon}
              </div>
              <Combobox.Input
                className="w-full px-2 py-2 focus:outline-none pl-10"
                placeholder={placeholder}
                name={name}
                displayValue={(option: OptionType) => option.label}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
              {filteredOptions.map((option) => (
                <Combobox.Option
                  key={option.value}
                  className={({ active }) =>
                    `${active ? "bg-indigo-100" : ""} cursor-pointer p-2`
                  }
                  value={option}
                >
                  {render?.(option) ?? (
                    <div className="flex items-center gap-x-2">
                      {option.icon && (
                        <div className="h-5 aspect-square">{option.icon}</div>
                      )}
                      {option.label}
                    </div>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      )}
    </Combobox>
  );
};

export default ComboboxSelect;

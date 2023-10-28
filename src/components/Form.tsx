import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import { getIconSrc } from "../utils";
import Select, { OptionType } from "./Select";
import { useTyping } from "./useTyping";

const locationIcon = (
  <img
    loading="lazy"
    src={getIconSrc("location-outline.svg")}
    className="h-4 aspect-square"
    alt="location"
  />
);

const SEARCH_ICON_SRC = getIconSrc("search.svg");

const categories: OptionType[] = [
  {
    label: "all",
    value: "all",
    icon: (
      <img
        loading="lazy"
        src={getIconSrc("category-all.svg")}
        className="h-full aspect-square"
        alt="location"
      />
    ),
  },
  {
    label: "wallet",
    value: "wallet",
    icon: (
      <img
        loading="lazy"
        src={getIconSrc("location-outline.svg")}
        className="h-full aspect-square"
        alt="location"
      />
    ),
  },
  {
    label: "animal",
    value: "animal",
    icon: (
      <img
        loading="lazy"
        src={getIconSrc("search.svg")}
        className="h-full aspect-square"
        alt="location"
      />
    ),
  },
  {
    label: "keys",
    value: "keys",
    icon: (
      <img
        loading="lazy"
        src={getIconSrc("logo.svg")}
        className="h-full aspect-square"
        alt="location"
      />
    ),
  },
];

const Form: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("wszystko");
  const [items, setItems] = useState("");

  const { startTyping, stopTyping } = useTyping(
    ["Szczecin", "Poznań", "Warszawa", "Kraków"],
    ref,
    "placeholder"
  );

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      stopTyping();
    } else {
      startTyping();
    }

    setCity(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleItemsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <form
      className="flex justify-between items-center border border-secondary-label/20 rounded-lg p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between divide-x divide-primary grow [&>*]:px-8 [&>*]:w-full">
        <div>
          <Input
            ref={ref}
            icon={locationIcon}
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Miasto"
            className="my-auto"
          />
        </div>
        <div>
          <Select
            options={categories}
            placeholder="Choose category"
            name="category"
            className="my-auto"
          />
        </div>
        <div>
          <Input
            type="text"
            value={items}
            onChange={handleItemsChange}
            placeholder="np. portfel, klucze, pies, kot"
            icon={
              <img
                loading="lazy"
                src={SEARCH_ICON_SRC}
                className="h-4 aspect-square"
                alt="search"
              />
            }
            className="my-auto"
          />
        </div>
      </div>
      <button
        type="submit"
        className="grid place-content-center p-2 rounded-lg bg-primary hover:brightness-150 transition-all"
      >
        <img
          loading="lazy"
          src={SEARCH_ICON_SRC}
          className="h-5 aspect-square text-white grayscale invert"
          alt="search"
        />
      </button>
    </form>
  );
};

export default Form;

import { stuffType } from "./constants";

declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
export type Branded<T, B> = T & Brand<B>;

export type StuffType = (typeof stuffType)[keyof typeof stuffType]; // change to postType
export type StuffCategoryType = Branded<string, "stuff-category">;
export type LocationType = Branded<string, "location">;

export type Post = {
  id: Branded<string, "post-id">;
  title: string;
  dateTime: string;
  imgSrc: string[];
  category: StuffCategoryType;
  location: LocationType;
};

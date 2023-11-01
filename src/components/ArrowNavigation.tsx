import { useSwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

const style = {
  BUTTON: "cursor-pointer bg-transparent rounded-full border-2 border-black",
  ARROW:
    "text-black h-6 aspect-square -m-6 group-hover:text-primary-variant transition-colors",
};

type ArrowsNavigationPropsType = {
  firstSlide: boolean;
  lastSlide: boolean;
  activeIndex: number;
};

const ArrowsNavigation: React.FC<ArrowsNavigationPropsType> = ({
  firstSlide,
  lastSlide,
  activeIndex,
}) => {
  const swiper = useSwiper();

  console.log("swiper !log!", swiper);

  return (
    <div className="flex items-center justify-between max-w-fit mx-auto gap-x-8">
      <Button
        className="group cursor-pointer bg-transparent rounded-full border-2 border-black hover:border-primary-variant"
        icon={
          <ArrowLeftIcon className="text-black h-6 aspect-square -m-6 group-hover:text-primary-variant transition-colors" />
        }
        onClick={() => swiper.slidePrev()}
        aria-label="Show next slide"
      />
      <div className="flex justify-center items-cente gap-x-3">
        {swiper?.pagination.bullets.map((bullet: any, index: number) => {
          console.log("swiper.activeIndex !log!", swiper.activeIndex);

          return (
            <div
              className={twMerge(
                "rounded-full bg-black w-2 aspect-square transition-colors cursor-pointer hover:bg-primary",
                index === activeIndex && "bg-primary-variant"
              )}
              onClick={() => swiper.slideTo(index)}
            />
          );
        })}
      </div>
      <Button
        className="group cursor-pointer bg-transparent rounded-full border-2 border-black hover:border-primary-variant"
        icon={
          <ArrowRightIcon className="text-black h-6 aspect-square -m-6 group-hover:text-primary-variant transition-colors" />
        }
        onClick={() => swiper.slideNext()}
        aria-label="Show next slide"
      />
    </div>
  );
};

export default ArrowsNavigation;

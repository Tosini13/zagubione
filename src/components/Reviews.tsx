import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useState } from "react";
import ArrowsNavigation from "./ArrowNavigation";
import "swiper/css";

export type ReviewType = {
  name: string;
  content: string;
};

const SLIDER_BREAK_POINTS = {
  1: {
    slidesPerView: 1.2,
    centeredSlides: true,
  },
  380: {
    slidesPerView: 1.3,
    centeredSlides: true,
  },
  450: {
    slidesPerView: 1.5,
    centeredSlides: true,
  },
  640: {
    slidesPerView: 2.1,
    centeredSlides: false,
  },
  1024: {
    slidesPerView: 4.1,
    centeredSlides: false,
  },
};

const INITIAL_SLIDE = 0;

type ReviewsModulePropsType = {
  reviews: ReviewType[];
};

const Reviews: React.FC<ReviewsModulePropsType> = ({ reviews }) => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [activeIndex, setActiveSlide] = useState(0);

  return (
    <div data-testid="reviews" className="space-y-14">
      <h1 className="text-3xl font-bold text-center">
        <span className="text-primary-variant">Opinie</span> naszych uytkowników
      </h1>
      <div className="relative">
        <Swiper
          id="swiper-reviews"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          breakpoints={SLIDER_BREAK_POINTS}
          className="pb-[50px] items-stretch"
          initialSlide={INITIAL_SLIDE}
          onRealIndexChange={({ isBeginning, isEnd, activeIndex }: any) => {
            console.log("activeIndex !log!", activeIndex);
            setActiveSlide(activeIndex);
            setIsFirstSlide(isBeginning);
            setIsLastSlide(isEnd);
          }}
          navigation
          pagination
          scrollbar={{ draggable: true }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="!h-auto max-w-full p-6 border border-secondary-label/20 rounded-lg"
            >
              <div className="text-slate-800 text-sm font-semibold leading-6">
                {review.name}
              </div>
              <div className="text-slate-800 text-sm leading-6 mt-2.5">
                {review.content}
              </div>
            </SwiperSlide>
          ))}
          <div className="mt-10">
            <ArrowsNavigation
              activeIndex={activeIndex}
              firstSlide={isFirstSlide}
              lastSlide={isLastSlide}
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;

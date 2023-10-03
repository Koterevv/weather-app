import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { useSwiper } from "swiper/react";

export default function SliederButtonNext() {
  const swiper = useSwiper();


  return (
    <div>
      <button className="text-4xl" onClick={() => swiper.slideNext()}>
        <BsArrowRightCircle />
      </button>
    </div>
  );
}

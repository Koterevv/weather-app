import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useSwiper } from "swiper/react";

export default function SliederButtonLeft() {
  const swiper = useSwiper();


  return (
    <div>
      <button className="text-4xl"  onClick={() => swiper.slidePrev()}>
        <BsArrowLeftCircle />
      </button>
    </div>
  );
}

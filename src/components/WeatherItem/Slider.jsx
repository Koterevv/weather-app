import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TimeWeather from "./TimeWeather";
import { useResize } from "../../hooks/useResize";

export default function Slider({list}) {
  const width = useResize('#weatherItem');
  const [countSlides, setCountSlides] = useState(5)

  useEffect(() => {
    setCountSlides(Math.round(width/100))
  }, [width])
  console.log(width)

  return (
    <Swiper spaceBetween={0} slidesPerView={countSlides}>
      {list.map((item) => (
        <SwiperSlide key={item.dt}>
          <TimeWeather data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

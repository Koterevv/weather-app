import { Link } from "gatsby";
import React from "react";
import { useSelector } from "react-redux";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SliederButtonNext from "./UI/SliederButtonNext";
import SliederButtonLeft from "./UI/SliederButtonPrev";
import WeatherItem from "./WeatherItem";

export default function AddedCitiesList() {
  const cities = useSelector((state) => state.cities.cities);
  const isExist = !!cities.length;

  return (
    <section>
      {!isExist ? (
        <div className="container text-xl text-center">
          <h1 className="text-2xl">There are no cities here.</h1>
          <Link
            className="hover:border-b-2 hover:border-my-light-cyan pb-1 hover:text-my-light-cyan"
            to="/search"
          >
            Add cities
          </Link>
        </div>
      ) : (
        <div className="relative">
          <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
            {cities.map((city) => (
              <SwiperSlide key={city.name}>
                <WeatherItem city={city} />
              </SwiperSlide>
            ))}
            {cities.length !== 1 && (
              <>
                <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
                  <SliederButtonLeft />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
                  <SliederButtonNext />
                </div>
              </>
            )}
          </Swiper>
        </div>
      )}
    </section>
  );
}

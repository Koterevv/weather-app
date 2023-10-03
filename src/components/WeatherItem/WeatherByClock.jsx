import React from "react";
import Slider from "./Slider";

export default function WeatherByClock({ list }) {
  return (
    <article>
      <h2 className="text-center text-my-light-cyan text-2xl">
        Weather by clock
      </h2>
      <Slider list={list} />
    </article>
  );
}

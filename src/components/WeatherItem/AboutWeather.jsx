import React from "react";
import DataWeather from "./DataWeather";

export default function AboutWeather({weather}) {
  return (
    <article className="mb-5">
      <h2 className="text-center text-my-light-cyan text-2xl">About weather</h2>
      <div className="flex flex-wrap justify-between">
        <DataWeather title={"humidity"} data={`${weather.main.humidity}%`} />
        <DataWeather
          title={"visibility"}
          data={`${weather.visibility / 1000}km`}
        />
        <DataWeather
          title={"air pressure"}
          data={`${weather.main.pressure}hPa`}
        />
        <DataWeather title={"wind"} data={`${weather.wind.speed}mph`} />
      </div>
    </article>
  );
}

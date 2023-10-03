import React, { useEffect, useState } from "react";
import { getWeatherByClock, getWeatherByCoordinate } from "../api/getWeather";
import AboutWeather from "./WeatherItem/AboutWeather";
import Temperature from "./WeatherItem/Temperature";
import WeatherByClock from "./WeatherItem/WeatherByClock";

export default function WeatherItem({ city }) {
  const [weather, setWeather] = useState({});
  const [weatherByClock, setWeatherByClock] = useState({});

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      const dataWeatherNow = await getWeatherByCoordinate(lat, lon);
      const dataWeatherByClock = await getWeatherByClock(lat, lon);
      setWeather(dataWeatherNow);
      setWeatherByClock(dataWeatherByClock);
    };
    fetchWeather(city.lat, city.lon);
  }, []);

  return (
    <article id="weatherItem" className="container">
      {!Object.keys(weather).length ? (
        <h1 className="py-7">Loading...</h1>
      ) : (
        <>
          <div className="border border-solid border-my-dark-cyan rounded-xl p-3">
            <h1 className="p-6 text-3xl font-semibold text-my-light-cyan">
              {city.name}, {city.state}
            </h1>
            <Temperature
              temperature={(weather.main.temp - 273).toFixed(1)}
              weather={"Clear"}
            />
            <AboutWeather weather={weather}/>
            <WeatherByClock list={weatherByClock.list}/>
          </div>
        </>
      )}
    </article>
  );
}

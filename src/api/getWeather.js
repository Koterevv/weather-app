import axios from "axios";

export const getCity = async (city) => {
  const response = await axios({ 
    url: `http://api.openweathermap.org/geo/1.0/direct`, 
    method: "GET",
    params: {
      q: city,
      limit: 5,
      appid: process.env.API_KEY,
    }
  }
  );
  console.log(response.data)
  return response.data;
}

export const getWeatherByCoordinate = async (lat, lon) => {
  const response = await axios({
    url: `https://api.openweathermap.org/data/2.5/weather`,
    method: 'GET',
    params: {
      lat: lat,
      lon: lon,
      appid: process.env.API_KEY,
    }
  })

  return response.data;
}

export const getWeatherByClock = async (lat, lon) => {
  const response = await axios({
    url: `https://api.openweathermap.org/data/2.5/forecast`,
    method: 'GET',
    params: {
      lat: lat,
      lon: lon,
      appid: process.env.API_KEY,
    }
  })

  return response.data;
}

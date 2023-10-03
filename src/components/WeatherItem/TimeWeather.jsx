import React from "react";

const cropDate = (data) => {
  const res = data.split(' ');
  const arrTime = res[1].split(':');
  const time = arrTime[0] + ':' + arrTime[1];
  return time
}

export default function TimeWeather({ data }) {
  return (
    <div className="flex flex-col items-center p-3 py-4">
      <p className="mb-2">{cropDate(data.dt_txt)}</p>
      <p>{(data?.main?.temp - 273).toFixed(1)}</p>
    </div>
  );
}

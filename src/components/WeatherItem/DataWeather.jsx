import React from "react";

export default function DataWeather({title, data}) {
  return (
    <div className="flex flex-col items-center p-3">
      <h3 className="uppercase">{title}</h3>
      <span>{data}</span>
    </div>
  );
}

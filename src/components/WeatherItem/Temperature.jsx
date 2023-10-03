import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Temperature({temperature }) {
  const image = `../../images/Clear.svg` 
  return (
    <article className="flex items-center justify-center mb-5">
      <StaticImage
        className="mr-2"
        src="../../images/temperature.svg"
        alt={"temperature"}
        height={42}
      />
      <h2 className="text-3xl flex items-center">
        {temperature}
      </h2>
      <StaticImage src={`../../images/Clear.svg` } alt='Clear' height={42}/>
    </article>
  );
}

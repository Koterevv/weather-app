import React from "react";

export default function ButtonSearchedCity({children, onClick}) {
  return (
    <button
      className="px-7 uppercase hover:bg-gradient-to-l hover:from-my-black/50"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

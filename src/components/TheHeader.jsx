import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function TheHeader() {
  return (
    <header className="py-7">
      <nav className="container flex items-center uppercase justify-between">
        <Link className="flex items-center" to="/">
          <StaticImage
            className="mr-2"
            src="../images/logo-icon.svg"
            alt="logo icon"
            height={30}
            width={30}
          />
          Weather
        </Link>

        {/* <div className="absolute left-1/2 -translate-x-1/2 flex gap-6">
          <Link className="hover:text-my-light-cyan" to={"/"}>Home</Link>
          <Link className="hover:text-my-light-cyan" to={"/search"}>Search</Link>
          <Link className="hover:text-my-light-cyan" to={'/cities'}>Cities</Link>
        </div> */}

        <Link className="hover:text-my-light-cyan" to={"/"}>Home</Link>
        <Link className="hover:text-my-light-cyan" to={"/search"}>Search</Link>
        <Link className="hover:text-my-light-cyan" to={'/cities'}>Cities</Link>

        {/* <Link to="/profile">USER</Link> */}
      </nav>
    </header>
  );
}

import React from "react";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

export default function Layout({ children }) {
  return (
    <>
      <body className="min-h-screen flex flex-col bg-my-gray text-my-light-gray">
        <TheHeader />
        <main className="grow">{children}</main>
        <TheFooter />
      </body>
    </>
  );
}

import React, { useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SideNav } from "../components";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "../Hooks/useDarkMode";
import Link from "next/link";

const Home: React.FC = () => {
  const { toggleDarkMode, darkModeEnabled } = useDarkMode();

  const scrollRef = useRef(null);
  // const topPos = scrollRef?.current.getBoundingClientRect().top;

  // const onScroll = () => {
  //   const scrollPos = window.scrollY + window.innerHeight;

  //   if (topPos < scrollPos) {
  //     // enter animation code here
  //   }
  // };
  // useLayoutEffect(() => {
  //   window.addEventListener("scroll", () => {});

  //   return () => window.removeEventListener("scroll", () => {});
  // }, []);

  return (
    <>
      <div className={classNames("w-full min-h-screen", {})}>
        <div
          id="top-nav"
          className="py-5 mb-16 font-bold text-lg flex float-right w-3/4"
        >
          <div className="">Kurt</div>
          <div className="flex w-1/3 justify-between ml-96 pl-20">
            <div className="">Test</div>
            <Link href="/wordul">Wordul</Link>
            <DarkModeToggle
              onChange={toggleDarkMode}
              checked={darkModeEnabled}
              size={55}
            />
          </div>
        </div>
        <div className="container flex">
          <SideNav />
          <div className="container flex justify-center items-center">
            <div>
              <div className="text-7xl font-bold pr-40">
                This Site Is Made With
              </div>
              <div className="float-right">
                <div className="text-7xl font-bold">NextJs</div>
              </div>
            </div>
          </div>
        </div>
        <div ref={scrollRef}></div>
      </div>
    </>
  );
};

export default Home;

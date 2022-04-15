/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SideNav } from "../components";
import { Parallax } from "react-scroll-parallax";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "../Hooks/useDarkMode";
import Link from "next/link";
import classNames from "classnames";
import Introduction from "../components/Banner/PaginationItems/Introduction";
import Skills from "../components/Banner/PaginationItems/Skills";
import Image from "next/image";
import WordulButton from "../components/Banner/PaginationItems/WordulButton";

const Home: React.FC = () => {
  const { toggleDarkMode, darkModeEnabled } = useDarkMode();

  return (
    <div className="max-w-full overflow-hidden">
      <div className="mb-10">
        <div
          id="top-nav"
          className="pt-4 sm:py-4 mb-16 font-bold text-lg flex float-right sm:w-4/5"
        >
          <div className="pt-1">Kurt Urban</div>
          <div className="flex justify-between items-center w-56 sm:w-96 lg:w-1/3 lg:ml-96 pl-4 sm:pl-20">
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" passHref>
              <button
                className={classNames(
                  "font-bold px-2 py-1 rounded-md transition",
                  {
                    "bg-emerald-600 hover:bg-emerald-800": darkModeEnabled,
                    "bg-slate-300 hover:bg-slate-500": !darkModeEnabled,
                  }
                )}
              >
                Test
              </button>
            </Link>
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
            <div className="md:ml-32">
              <div className="font-bold text-2xl sm:text-7xl lg:pr-40">
                Designed With
              </div>
              <div
                className="float-right -mt-8"
                style={{ filter: darkModeEnabled ? "invert(0.9)" : "" }}
              >
                <Image
                  src="/Nextjs-logo.png"
                  alt="next js logo"
                  height={150}
                  width={250.33}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Parallax
        translateX={[-100, 35]}
        startScroll={100}
        endScroll={550}
        easing="easeInOutQuad"
        className="w-1/3"
      >
        <Introduction />
      </Parallax>
      <Parallax
        translateX={[300, 160]}
        startScroll={300}
        endScroll={750}
        easing="easeInOutQuad"
        className="w-1/3 mt-20"
      >
        <Skills />
      </Parallax>
      <Parallax
        translateX={[-100, 35]}
        startScroll={500}
        endScroll={950}
        easing="easeInOutQuad"
        className="w-1/3 mt-20"
      >
        <WordulButton />
      </Parallax>
      <Parallax
        translateX={[300, 160]}
        startScroll={700}
        endScroll={1150}
        easing="easeInOutQuad"
        className="w-1/3 mt-20"
      >
        <Link href="https://github.com/Kurt-Urban/Snake" passHref>
          <div className="transition hover:scale-105">
            <Image
              src="/snek.png"
              alt="snake game"
              width={1158}
              height={824}
              className="rounded-xl cursor-pointer"
            />
          </div>
        </Link>
      </Parallax>
      <div className="min-h-screen"></div>
    </div>
  );
};

export default Home;

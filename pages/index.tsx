/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HomeCards, SideNav } from "../components";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "../Hooks/useDarkMode";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";

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
            <Link href="/games">Games</Link>
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
      <HomeCards />
      <div className="min-h-screen"></div>
    </div>
  );
};

export default Home;

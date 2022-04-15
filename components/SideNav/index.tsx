import React, { FC } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import useDarkMode from "../../Hooks/useDarkMode";

const SideNav: FC = () => {
  const { darkModeEnabled } = useDarkMode();
  const textColor = darkModeEnabled ? "text-white" : "text-black";
  return (
    <>
      <div className="max-w-max ml-2 md:ml-10 mt-32">
        <div className="rows-4 ml-6 mb-36 z-30">
          <a
            href="https://www.linkedin.com/in/kurturban00/"
            className="flex group my-6 pr-7 transition hover:text-blue-600"
          >
            <div className="text-shadow flex items-center">
              <FaLinkedin className="ml-1 text-4xl" />
            </div>
            <div className="absolute mt-1 text-shadow font-bold opacity-0 transition group-hover:opacity-100 text-xl group-hover:translate-x-14">
              <span className={`transition hover:text-blue-600 ${textColor}`}>
                Kurturban00
              </span>
            </div>
          </a>
          <a
            href="https://github.com/kurt-urban"
            className="flex group my-6 pr-7 transition hover:text-gray-500 "
          >
            <div className="text-shadow flex items-center">
              <FaGithub className="ml-1 text-4xl" />
            </div>
            <div className="absolute mt-1 text-shadow font-bold opacity-0 transition group-hover:opacity-100 text-xl group-hover:translate-x-14 hover:text-gray-500">
              <span className={`transition hover:text-gray-500 ${textColor}`}>
                Kurt-Urban
              </span>
            </div>
          </a>
          <a
            href="mailto: kurturban00@gmail.com"
            className="flex group cursor-pointer my-6 pr-7 transition hover:text-red-500"
            onClick={() => {
              navigator.clipboard.writeText("kurturban00@gmail.com");
            }}
          >
            <div className="text-shadow flex items-center">
              <SiGmail className="ml-1 text-4xl" />
            </div>
            <div className="absolute mt-1 flex items-center text-xl text-shadow font-bold opacity-0 transition group-hover:opacity-100 group-hover:translate-x-14 hover:text-red-500">
              <span className={`transition hover:text-red-500 ${textColor}`}>
                kurturban00@gmail.com
              </span>
            </div>
          </a>
          <a
            href="/files/Resume.docx"
            target="_blank"
            rel="noopener noreferrer"
            download={`Urban-Resume-${new Date().getFullYear()}.docx`}
            className="flex group cursor-pointer my-6 pr-7 transition hover:text-lime-500"
          >
            <div className="text-shadow flex items-center text-xl">
              <FaFileDownload className="ml-1 text-4xl" />
            </div>
            <div className="absolute flex ml-1 mt-1 text-xl items-center text-shadow font-bold opacity-0 transition group-hover:opacity-100 group-hover:translate-x-14 ">
              <span className={`transition hover:text-lime-500 ${textColor}`}>
                Download Resume
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNav;

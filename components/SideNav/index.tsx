import React, { FC } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import useDarkMode from "../../Hooks/useDarkMode";
import tw from "tailwind-styled-components";

const Icon = tw.div`text-shadow flex items-center`;
const IconLink = tw.div`absolute mt-1 text-shadow font-bold opacity-0 transition group-hover:opacity-100 text-xl group-hover:translate-x-14`;

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
            <Icon>
              <FaLinkedin className="ml-1 text-4xl" />
            </Icon>
            <IconLink>
              <span className={`transition hover:text-blue-600 ${textColor}`}>
                Kurturban00
              </span>
            </IconLink>
          </a>
          <a
            href="https://github.com/kurt-urban"
            className="flex group my-6 pr-7 transition hover:text-gray-500 "
          >
            <Icon>
              <FaGithub className="ml-1 text-4xl" />
            </Icon>
            <IconLink>
              <span className={`transition hover:text-gray-500 ${textColor}`}>
                Kurt-Urban
              </span>
            </IconLink>
          </a>
          <a
            href="mailto: kurturban00@gmail.com"
            className="flex group cursor-pointer my-6 pr-7 transition hover:text-red-500"
            onClick={() => {
              navigator.clipboard.writeText("kurturban00@gmail.com");
            }}
          >
            <Icon>
              <SiGmail className="ml-1 text-4xl" />
            </Icon>
            <IconLink>
              <span className={`transition hover:text-red-500 ${textColor}`}>
                kurturban00@gmail.com
              </span>
            </IconLink>
          </a>
          <a
            href="/files/Resume.docx"
            target="_blank"
            rel="noopener noreferrer"
            download={`Urban-Resume-${new Date().getFullYear()}.docx`}
            className="flex group cursor-pointer my-6 pr-7 transition hover:text-lime-500"
          >
            <Icon className="text-xl">
              <FaFileDownload className="ml-1 text-4xl" />
            </Icon>
            <IconLink>
              <span className={`transition hover:text-lime-500 ${textColor}`}>
                Download Resume
              </span>
            </IconLink>
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNav;

import React, { FC, useState } from "react";
import Image from "next/image";
import ProfilePhoto from "../../public/profile.jpg";
import { FaGithub, FaLinkedin, FaDownload, FaCheck } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoDocumentTextSharp } from "react-icons/io5";

const ProfileInfo: FC = () => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative flex items-center w-1/5 top-6 left-6 transition-all md:top-16 md:left-20 lg:top-32 lg:left-40 xl:top-40 xl:left-48 2xl:top-60 2xl:left-72">
      <div className="flex justify-center">
        <div className="peer border-gray-300 shadow-2xl z-30 drop-shadow-2xl bg-black border-4 flex items-center rounded-full transition hover:border-white">
          <a
            href="https://www.linkedin.com/in/kurturban00/"
            style={{ fontSize: 0 }}
          >
            <Image
              id="profile-photo"
              height={150}
              width={150}
              src={ProfilePhoto}
              alt="moose in rocky mountains"
              objectFit="cover"
              className="rounded-full hover:cursor-pointer transition hover:opacity-60 z-40"
            />
          </a>
        </div>
        <div className="absolute bottom-0 w-75 font-bold text-2xl z-20 flex text-white items-center -translate-y-10 transition peer-hover:translate-y-8">
          Linked In <FaLinkedin className="ml-1 text-blue-500" />
        </div>
      </div>
      <div className="rows-4 ml-6 mb-4 z-30">
        <div className="text-3xl text-shadow">Kurt Urban</div>
        <a
          href="https://github.com/kurt-urban"
          className="flex group my-1 mt-2 transition hover:text-blue-600"
        >
          <div className="text-shadow flex items-center">
            Github <FaGithub className="ml-1" />
          </div>
          <div className="absolute text-shadow text-white opacity-0 transition group-hover:opacity-100  group-hover:translate-x-20">
            Kurt-Urban
          </div>
        </a>
        <a
          href="mailto: kurturban00@gmail.com"
          className="flex group cursor-pointer my-1 transition hover:text-red-500"
          onClick={() => {
            navigator.clipboard.writeText("kurturban00@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 10000);
          }}
        >
          <div className="text-shadow flex items-center">
            Email <SiGmail className="ml-1" />
          </div>
          <div className="absolute flex items-center text-shadow text-white opacity-0 transition group-hover:opacity-100  group-hover:translate-x-20">
            kurturban00@gmail.com{" "}
            {copied ? <FaCheck className="ml-2 text-green-300" /> : null}
          </div>
        </a>
        <a
          href="/files/Resume.docx"
          target="_blank"
          rel="noopener noreferrer"
          download={`Urban-Resume-${new Date().getFullYear()}.docx`}
          className="flex group cursor-pointer my-1 transition hover:text-gray-500"
        >
          <div className="text-shadow flex items-center ">
            Resume <IoDocumentTextSharp className="ml-1" />
          </div>
          <div className="absolute flex ml-1 items-center text-shadow text-white opacity-0 transition group-hover:opacity-100  group-hover:translate-x-20">
            Download <FaDownload className="ml-1" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProfileInfo;

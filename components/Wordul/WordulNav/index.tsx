/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import React, { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";

const WordulNav: FC = () => {
  return (
    <>
      <div className="container max-w-lg mx-auto flex justify-center items-center">
        <div className="border-b-2 border-wordul-dark w-full text-center text-4xl font-bold py-1 text-wordul-text">
          W O R D U L
        </div>
      </div>
      <Link href="/games">
        <FaArrowLeft className="-mt-10 ml-2 cursor-pointer text-wordul-dark" />
      </Link>
    </>
  );
};

export default WordulNav;

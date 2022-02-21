import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";

const WordulButton: FC = () => {
  const classStyling =
    "flex items-center justify-center text-4xl font-bold w-20 h-20 m-1";
  return (
    <>
      <div className="flex">
        {"WORDUL".split("")?.map((letter, i) => {
          const randomColor = Math.floor(Math.random() * 3);
          return (
            <Link href="/wordul" key={i + letter} passHref>
              <button
                className={classNames(classStyling, {
                  "bg-wordul-success": randomColor === 0,
                  "bg-wordul-warn": randomColor === 1,
                  "bg-wordul-dark": randomColor === 2,
                })}
              >
                {letter}
              </button>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default WordulButton;

import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";
import { IoShareSocial } from "react-icons/io5";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useGuess } from "../../../Hooks";

const WordulModal: FC<{ toggle: () => void; isOpen: boolean; win: string }> = ({
  toggle,
  isOpen,
  win,
}) => {
  const [copied, setCopied] = useState(false);

  const { shareResults, emojiString, correctWord, stats } = useGuess();

  useEffect(() => {
    if (emojiString) navigator.clipboard.writeText(emojiString);
  }, [emojiString]);

  useEffect(() => {
    setTimeout(() => setCopied(false), 50000);
  }, [copied]);

  return (
    <>
      <div
        className={classNames(
          "absolute container min-w-full text-center top-40 transitionease-in-out duration-300 text-wordul-text",
          { "opacity-0 -translate-y-24 invisible": !isOpen }
        )}
      >
        <div className="container bg-neutral-900 border border-neutral-800 rounded w-11/12 md:w-7/12 lg:w-1/3 2xl:l:w-1/4 mx-auto grid">
          <div className="flex w-full justify-end pr-4 pt-4">
            <FaTimes className="cursor-pointer" onClick={toggle} />
          </div>
          <div className="text-xl font-bold mb-3">
            {win === "win"
              ? "Congrats!"
              : `The word was: ${correctWord.toUpperCase()}`}
          </div>
          <div className="flex items-center justify-center border-b border-neutral-500 mx-10 ">
            <div className="mb-2">Statistics</div>
          </div>
          <div className="mt-4 mb-6">
            {stats.map((stat, i) => {
              const statArray = Object.keys(stat);

              return (
                <div key={i} className="mb-1 mx-10">
                  <div className="flex">
                    <div className="font-bold w-4">
                      {statArray[0].toUpperCase()}:
                    </div>
                    <div className="text-wordul-success ml-3 w-3 font-bold">
                      {stat[statArray[0]]}
                    </div>
                    <div
                      className="bg-wordul-success ml-3"
                      style={{ width: stat.percent * 10 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center mb-10">
            <div>
              <div className="font-bold">Next Wordul</div>
              <button
                className="bg-wordul-dark rounded-md px-3 py-1 mt-2 transition hover:opacity-70"
                onClick={() => window.location.reload()}
              >
                New Game
              </button>
            </div>
            <div className="h-16 border-r mx-6" />
            <div
              className="flex items-center justify-center bg-wordul-success w-max p-2 rounded cursor-pointer text-2xl px-5 transition hover:opacity-80"
              onClick={() => {
                !emojiString
                  ? shareResults()
                  : navigator.clipboard.writeText(emojiString);
                setCopied(true);
              }}
            >
              {!copied ? (
                <>
                  Share <IoShareSocial className="ml-2" />
                </>
              ) : (
                <div className="py-1" style={{ paddingInline: 34 }}>
                  <FaCheck />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordulModal;

import React, { FC, useEffect } from "react";
import classNames from "classnames";
import { IoShareSocial } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { useGuess } from "../../../Hooks";

const WordulModal: FC<{ toggle: () => void; isOpen: boolean; win: string }> = ({
  toggle,
  isOpen,
  win,
}) => {
  const { shareResults, emojiString, correctWord } = useGuess();

  useEffect(() => {
    if (emojiString) navigator.clipboard.writeText(emojiString);
  }, [emojiString]);

  return (
    <>
      <div
        className={classNames(
          "absolute container min-w-full text-center top-40 transitionease-in-out duration-300 text-wordul-text",
          { "opacity-0 -translate-y-24 invisible": !isOpen }
        )}
      >
        <div className="container bg-neutral-900 border border-neutral-800 rounded w-1/4 mx-auto grid">
          <div className="flex w-full justify-end pr-4 pt-4">
            <FaTimes className="cursor-pointer" onClick={toggle} />
          </div>
          <div className="text-xl font-bold mb-3">
            {win === "win" ? "Congrats!" : `${correctWord.toUpperCase()}`}
          </div>
          <div className="flex items-center justify-center border-b border-neutral-500 mx-10 mb-14">
            <div className="mb-2">Statistics</div>
          </div>
          <div className="flex items-center justify-center mb-10">
            <div className="font-bold">Next Wordle</div>
            <div className="h-16 border-r mx-6" />
            <div
              className="flex items-center justify-center bg-wordul-success w-max p-2 rounded cursor-pointer text-2xl px-5 transition hover:opacity-80"
              onClick={() =>
                !emojiString
                  ? shareResults()
                  : navigator.clipboard.writeText(emojiString)
              }
            >
              Share <IoShareSocial className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordulModal;

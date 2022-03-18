import classNames from "classnames";
import React, { FC, useEffect } from "react";
import { CgBackspace } from "react-icons/cg";
import { useGuess } from "../../../Hooks";
import getDefinition from "../../../utils/getDefinition";
import { KeyboardKeys } from "./KeyboardKeys";

const KeyboardRow: FC<{ row: string[] }> = ({ row }) => {
  const { currentGuess, addLetter, usedLetters } = useGuess();
  const keyboardClass = (letter: string) =>
    classNames("text-gray-200 h-14 w-11 rounded-md m-1 text-sm font-bold", {
      "bg-wordul-dark": usedLetters?.includes(letter),
      "bg-wordul-gray": !usedLetters?.includes(letter),
    });

  return (
    <div className="flex justify-center">
      {row.map((letter) => (
        <button
          key={letter}
          className={keyboardClass(letter)}
          onClick={() => (currentGuess.length < 5 ? addLetter(letter) : null)}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const Keyboard: FC = () => {
  const { currentGuess, removeLetter, addGuess } = useGuess();

  return (
    <>
      <div className="container max-w-screen mx-auto">
        <KeyboardRow row={KeyboardKeys.lineOne} />
        <KeyboardRow row={KeyboardKeys.lineTwo} />
        <div className="flex justify-center">
          <button
            className="bg-wordul-gray text-gray-200 h-14 px-3 rounded-md m-1 text-sm font-bold"
            onClick={async () => {
              if (currentGuess.length === 5)
                if (await getDefinition(currentGuess.join(""))) {
                  addGuess(currentGuess);
                }
            }}
          >
            Enter
          </button>
          <KeyboardRow row={KeyboardKeys.lineThree} />
          <button
            className="bg-wordul-gray text-gray-200 h-14 px-3 rounded-md m-1 text-2xl"
            onClick={removeLetter}
          >
            <CgBackspace />
          </button>
        </div>
      </div>
    </>
  );
};

export default Keyboard;

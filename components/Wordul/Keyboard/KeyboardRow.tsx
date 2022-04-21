import classNames from "classnames";
import React, { FC } from "react";
import { CgBackspace } from "react-icons/cg";
import { useGuess } from "../../../Hooks";
import getDefinition from "../../../utils/getDefinition";
import { KeyboardKeys } from "./KeyboardKeys";

const KeyboardRow: FC<{ row: string[] }> = ({ row }) => {
  const {
    currentGuess,
    usedLetters,
    addLetter,
    addGuess,
    invalidWordFunc,
    removeLetter,
  } = useGuess();

  const keyboardClass = (letter: string) =>
    classNames("text-gray-200 h-14 w-11 rounded-md m-1 text-sm font-bold", {
      "bg-wordul-dark": usedLetters?.includes(letter),
      "bg-wordul-gray": !usedLetters?.includes(letter),
    });

  return (
    <div className="flex justify-center">
      {row.includes("z") && (
        <button
          className="bg-wordul-gray text-gray-200 h-14 px-3 rounded-md m-1 text-sm font-bold"
          onClick={() => {
            if (currentGuess.length === 5)
              if (getDefinition(currentGuess.join(""))) {
                addGuess(currentGuess);
              } else {
                invalidWordFunc();
              }
          }}
        >
          Enter
        </button>
      )}
      {row.map((letter) => (
        <button
          key={letter}
          className={keyboardClass(letter)}
          onClick={() => (currentGuess.length < 5 ? addLetter(letter) : null)}
        >
          {letter.toUpperCase()}
        </button>
      ))}
      {row.includes("z") && (
        <button
          className="bg-wordul-gray text-gray-200 h-14 px-3 rounded-md m-1 text-2xl"
          onClick={removeLetter}
        >
          <CgBackspace />
        </button>
      )}
    </div>
  );
};

const Keyboard: FC = () => {
  const { currentGuess, removeLetter, addGuess, invalidWordFunc } = useGuess();

  return (
    <>
      <div className="container max-w-screen mx-auto">
        <KeyboardRow row={KeyboardKeys.lineOne} />
        <KeyboardRow row={KeyboardKeys.lineTwo} />

        <KeyboardRow row={KeyboardKeys.lineThree} />
      </div>
    </>
  );
};

export default Keyboard;

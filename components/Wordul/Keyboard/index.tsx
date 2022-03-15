import React, { FC } from "react";
import { CgBackspace } from "react-icons/cg";
import { useGuess } from "../../../Hooks";
import getDefinition from "../../../utils/getDefinition";
import { KeyboardKeys } from "./KeyboardKeys";

const Keyboard: FC = () => {
  const { currentGuess, addLetter, removeLetter, addGuess } = useGuess();

  const keyboardClass =
    "bg-wordul-gray text-gray-200 h-14 w-11 rounded-md m-1 text-sm font-bold";

  return (
    <>
      <div className="container max-w-screen mx-auto">
        <div className="flex justify-center">
          {KeyboardKeys.lineOne.map((letter) => (
            <button
              key={letter}
              className={keyboardClass}
              onClick={() =>
                currentGuess.length < 5 ? addLetter(letter) : null
              }
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          {KeyboardKeys.lineTwo.map((letter) => (
            <button
              key={letter}
              className={keyboardClass}
              onClick={() =>
                currentGuess.length < 5 ? addLetter(letter) : null
              }
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
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
          {KeyboardKeys.lineThree.map((letter) => (
            <button
              key={letter}
              className={keyboardClass}
              onClick={() =>
                currentGuess.length < 5 ? addLetter(letter) : null
              }
            >
              {letter.toUpperCase()}
            </button>
          ))}
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

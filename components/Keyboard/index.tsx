import React, { FC, useCallback, useEffect } from "react";
import { CgBackspace } from "react-icons/cg";
import { useGuess } from "../../Hooks";

const Keyboard: FC = () => {
  const { currentGuess, addLetter, removeLetter, addGuess } = useGuess();

  const lineOne = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const lineTwo = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const lineThree = ["z", "x", "c", "v", "b", "n", "m"];
  const keyList = [...lineOne, ...lineTwo, ...lineThree];

  const handleKeyInput = useCallback((e: any): void => {
    if (keyList.includes(e.key.toLowerCase()) && currentGuess.length < 5) {
      addLetter(e.key.toLowerCase());
    }
    if (e.key === "Backspace") {
      removeLetter();
    }
    if (e.key === "Enter") {
      addGuess(currentGuess);
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener("keydown", (e) => handleKeyInput(e));
    return () =>
      document.body.removeEventListener("keydown", (e) => handleKeyInput(e));
  }, []);

  const keyboardClass =
    "bg-wordul-gray text-gray-200 h-14 w-11 rounded-md m-1 text-sm font-bold";

  return (
    <>
      <div className="container max-w-screen mx-auto ">
        <div className="flex justify-center">
          {lineOne.map((letter) => (
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
          {lineTwo.map((letter) => (
            <button
              key={letter}
              className={keyboardClass}
              onClick={() =>
                currentGuess.length < 6 ? addLetter(letter) : null
              }
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-wordul-gray text-gray-200 h-14 px-3 rounded-md m-1 text-sm font-bold"
            onClick={() => {
              if (currentGuess.length === 5) addGuess(currentGuess);
            }}
          >
            Enter
          </button>
          {lineThree.map((letter) => (
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

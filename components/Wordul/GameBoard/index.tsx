import React, { FC, useEffect, useState } from "react";
import _ from "lodash";
import { useGuess } from "../../../Hooks";
import classnames from "classnames";
import WordulModal from "../WordulModal";

const GameboardRow: FC<{ row: number }> = ({ row }) => {
  const tilesArray = _.range(5);
  const { currentGuess, guesses } = useGuess();

  return (
    <>
      <div className="flex">
        {tilesArray.map((tile, i) => {
          return (
            <div
              key={tile}
              className={classnames(
                "border-2 border-wordul-tile h-16 w-16 mr-1 mt-1 font-bold text-3xl flex items-center justify-center transition-all duration-300",
                {
                  "border-0 bg-wordul-warn": guesses[row]?.[i]?.value === 2,
                  "border-0 bg-wordul-success": guesses[row]?.[i]?.value === 1,
                  "border-0 bg-wordul-dark": guesses[row]?.[i]?.value === 0,
                }
              )}
            >
              {row === guesses.length
                ? currentGuess[i]?.toUpperCase()
                : guesses[row]?.[i]?.letter.toUpperCase()}
            </div>
          );
        })}
      </div>
    </>
  );
};

const GameBoard: FC = () => {
  const rowsArray = _.range(6);
  const { win } = useGuess();
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((show) => !show);

  useEffect(() => {
    if (win === "win") setTimeout(() => setIsOpen(true), 500);
    if (win === "loss") setTimeout(() => setIsOpen(true), 500);
  }, [win]);
  return (
    <>
      <div className="container max-w-lg mx-auto flex justify-center items-center text-wordul-text">
        <div>
          {rowsArray.map((row) => {
            return <GameboardRow row={row} key={row} />;
          })}
        </div>
      </div>
      <WordulModal win={win} isOpen={isOpen} toggle={toggleModal} />
    </>
  );
};

export default GameBoard;
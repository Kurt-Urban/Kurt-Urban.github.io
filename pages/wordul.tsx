import React, { FC } from "react";
import { GameBoard, Keyboard, WordulNav } from "../components";
import { GuessProvider } from "../Context/GuessContext";

const WordGame: FC = () => {
  return (
    <GuessProvider>
      <div className="min-h-screen w-full bg-wordul-black">
        <div className="md:mb-28 mb-5">
          <WordulNav />
        </div>
        <div className="md:mb-32 mb-20">
          <GameBoard />
        </div>
        <Keyboard />
      </div>
    </GuessProvider>
  );
};

export default WordGame;

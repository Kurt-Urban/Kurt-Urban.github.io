import React, { FC } from "react";
import { GameBoard, Keyboard, WordulNav } from "../components";
import { GuessProvider } from "../Context/GuessContext";

const WordGame: FC = () => {
  return (
    <GuessProvider>
      <div className="min-h-screen w-full bg-wordul-black">
        <div className="mb-28">
          <WordulNav />
        </div>
        <div className="mb-32">
          <GameBoard />
        </div>
        <Keyboard />
      </div>
    </GuessProvider>
  );
};

export default WordGame;

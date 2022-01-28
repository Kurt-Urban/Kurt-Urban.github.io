import React, { FC } from "react";
import { GameBoard, Keyboard } from "../components";
import { GuessProvider } from "../Context/GuessContext";

const WordGame: FC = () => {
  return (
    <GuessProvider>
      <div className="min-h-screen w-full bg-wordul-black">
        <GameBoard />
        <Keyboard />
      </div>
    </GuessProvider>
  );
};

export default WordGame;

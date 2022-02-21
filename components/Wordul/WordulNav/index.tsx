import React, { FC, useState } from "react";
import WordulModal from "../WordulModal";

const WordulNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((show) => !show);

  return (
    <>
      <div
        onClick={toggleModal}
        className="border text-white cursor-pointer w-20"
      >
        toggle
      </div>
      <div className="container max-w-lg mx-auto flex justify-center items-center">
        <div className="border-b-2 border-wordul-dark w-full text-center text-4xl font-bold py-1 text-wordul-text">
          W O R D U L
        </div>
      </div>
      <WordulModal isOpen={isOpen} toggle={toggleModal} />
    </>
  );
};

export default WordulNav;

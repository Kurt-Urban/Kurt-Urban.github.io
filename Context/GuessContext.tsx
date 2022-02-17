import React, { createContext, FC, useReducer } from "react";

interface State {
  correctWord: string;
  currentGuess: string[];
  guesses: { letter: string; value: number }[][];
  addLetter: (letter: string) => void;
  removeLetter: () => void;
  addGuess: (guess: string[]) => void;
}

const GuessReducer = (
  state: State,
  action: { type: string; payload: any }
): State => {
  switch (action.type) {
    case "ADD_LETTER":
      return {
        ...state,
        currentGuess: [...state.currentGuess, action.payload],
      };
    case "REMOVE_LETTER":
      if (state.currentGuess.length > 0)
        return { ...state, currentGuess: [...state.currentGuess].slice(0, -1) };
      return state;
    case "ADD_GUESS":
      const correctWord = state.correctWord.split("");
      const submittedGuess = action.payload.map((letter: string, i: number) => {
        if (letter === correctWord[i]) return { letter, value: 1 };
        if (correctWord.includes(letter)) return { letter, value: 2 };
        return { letter, value: 0 };
      });
      return {
        ...state,
        currentGuess: [],
        guesses: [...state.guesses, submittedGuess],
      };
    default:
      return state;
  }
};

const initialState: State = {
  correctWord: "waste",
  currentGuess: [],
  guesses: [],
  addLetter: (letter: string) => {},
  removeLetter: () => {},
  addGuess: (guess: string[]) => {},
};

export const GuessContext = createContext(initialState);

export const GuessProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(GuessReducer, initialState);

  function addLetter(item: string) {
    dispatch({
      type: "ADD_LETTER",
      payload: item,
    });
  }
  function removeLetter() {
    dispatch({
      type: "REMOVE_LETTER",
      payload: "",
    });
  }

  function addGuess(item: string[]) {
    dispatch({
      type: "ADD_GUESS",
      payload: item,
    });
  }

  return (
    <GuessContext.Provider
      value={{
        correctWord: state.correctWord,
        currentGuess: state.currentGuess,
        guesses: state.guesses,
        addLetter,
        removeLetter,
        addGuess,
      }}
    >
      {children}
    </GuessContext.Provider>
  );
};

import React, { createContext, FC, useCallback, useReducer } from "react";
import { keyList } from "../components/Wordul/Keyboard/KeyboardKeys";
import getDefinition from "../utils/getDefinition";

interface State {
  correctWord: string;
  currentGuess: string[];
  guesses: { letter: string; value: number }[][];
  win: boolean;
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
      const correctWordArray = state.correctWord.split("");
      const submittedGuess = action.payload.map((letter: string, i: number) => {
        if (letter === correctWordArray[i]) return { letter, value: 1 };
        if (correctWordArray.includes(letter)) return { letter, value: 2 };
        return { letter, value: 0 };
      });

      const prevGuess = action.payload.join("");

      if (prevGuess === state.correctWord) {
        return { ...state, win: true };
      }

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
  win: false,
  addLetter: (letter: string) => {},
  removeLetter: () => {},
  addGuess: (guess: string[]) => {},
};

export const GuessContext = createContext(initialState);

export const GuessProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(GuessReducer, initialState);

  function addLetter(letter: string) {
    dispatch({
      type: "ADD_LETTER",
      payload: letter,
    });
  }
  function removeLetter() {
    dispatch({
      type: "REMOVE_LETTER",
      payload: "",
    });
  }

  function addGuess(guess: string[]) {
    dispatch({
      type: "ADD_GUESS",
      payload: guess,
    });
  }

  const handleKeyInput = useCallback(
    async (e: any): Promise<void> => {
      if (
        keyList.includes(e.key.toLowerCase()) &&
        state.currentGuess.length < 5
      ) {
        addLetter(e.key.toLowerCase());
      }
      if (e.key === "Backspace" && state.currentGuess.length > 0) {
        removeLetter();
      }
      if (e.key === "Enter" && state.currentGuess.length === 5) {
        if (await getDefinition(state.currentGuess.join(""))) {
          addGuess(state.currentGuess);
        }
      }
    },
    [state.currentGuess]
  );

  return (
    <GuessContext.Provider
      value={{
        correctWord: state.correctWord,
        currentGuess: state.currentGuess,
        guesses: state.guesses,
        win: state.win,
        addLetter,
        removeLetter,
        addGuess,
      }}
    >
      <div onKeyDown={handleKeyInput}>{children}</div>
    </GuessContext.Provider>
  );
};

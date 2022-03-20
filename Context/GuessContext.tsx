import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { keyList } from "../components/Wordul/Keyboard/KeyboardKeys";
import getDefinition from "../utils/getDefinition";
import pickWord from "../utils/pickWord";

interface State {
  correctWord: string;
  currentGuess: string[];
  guesses: { letter: string; value: number }[][];
  win: "win" | "loss" | "play";
  invalidWord: number;
  usedLetters: string[];
  emojiString: string;
  addLetter: (letter: string) => void;
  removeLetter: () => void;
  addGuess: (guess: string[]) => void;
  shareResults: () => void;
  invalidWordFunc: () => void;
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
      // TODO Create condition for duplicate letters in guess
      const correctWordArray = state.correctWord.split("");
      const submittedGuess = action.payload.map((letter: string, i: number) => {
        // 0 = Doesnt Contain Letter
        // 1 = Correct Letter / Position
        // 2 = Correct Letter / Bad Position
        if (letter === correctWordArray[i]) return { letter, value: 1 };
        if (correctWordArray.includes(letter)) return { letter, value: 2 };
        return { letter, value: 0 };
      });

      const usedLetters = submittedGuess
        .filter((index: any) => index.value === 0)
        .map((letter: any) => letter.letter);

      const prevGuess = action.payload.join("");

      if (prevGuess === state.correctWord) {
        return {
          ...state,
          win: "win",
          currentGuess: [],
          guesses: [...state.guesses, submittedGuess],
        };
      }
      // Last guess
      if (prevGuess !== state.correctWord && state.guesses.length === 5) {
        return {
          ...state,
          win: "loss",
          currentGuess: [],
          guesses: [...state.guesses, submittedGuess],
        };
      }

      return {
        ...state,
        currentGuess: [],
        guesses: [...state.guesses, submittedGuess],
        usedLetters: [...state.usedLetters, ...usedLetters],
      };
    case "INVALID_WORD":
      return { ...state, invalidWord: state.invalidWord + 1 };
    case "SHARE_RESULTS":
      const completedGuessList = state.guesses.map((guess: any) =>
        guess.map((g: any) => g.value)
      );
      const emojiString = completedGuessList
        .map((guess: any) => {
          return guess
            .map((g: number) => {
              switch (g) {
                case 0:
                  return "⬛";
                case 1:
                  return "🟩";
                case 2:
                  return "🟨";
              }
            })
            .join("");
        })
        .join("\n");

      return { ...state, emojiString };
    case "PICK_CORRECT_WORD":
      return { ...state, correctWord: action.payload };
    default:
      return state;
  }
};

const initialState: State = {
  correctWord: "null",
  currentGuess: [],
  guesses: [],
  win: "play",
  invalidWord: 0,
  usedLetters: [],
  emojiString: "",
  addLetter: (letter: string) => {},
  removeLetter: () => {},
  addGuess: (guess: string[]) => {},
  shareResults: () => {},
  invalidWordFunc: () => {},
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
  function invalidWordFunc() {
    dispatch({
      type: "INVALID_WORD",
      payload: "",
    });
  }
  function shareResults() {
    dispatch({
      type: "SHARE_RESULTS",
      payload: "",
    });
  }

  function pickCorrectWord() {
    dispatch({
      type: "PICK_CORRECT_WORD",
      payload: pickWord(),
    });
  }

  useEffect(() => {
    if (state.correctWord === "null") {
      pickCorrectWord();
    }
  }, [state.correctWord]);

  const handleKeyInput = useCallback(
    (e: any): void => {
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
        const prevGuesses = state.guesses.map((guess) =>
          guess.map((l) => l.letter).join("")
        );
        if (prevGuesses.includes(state.currentGuess.join(""))) {
          invalidWordFunc();
          return;
        }

        if (getDefinition(state.currentGuess.join(""))) {
          addGuess(state.currentGuess);
        } else {
          invalidWordFunc();
        }
      }
    },
    [state.currentGuess]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyInput);
    return () => {
      document.removeEventListener("keydown", handleKeyInput);
    };
  }, [handleKeyInput]);

  return (
    <GuessContext.Provider
      value={{
        correctWord: state.correctWord,
        currentGuess: state.currentGuess,
        guesses: state.guesses,
        win: state.win,
        invalidWord: state.invalidWord,
        usedLetters: state.usedLetters,
        emojiString: state.emojiString,
        addLetter,
        removeLetter,
        addGuess,
        shareResults,
        invalidWordFunc,
      }}
    >
      <div onKeyDown={handleKeyInput}>{children}</div>
    </GuessContext.Provider>
  );
};

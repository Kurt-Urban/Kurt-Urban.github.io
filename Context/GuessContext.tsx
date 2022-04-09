import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { keyList } from "../components/Wordul/Keyboard/KeyboardKeys";
import indexOf from "lodash.indexof";
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
  stats: { [key: string]: number }[];
  addLetter: (letter: string) => void;
  removeLetter: () => void;
  addGuess: (guess: string[]) => void;
  shareResults: () => void;
  invalidWordFunc: () => void;
}

const GuessReducer = (
  state: State,
  action: { type: string; payload?: any }
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

      const getDuplicateLetters = (word: string[]) =>
        word
          .slice()
          .sort()
          .filter((letter, i, self) => letter === self[i - 1]);

      let duplicateGuessLetters = getDuplicateLetters(action.payload);
      let duplicateCorrectLetters = getDuplicateLetters(correctWordArray);

      const submittedGuess = action.payload.map(
        (letter: string, i: number, self: string[]) => {
          // 0 = Doesnt Contain Letter
          // 1 = Correct Letter / Position
          // 2 = Correct Letter / Bad Position
          const letterEvaluator = (forceValue?: boolean) => {
            if (forceValue) {
              return { letter, value: 0, usedLetter: false };
            }
            if (letter === correctWordArray[i]) return { letter, value: 1 };
            if (correctWordArray.includes(letter)) return { letter, value: 2 };
            return { letter, value: 0 };
          };
          // Duplicate Letters in guess, no dupes in correct word
          if (
            duplicateGuessLetters.includes(letter) &&
            !duplicateCorrectLetters.includes(letter)
          ) {
            if (indexOf(self, letter) !== i) {
              return letterEvaluator(true);
            }
          }

          return letterEvaluator();
        }
      );

      const usedLetters = submittedGuess
        .filter((index: any) => index.value === 0 && index.usedLetter !== false)
        .map((letter: any) => letter.letter);

      const prevGuess = action.payload.join("");

      const generateStats = (guesses: any[]) => {
        let usedLetterArray: any[] = [];
        guesses.forEach((guess: any[]) => {
          guess.forEach((letter: any) => {
            usedLetterArray.push(letter.letter);
          });
        });
        let letterCountObject: any[] = [];
        usedLetterArray.sort().forEach((x) => {
          letterCountObject[x] = (letterCountObject[x] || 0) + 1;
        });
        return Object.keys(letterCountObject).map((key: string) => ({
          [key]: letterCountObject[key],
          percent: (letterCountObject[key] / (guesses.length * 5)) * 100,
        }));
      };
      console.log("test", generateStats([...state.guesses, submittedGuess]));
      if (prevGuess === state.correctWord) {
        return {
          ...state,
          win: "win",
          currentGuess: [],
          guesses: [...state.guesses, submittedGuess],
          stats: generateStats([...state.guesses, submittedGuess]),
        };
      }
      // Last guess
      if (prevGuess !== state.correctWord && state.guesses.length === 5) {
        return {
          ...state,
          win: "loss",
          currentGuess: [],
          guesses: [...state.guesses, submittedGuess],
          stats: generateStats([...state.guesses, submittedGuess]),
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
  stats: [],
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
    });
  }
  function shareResults() {
    dispatch({
      type: "SHARE_RESULTS",
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
      if (document.activeElement !== document.body) {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        window.focus();
        return;
      }
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
        stats: state.stats,
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

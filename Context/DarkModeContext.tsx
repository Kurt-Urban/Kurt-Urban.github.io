import React, { createContext, FC, useReducer } from "react";

interface State {
  toggleDarkMode: () => void;
  darkModeEnabled: boolean;
}

const DarkModeReducer = (
  state: State,
  action: { type: string; payload: any }
): State => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      if (!state.darkModeEnabled) {
        document.body.classList.remove("theme-light");
        document.body.classList.add("theme-dark");
      } else {
        document.body.classList.remove("theme-dark");
        document.body.classList.add("theme-light");
      }
      return {
        ...state,
        darkModeEnabled: !state.darkModeEnabled,
      };
    default:
      return state;
  }
};

const initialState: State = {
  toggleDarkMode: () => {},
  darkModeEnabled: false,
};

export const DarkModeContext = createContext(initialState);

export const DarkModeProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, initialState);

  function toggleDarkMode() {
    dispatch({
      type: "TOGGLE_DARK_MODE",
      payload: null,
    });
  }

  return (
    <DarkModeContext.Provider
      value={{
        toggleDarkMode,
        darkModeEnabled: state.darkModeEnabled,
      }}
    >
      <div className={state.darkModeEnabled ? "theme-dark" : "theme-light"}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

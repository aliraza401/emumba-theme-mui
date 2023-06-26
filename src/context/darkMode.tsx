import React, { createContext, useContext, useReducer } from "react";

// Define the state and action types
type State = {
  darkMode: boolean;
};

type Action = { type: "TOGGLE_DARK_MODE" };

// Define the reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

// Create the context
const DarkModeContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

// Create the DarkModeProvider component
const DarkModeProvider: React.FC<{ children: any }> = ({ children }) => {
  const initialState: State = {
    darkMode: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Create a custom hook for accessing the DarkModeContext
const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

// Export the DarkModeProvider and useDarkMode hook
export { DarkModeProvider, useDarkMode };

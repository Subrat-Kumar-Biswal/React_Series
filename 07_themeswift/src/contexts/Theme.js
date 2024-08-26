import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  // in context we use variable and object
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}

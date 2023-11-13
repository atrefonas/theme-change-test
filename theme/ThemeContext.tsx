// ThemeContext.js
import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  theme: 'light', // default value
  setTheme: (theme:string) => {}
});

export const useTheme = () => useContext(ThemeContext);

"use client";
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from "react";
import { ThemeContext } from './ThemeContext'; // Adjust the path as needed

const ThemeComponent = ({ children }:{children:JSX.Element}) => {

  const [theme, setThemeState] = useState('light'); // Default theme
  const cookies = useCookies();

  const setTheme = (theme:string) => {
    cookies.set('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

  }


  useEffect(() => {
    if (cookies.get('theme')) {
      return;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // User has set theme to dark in their browser
        setTheme('dark')
    }
    // Optional: Listen for changes in the preference
    const listener = (e:any) => {
        setTheme(e.matches ? 'dark' : 'light');
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);

    return () => {
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
    };
}, []);

return (
  <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>
);

};

export default ThemeComponent;

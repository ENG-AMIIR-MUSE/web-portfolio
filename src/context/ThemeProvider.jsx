import React, { createContext, useState } from "react";


export const ThemeContext = createContext('');
export default function ThemeProvider({ children }) {
  const [theme,setTheme]  = useState('dark')
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className={theme === "light" ? "light-theme light" : "dark-theme dark"}>
        <div className="bg-white text-gray-700 dark:text-white dark:bg-[#0F172A] ">
          {/* Your component content */}
          {/* <App/> */}
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

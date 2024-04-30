import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";
export default function Theme({children}) {
  const theme = useContext(ThemeContext);
console.log(theme)
  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)]'>
        {/* Your component content */}
        {/* <App/> */}
        {children}
      </div>
    </div>
  );
}

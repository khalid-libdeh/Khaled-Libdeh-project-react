import { createContext, useEffect, useState, useContext } from "react";

export const DarkModeContext = createContext()

const DarkModeProvider = ({ children }) => {
  const initialDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  return useContext(DarkModeContext)
}

export default DarkModeProvider
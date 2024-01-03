import { createContext, useState } from "react";
import { getFromLocalStorage, setLocalStorage } from "../Scripts/localStorage";

export const DarkModeContext = createContext()

const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(getFromLocalStorage("darkMode") || false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setLocalStorage("darkMode", darkMode)
        
        console.log(typeof(darkMode))
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider
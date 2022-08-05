import { useState, useContext, createContext } from "react";

const useTheme = () => {
    const [dark, setDark] = useState(true);
    
    return {
        dark,
        setDarkTheme: (isDarkStatus) => setDark(isDarkStatus)
    };
};

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({children}) => (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
);

export const useSetDark = () => useContext(ThemeContext).setDarkTheme;
export const useDark = () => useContext(ThemeContext).dark;
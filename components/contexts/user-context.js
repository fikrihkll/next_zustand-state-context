import { useState, useContext, createContext } from "react";

const useUser = () => {
    const [user, setUser] = useState("?");
    
    return {
        user,
        setUser: (newUser) => setUser(newUser)
    }
};

const UserContext = createContext(null);

export const UserContextProvider = ({children}) => (
    <UserContext.Provider value={useUser()}>{children}</UserContext.Provider>
);

export const useSetUser = () => useContext(UserContext).setUser;
export const useGetUser = () => useContext(UserContext).user;
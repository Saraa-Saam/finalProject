import { createContext, useState, useLayoutEffect } from "react";
import { setAuthToken } from "../../utils/axios";

export const userContext = createContext();

export default function UserContextProvider({ children }) {
    const [userToken, setUserToken] = useState(null);

    useLayoutEffect(() => {
        if (localStorage.getItem("userToken")) {
            const token = localStorage.getItem("userToken");
            setAuthToken(token);
            setUserToken(token);
        }
    }, [userToken]);

    return (
        <userContext.Provider value={{ userToken, setUserToken }}>
            {children}
        </userContext.Provider>
    );
}

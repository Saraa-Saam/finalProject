import { createContext, useState } from "react";

export const counterContext = createContext(0);

export default function CounterProvider({ children }) {
    const [counter, setCounter] = useState(0);
    function changeCounter(count) {
        setCounter(count);
    }
    return (
        <>
            <counterContext.Provider value={{ counter, changeCounter }}>
                {children}
            </counterContext.Provider>
        </>
    );
}

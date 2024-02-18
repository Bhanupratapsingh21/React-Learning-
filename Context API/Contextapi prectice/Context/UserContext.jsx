import React, { createContext, useState, useContext } from "react";

// Create the context
export const Usercontext = createContext();

// Create the provider component
export const Userprovider = ({ children }) => {
    const [data, setData] = useState("");

    return (
        <Usercontext.Provider value={{ data, setData }}>
            {children}
        </Usercontext.Provider>
    );
};

// Create the custom hook to consume the context
export const useUserContext = () => useContext(Usercontext);

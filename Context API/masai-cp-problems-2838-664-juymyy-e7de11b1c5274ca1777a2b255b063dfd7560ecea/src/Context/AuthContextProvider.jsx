import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setisAuth] = useState(false);
    
    return (
        <AuthContext.Provider value={{ isAuth, setisAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;

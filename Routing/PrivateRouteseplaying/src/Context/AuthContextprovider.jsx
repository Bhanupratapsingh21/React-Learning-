import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider ({children}){
    const [Auth ,setAuth] =useState(false)

return(
        <AuthContext.Provider value={{Auth , setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;
import React, { createContext, useContext, useState } from 'react'


export const AuthContext = createContext();

function AuthProvider({children}) {
 
    const localuser = localStorage.getItem("users");
    const [authuser, setauthuser] = useState(
        localuser? JSON.parse(localuser) : undefined
    )


      return (
        <AuthContext.Provider value={[authuser,setauthuser]}>{children}</AuthContext.Provider>
      )


  
}

export const useAuth= () => useContext(AuthContext);

export default AuthProvider

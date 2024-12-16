import React, { createContext, useContext, useState } from "react";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();


function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  
  };

  const value = {
  createUser,
  user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();


function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  
  };
  const loginUser = async (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
 




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    
        console.log("Currently logged in User:", currentUser);
        setUser(currentUser)
     setLoading(false)
     
    });

    // Cleanup function to unsubscribe from the listener

    return () => {
      unsubscribe();
    };
  }, [auth]);
const signOutUser = ()=>{
  setLoading(true)
  return signOut(auth)
}

  const authInfo = {
    createUser,
    loginUser,
    user,
    signOutUser,
    loading
   
  
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
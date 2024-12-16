import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();


function AuthProvider({ children }) {
const saidee ="saidee"

  const value = {
   saidee
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

function useAuth() {
    const context= useContext(AuthContext)
  return context;
}

export default useAuth

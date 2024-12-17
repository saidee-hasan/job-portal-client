import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Lottie from 'lottie-react';
import LoginData from '../assets/logon.json';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser,user } = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
    console.log('email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Lottie Animation */}
      <div className="w-64 md:w-96 mb-6 md:mb-0">
        <Lottie animationData={LoginData} />
      </div>
      
      {/* Login Form */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary-dark transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

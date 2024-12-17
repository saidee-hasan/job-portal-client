import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-react';
import { AuthContext } from '../Provider/AuthProvider';
import LottleData from '../assets/Animation.json';

export default function Register() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { createUser } = useContext(AuthContext);
  const password = watch("password");

  const onSubmit = (data) => {
    createUser(data.email, data.password);
    console.log(data);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-bg p-6">
      {/* Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <Lottie className="w-64 md:w-96" animationData={LottleData} />
      </div>

      {/* Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register('username', { required: 'Username is required' })}
              className={`mt-1 block w-full p-2 border ${errors.username ? 'border-error' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-primary`}
              placeholder="Enter your username"
            />
            {errors.username && <p className="text-error text-xs mt-1">{errors.username.message}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                },
              })}
              className={`mt-1 block w-full p-2 border ${errors.email ? 'border-error' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-primary`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              className={`mt-1 block w-full p-2 border ${errors.password ? 'border-error' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-primary`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-error text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) => value === password || 'Passwords do not match',
              })}
              className={`mt-1 block w-full p-2 border ${errors.confirmPassword ? 'border-error' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-primary`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="text-error text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Already Registered Link */}
          <p className="text-center text-neutral mb-4">
            <a href="/login" className="text-primary hover:text-primary-dark font-semibold">
              Already registered? Login here
            </a>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary-dark transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

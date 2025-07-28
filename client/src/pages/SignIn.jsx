import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {/* Back to Home */}
        <div className="absolute top-4 left-4">
          <Link to="/" className="text-blue-600 text-sm hover:text-shadow-blue-400">Back to Home</Link>
        </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Fayda ID
            </label>
            <input
              type="text"
              id="email"
              className="border border-gray-300 p-2 w-full rounded-md"
              required
              placeholder='Enter your Fayda ID'
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-2 w-full rounded-md"
              required
              placeholder='Enter your password'
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-42 py-2 rounded-md">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
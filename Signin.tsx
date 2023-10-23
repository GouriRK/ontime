// src/components/SigninForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { signInRequest } from './redux/actions';
import './tailwind.css'

const Signin: React.FC = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSignin =  async (e: any) => {
    e.preventDefault();
    
    // Basic client-side validation (you can add more validation)
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8080/Login",
      data: { email, password },
    }).then(function (response :any) {
      console.log(response.data);
    });

    // Clear the input fields
      setEmail('');
      setPassword('');
  };

  return (
    <div className="form-container bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Sign In Form</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button onClick={handleSignin} className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;

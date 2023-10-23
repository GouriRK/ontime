// src/components/SignupForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpRequest } from './redux/actions';
import axios from 'axios';
import './tailwind.css'


const Signup: React.FC= () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
      const navigate = useNavigate();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    // Basic client-side validation (you can add more validation)
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    
    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8080/Register",
      data: { email, password },
    }).then(function (response) {
      console.log(response.data);
    });

       
    // Clear the input fields
      setEmail('');
      setPassword('');

      navigate('./signin');
  };
  return (
    <div className="form-container bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Sign Up Form</h2>
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
        <button onClick={handleSignup} className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

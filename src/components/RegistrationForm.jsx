// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = async () => {
    try {
      // Send a POST request to your server's registration endpoint
      const response = await axios.post('/api/register', formData);
      // Handle the response (e.g., show a success message or redirect to login)
    } catch (error) {
      // Handle any errors (e.g., show an error message)
    }
  };

  return (
    <div>
      <div className="mb-4 w-full">
        <input
          type="text"
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          id="name"
          placeholder="Full Name"
        />
      </div>
      <div className="mb-4 w-full">
        <input
          type="email"
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          id="email"
          placeholder="Email address"
        />
      </div>

      <div className="mb-4 w-full">
        <input
          type="number"
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          id="phone"
          placeholder="Phone Number"
        />
      </div>

      <div className="mb-4 w-full">
        {/* DatePicker for date of birth */}
      </div>

      <div className="mb-4 w-full">
        <input
          type="password"
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="mb-4 w-full">
        <input
          type="password"
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="checkbox p-2">
          <input type="checkbox" id="termsAgreement" className="hover:bg-blue-900" />
          <label htmlFor="termsAgreement" className="text-white p-2">
            I agree to the Terms and Conditions
          </label>
        </div>
      </div>

      <div className="text-center md:text-left">
        <button
          onClick={handleSignUp}
          className="mb-4 btn-signup bg-blue-600 hover:bg-blue-900 text-white w-full rounded-lg"
        >
          Sign Up
        </button>
        <p className="text-sm font-semibold mt-2 text-white">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 hover:text-blue-900">Login</Link>
      </p>
      </div>
    </div>
  );
};

export default RegistrationForm;

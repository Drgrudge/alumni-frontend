// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: null,
    password: '',
    confirmPassword: '',
    role: '', // Updated role field
  });

  const [errors, setErrors] = useState({});
  const [termsAgreement, setTermsAgreement] = useState(false);

  const handleSignUp = async () => {
    // Basic validation
    if (!termsAgreement) {
      setErrors({ termsAgreement: 'You must agree to the Terms and Conditions' });
      return;
    }

    // Password matching validation
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    try {
      // Send a POST request to your server's registration endpoint
      const response = await axios.post('http://localhost:5000/register', formData);

      console.log(formData)

      console.log(response.data); // Assuming the server sends a JSON response

      // Handle the response (e.g., show a success message or redirect to login)
    } catch (error) {
      // Handle any errors (e.g., show an error message)
      console.error('Error during signup:', error);
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
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="mb-4 w-full">
        <input
          type="email"
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          id="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="mb-4 w-full">
        <input
          type="number"
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          id="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="mb-4 w-full">
        <DatePicker
          selected={formData.dateOfBirth}
          onChange={(date) => setFormData({ ...formData, dateOfBirth: date })}
          placeholderText="Date of Birth"
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
        />
      </div>
      <div className="mb-4 w-full">
        <input
          type="password"
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <div className="mb-4 w-full">
        <input
          type="password"
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </div>
      <div className="mb-4 w-full">
        <label className="text-white">Role:</label>
        <select
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="alumni">Alumni</option>
        </select>
      </div>
      {/* ... other form fields ... */}
      <div className="text-center md:text-left">
        <button
          onClick={handleSignUp}
          className="mb-4 btn-signup bg-blue-600 hover:bg-blue-900 text-white w-full rounded-lg"
        >
          Sign Up
        </button>
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword}</span>
        )}
        
        <p className="text-sm font-semibold mt-2 text-white">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-900">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;

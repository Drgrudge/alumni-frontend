import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="w-full flex">
        {/* Left column with background image (hidden on small screens) */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
            className="w-full"
          />
        </div>

        {/* Right column with login form (flex container) */}
        <div className="flex-1 p-4 md:p-8 lg:p-12 xl:p-12 flex flex-col justify-center items-center w-full">
        <form className="w-full max-w-xl p-6 rounded-lg bg-slate-800 shadow-lg text-white">
  <p className="text-xl mb-4 text-center text-white bg-blue-600 hover:bg-blue-900 w-full rounded-lg">Sign in with</p>

  {/* Social Media Sign-In Buttons */}
  <div className="flex items-center mb-4 space-x-4 justify-center md:justify-center">
    <button className="btn-facebook hover:bg-blue-900 text-white">Facebook</button>
    <button className="btn-twitter hover:bg-blue-900 text-white">Twitter</button>
    <button className="btn-linkedin hover:bg-blue-900 text-white">LinkedIn</button>
  </div>

  <div className="mb-4">
    <p className="font-semibold text-center text-white">Or</p>
  </div>

  {/* Email and Password Fields */}
  <div className="mb-4 w-full">
    <input
      type="text"
      className="input w-full"
      id="email"
      placeholder="Email address"
    />
  </div>
  <div className="mb-4">
    <input
      type="password"
      className="input w-full"
      id="password"
      placeholder="Password"
    />
  </div>

  <div className="flex justify-between items-center mb-4">
    <div className="checkbox p-2">
      <input type="checkbox" id="rememberMe" className=' hover:bg-blue-900' />
      <label htmlFor="rememberMe" className="text-white p-2">Remember me</label>
    </div>
    <a href="#!" className="text-primary text-blue-600 hover:text-blue-900">Forgot password?</a>
  </div>

  <div className="text-center md:text-left">
    <button className="mb-4 btn-login bg-blue-600 hover:bg-blue-900 text-white w-full rounded-lg">Login</button>
    <p className="text-sm font-semibold mt-2 text-white">
      Don't have an account?{' '}
      <Link to="/signup" className="text-blue-600 hover:text-blue-900">Register</Link>
    </p>
  </div>
</form>

      
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

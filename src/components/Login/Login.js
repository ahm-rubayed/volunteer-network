import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="login">
      <div className="bg-white h-auto w-96 rounded-lg shadow-lg p-6 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
        <h3 className="text-4xl font-bold pt-6">Login</h3>
        <form className="mt-12">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type your email"
              className="input border-0 focus:outline-0 border-b-2 border-slate-300 w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs mt-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="pasword"
              placeholder="Type your password"
              className="input border-0 focus:outline-0 border-b-2 border-slate-300 w-full max-w-xs"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="linear-btn w-full mt-6 rounded-full p-3 text-white "/>
        </form>
        <div className="mt-8">
          <span className="text-md block">Or register using</span>
          <div className="flex items-center justify-center mt-3">
            <Link className="text-2xl text-blue-400"><FaGoogle/></Link>
          </div>
        </div>
        <p className="mt-8">Don't have an account? <Link to="/register" className="underline decoration-solid">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logos/Group 1329.png"

const Header = () => {
    const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link>Donation</Link></li>
    <li><Link>Events</Link></li>
    <li><Link>Blog</Link></li>
    </>
  return (
<div className="navbar fixed top-0 text-white bg-">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to="/">
        <img src={logo} className="w-16 md:w-32 lg:w-48 bg-white rounded px-2" alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" className="btn bg-inherit hover:bg-inherit border-0">Login</Link>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="" src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link>Settings</Link></li>
        <li><Link>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Header;

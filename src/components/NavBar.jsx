import React from "react";
import logo from "../assets/logo.svg";
import lock from "../assets/lock.svg"

const NavBar = () => {
  return (
    <div className="w-full h-[75px] bg-white border-b">
      <div className="max-w-[1480px] m-auto w-full h-full flex justify-between items-center">
        <img src={logo} className="h-[75px] object-contain" alt="Logo" />
        <div className="flex items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className=" flex gap-4">
          <button className="flex justify-between items-center bg-transparent px-6">
            <img src={lock} />
            <span>Login</span>
          </button>
          <button className="px-8 py-3 rounded-md bg-[#20B486] font-bold">Sign up for free</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
